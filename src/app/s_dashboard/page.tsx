"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { io, Socket } from "socket.io-client";
import axios from "axios";

import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Dropdown from "react-bootstrap/Dropdown";

import { ToastContainer, toast } from "react-toastify";

import UserIdCard from "@/components/ServerDashboard/UserIdCard";
import BotIdCard from "@/components/ServerDashboard/BotIdCard";
import FormIdCard from "@/components/ServerDashboard/FormIdCard";
import FormSubmitedData from "@/components/ServerDashboard/FormSubmitedData";
import ChatFormSubmited from "@/components/ServerDashboard/ChatFormSubmited";

import "react-toastify/dist/ReactToastify.css";
import "@/sass/server-dashboard.scss";
import { useMyContext } from "@/hooks/context";

export default function ServerDashboard() {
    const router = useRouter();
    const socketRef = useRef<Socket | null>(null);

    const [activeTab, setActiveTab] = useState("support-chat");
    const [chatActiveInnerTab, setChatActiveInnerTab] = useState("support-bot");
    const [formActiveInnerTab, setFormActiveInnerTab] = useState("chat-forms");

    const [activeChats, setActiveChats] = useState<any[]>([]);
    const [supportBotChats, setSupportBotChats] = useState<any[]>([]);
    const [chatForms, setChatForms] = useState<any[]>([]);
    const [contactForms, setContactForms] = useState<any[]>([]);

    const [selectedChat, setSelectedChat] = useState<any>(null);
    const [selectedForm, setSelectedForm] = useState<any>(null);
    const [selectedContactForm, setSelectedContactForm] = useState<any>(null);

    const [activeChatId, setActiveChatId] = useState<string | null>(null);
    const [messages, setMessages] = useState<any[]>([]);
    const [message, setMessage] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const { setActiveMenuItem } = useMyContext();

    useEffect(() => {
        setActiveMenuItem("dashboard");
        document.body.classList.add("dashboard-mode");

        return () => {
            document.body.classList.remove("dashboard-mode");
        };
    }, [setActiveMenuItem]);

    useEffect(() => {
        if (activeTab === "support-chat") {
            setChatActiveInnerTab("support-bot");
        }
        if (activeTab === "form-submissions") {
            setFormActiveInnerTab("chat-forms");
        }
        setSearchTerm("");
    }, [activeTab]);

    useEffect(() => {
        setSearchTerm("");
    }, [chatActiveInnerTab, formActiveInnerTab]);

    useEffect(() => {
        socketRef.current = io("https://api.dmv-gc.com/");
        const socket = socketRef.current;

        socket.emit("joinAdminRoom");

        socket.on("receiveMessage", (data) => {
            if (data.senderRole !== "admin") {
                toast.info(`New message from ${data.name}`);
            }
            // Only append message if it belongs to the active chat
            setActiveChatId((currentId) => {
                if (data.chatId === currentId) {
                    setMessages((prev) => [...prev, data]);
                }
                return currentId;
            });
        });

        socket.on("chatHistory", (msgs) => {
            setMessages(msgs);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const fetchActiveChats = async () => {
        const { data } = await axios.get("https://api.dmv-gc.com/api/active-chats");
        setActiveChats(data);
    };

    const fetchSupportBotChats = async () => {
        const { data } = await axios.get("https://api.dmv-gc.com/api/chat/getboothistory");
        setSupportBotChats(data);
    };

    const fetchChatForms = async () => {
        const { data } = await axios.get("https://api.dmv-gc.com/api/chat/get-chat-forms");
        setChatForms(data);
    };

    const fetchContactForms = async () => {
        const { data } = await axios.get("https://api.dmv-gc.com/api/auth/get-contact-forms");
        setContactForms(data);
    };

    const refreshDashboard = () => {
        fetchActiveChats();
        fetchSupportBotChats();
        fetchChatForms();
        fetchContactForms();
    };

    const deleteBotHistory = async (id: string) => {
        if (!window.confirm("Are you sure you want to delete this bot history?")) return;
        try {
            await axios.delete(`https://api.dmv-gc.com/api/chat/deleteboothistory/${id}`);
            toast.success("Bot history deleted successfully");
            fetchSupportBotChats();
        } catch (error) {
            toast.error("Failed to delete bot history");
        }
    };

    const deleteLiveChat = async (id: string) => {
        if (!window.confirm("Are you sure you want to delete this live chat?")) return;
        try {
            await axios.delete(`https://api.dmv-gc.com/api/chat/delete-live-chat/${id}`);
            toast.success("Live chat deleted successfully");
            fetchActiveChats();
        } catch (error) {
            toast.error("Failed to delete live chat");
        }
    };

    const deleteChatForm = async (id: string) => {
        if (!window.confirm("Are you sure you want to delete this chat form?")) return;
        try {
            await axios.delete(`https://api.dmv-gc.com/api/chat/delete-chat-form/${id}`);
            toast.success("Chat form deleted successfully");
            fetchChatForms();
        } catch (error) {
            toast.error("Failed to delete chat form");
        }
    };

    const deleteContactForm = async (id: string) => {
        if (!window.confirm("Are you sure you want to delete this contact form?")) return;
        try {
            await axios.delete(`https://api.dmv-gc.com/api/auth/delete-contact-form/${id}`);
            toast.success("Contact form deleted successfully");
            fetchContactForms();
        } catch (error) {
            toast.error("Failed to delete contact form");
        }
    };

    useEffect(() => {
        if (activeTab === "support-chat") {
            fetchActiveChats();
            fetchSupportBotChats();
        }
        if (activeTab === "form-submissions") {
            fetchChatForms();
            fetchContactForms();
        }
    }, [activeTab]);

    const handleChatClick = (chatId: string) => {
        setActiveChatId(chatId);
        setMessages([]);

        socketRef.current?.emit("joinAdminChat", chatId, (ack: string) => {
            if (ack === "joined") {
                socketRef.current?.emit("getChatHistory", chatId);
            }
        });
    };

    const sendMessage = () => {
        if (!message.trim()) return;

        const msg = {
            chatId: activeChatId,
            senderRole: "admin",
            message,
        };

        socketRef.current?.emit("sendMessage", msg);
        setMessages((prev) => [...prev, msg]);
        setMessage("");
    };

    const logout = () => {
        document.cookie = "token=; Max-Age=0; path=/";
        router.push("/dashboard_login");
    };

    const dashboardStats = [
        { label: "Active chats", value: activeChats.length },
        { label: "Bot histories", value: supportBotChats.length },
        { label: "Chat forms", value: chatForms.length },
        { label: "Contact forms", value: contactForms.length },
    ];


    const hideThings = true;

    // Filtering logic
    const filteredBotChats = supportBotChats.filter((chat, i) => 
        String(i + 1).includes(searchTerm) || (chat.timestamp && new Date(chat.timestamp).toLocaleString().toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const filteredActiveChats = activeChats.filter(chat => 
        (chat.name && chat.name.toLowerCase().includes(searchTerm.toLowerCase())) || 
        (chat.lastMessage && chat.lastMessage.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const filteredChatForms = chatForms.filter(form => 
        (form.firstName && form.firstName.toLowerCase().includes(searchTerm.toLowerCase())) || 
        (form.lastName && form.lastName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (form.email && form.email.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const filteredContactForms = contactForms.filter(form => 
        (form.name && form.name.toLowerCase().includes(searchTerm.toLowerCase())) || 
        (form.email && form.email.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="s-dashboard-main">
            <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k || "support-chat")}>
                <div className="content-holder-main main-tab-container">
                    <aside className="nav-area-holder">
                        <div className="main-title-holder">
                            <div className="brand-lockup">
                                <div className="brand-icon">D</div>
                                <div>
                                    <span className="dashboard-kicker">DMV GC</span>
                                    <h3 className="main-title">Dashboard</h3>
                                </div>
                            </div>
                            <Dropdown align="end">
                                <Dropdown.Toggle as="button" className="icon-rounded logout-button" aria-label="Dashboard menu">
                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                                        <path d="M8 12C9.10457 12 10 12.8954 10 14C10 15.1046 9.10457 16 8 16C6.89543 16 6 15.1046 6 14C6 12.8954 6.89543 12 8 12Z" fill="currentColor" />
                                        <path d="M8 6C9.10457 6 10 6.89543 10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6Z" fill="currentColor" />
                                        <path d="M10 2C10 0.89543 9.10457 0 8 0C6.89543 0 6 0.895431 6 2C6 3.10457 6.89543 4 8 4C9.10457 4 10 3.10457 10 2Z" fill="currentColor" />
                                    </svg>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as="button" className="btn" onClick={logout}>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        <div className="nav-section">
                            <Nav variant="tabs" className="main-tabs">
                                <Nav.Item>
                                    <Nav.Link eventKey="support-chat">Chat Support</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="form-submissions">Forms</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>

                        <div className="nav--logout-button-holder">
                            <button className="btn button-primary btn-c-rounded w-100 nav--logout-button" onClick={logout}>Logout</button>
                        </div>
                    </aside>
                    {hideThings && 
                        <main className="content-section ">
                            <div className="dashboard-topbar">
                                <div>
                                    {/* <span className="dashboard-kicker">Operations center</span> */}
                                    <h1>Customer support overview</h1>
                                    {/* <p>Monitor conversations, review lead forms, and follow up with homeowners quickly.</p> */}
                                </div>
                                <div className="d-flex gap-3 align-items-center">
                                    <div className="search-bar-holder">
                                        <input 
                                            type="text" 
                                            className="form-control dashboard-search" 
                                            placeholder="Search..." 
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                    </div>
                                    <button className="btn button-primary refresh-button" onClick={refreshDashboard}>Refresh</button>
                                </div>
                            </div>

                            <div className="stat-grid">
                                {dashboardStats.map((item) => (
                                    <div className="stat-card" key={item.label}>
                                        <span>{item.label}</span>
                                        <strong>{item.value}</strong>
                                    </div>
                                ))}
                            </div>

                            <Tab.Content>
                                <Tab.Pane eventKey="support-chat">
                                    <Tab.Container
                                        activeKey={chatActiveInnerTab}
                                        onSelect={(k) => setChatActiveInnerTab(k || "support-bot")}
                                    >
                                        <Nav variant="tabs" className="inner-tabs">
                                            <Nav.Item>
                                                <Nav.Link eventKey="support-bot">Support Bot</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="live-chat">Live Chat</Nav.Link>
                                            </Nav.Item>
                                        </Nav>

                                        <Tab.Content>
                                            <Tab.Pane eventKey="support-bot">
                                                {selectedChat ? (
                                                    <div className="panel-shell detail-panel">
                                                        <div className="panel-header">
                                                            <div>
                                                                <span className="dashboard-kicker">Support bot</span>
                                                                <h2>Conversation history</h2>
                                                            </div>
                                                            <button className="btn ghost-button" onClick={() => setSelectedChat(null)}>Back</button>
                                                        </div>
                                                        <div className="timeline-list">
                                                            {selectedChat.messages?.length ? selectedChat.messages.map((msg: any, index: number) => (
                                                                <React.Fragment key={msg._id || index}>
                                                                    {msg.question && (
                                                                        <div className="timeline-item bot-message">
                                                                            <p>{msg.question}</p>
                                                                            <span className="user-indicator">Bot Question</span>
                                                                        </div>
                                                                    )}
                                                                    {msg.answer && (
                                                                        <div className="timeline-item user-message">
                                                                            <p>{msg.answer}</p>
                                                                            <span className="user-indicator">User Answer</span>
                                                                        </div>
                                                                    )}
                                                                    {msg.text && (
                                                                        <div className="timeline-item bot-message">
                                                                            <p>{msg.text}</p>
                                                                            <span className="user-indicator">Bot Message</span>
                                                                        </div>
                                                                    )}
                                                                </React.Fragment>
                                                            )) : (
                                                                <div className="empty-state">No messages found for this bot history.</div>
                                                            )}
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="panel-shell">
                                                        <div className="panel-header">
                                                            <div>
                                                                <span className="dashboard-kicker">Saved bot journeys</span>
                                                                <h2>Support bot history</h2>
                                                            </div>
                                                            <span className="count-pill">{supportBotChats.length}</span>
                                                        </div>
                                                        <div className="users-cards-list">
                                                            {filteredBotChats.length ? filteredBotChats.map((chat, i) => (
                                                                <div key={chat._id} className="position-relative">
                                                                    <BotIdCard
                                                                        name={String(i + 1)}
                                                                        date={chat.timestamp}
                                                                        onClick={() => setSelectedChat(chat)}
                                                                    />
                                                                    <button className="delete-item-btn" onClick={() => deleteBotHistory(chat._id)}>
                                                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6"/></svg>
                                                                    </button>
                                                                </div>
                                                            )) : (
                                                                <div className="empty-state">No bot histories yet.</div>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="live-chat">
                                                {activeChatId ? (
                                                    <div className="panel-shell chat-workspace">
                                                        <div className="panel-header">
                                                            <div>
                                                                <span className="dashboard-kicker">Live conversation</span>
                                                                <h2>Active chat</h2>
                                                            </div>
                                                            <button className="btn ghost-button" onClick={() => setActiveChatId(null)}>Back</button>
                                                        </div>

                                                        <div className="message-thread">
                                                            {messages.length ? messages.map((msg, i) => (
                                                                <div className={`message-bubble ${msg.senderRole === "admin" ? "admin" : "customer"}`} key={i}>
                                                                    <p>{msg.message}</p>
                                                                    <span>{msg.senderRole === "admin" ? "Admin" : msg.name || "Customer"}</span>
                                                                </div>
                                                            )) : (
                                                                <div className="empty-state">No messages in this chat yet.</div>
                                                            )}
                                                        </div>

                                                        <div className="write-msg-holder">
                                                            <div className="input-holder">
                                                                <input
                                                                    className="form-control"
                                                                    value={message}
                                                                    placeholder="Write a reply"
                                                                    onChange={(e) => setMessage(e.target.value)}
                                                                    onKeyDown={(e) => {
                                                                        if (e.key === "Enter") sendMessage();
                                                                    }}
                                                                />
                                                            </div>
                                                            <button className="btn button-primary send-message-button" onClick={sendMessage}>Send</button>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="panel-shell">
                                                        <div className="panel-header">
                                                            <div>
                                                                <span className="dashboard-kicker">Customers online</span>
                                                                <h2>Live chat inbox</h2>
                                                            </div>
                                                            <span className="count-pill">{activeChats.length}</span>
                                                        </div>
                                                        <div className="users-cards-list">
                                                            {filteredActiveChats.length ? filteredActiveChats.map((chat) => (
                                                                <div key={chat._id} className="position-relative">
                                                                    <UserIdCard
                                                                        name={chat.name}
                                                                        message={chat.lastMessage}
                                                                        chatId={chat._id}
                                                                        date={chat.createdAt}
                                                                        onClick={(id) => handleChatClick(id)}
                                                                    />
                                                                    <button className="delete-item-btn" onClick={() => deleteLiveChat(chat._id)}>
                                                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6"/></svg>
                                                                    </button>
                                                                </div>
                                                            )) : (
                                                                <div className="empty-state">No active live chats right now.</div>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </Tab.Pane>

                                <Tab.Pane eventKey="form-submissions">
                                    <Tab.Container
                                        activeKey={formActiveInnerTab}
                                        onSelect={(k) => setFormActiveInnerTab(k || "chat-forms")}
                                    >
                                        <Nav variant="tabs" className="inner-tabs">
                                            <Nav.Item>
                                                <Nav.Link eventKey="chat-forms">Chat Forms</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="contact-forms">Contact Forms</Nav.Link>
                                            </Nav.Item>
                                        </Nav>

                                        <Tab.Content>
                                            <Tab.Pane eventKey="chat-forms">
                                                {selectedForm ? (
                                                    <ChatFormSubmited mainTitle="Chat Form" form={selectedForm} onBack={() => setSelectedForm(null)} />
                                                ) : (
                                                    <div className="panel-shell">
                                                        <div className="panel-header">
                                                            <div>
                                                                <span className="dashboard-kicker">Lead capture</span>
                                                                <h2>Chat form submissions</h2>
                                                            </div>
                                                            <span className="count-pill">{chatForms.length}</span>
                                                        </div>
                                                        <div className="users-cards-list">
                                                            {filteredChatForms.length ? filteredChatForms.map((form) => (
                                                                <div key={form._id} className="position-relative">
                                                                    <FormIdCard
                                                                        nameId={form.firstName}
                                                                        date={form.createdAt}
                                                                        onClick={() => setSelectedForm(form)}
                                                                    />
                                                                    <button className="delete-item-btn" onClick={() => deleteChatForm(form._id)}>
                                                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6"/></svg>
                                                                    </button>
                                                                </div>
                                                            )) : (
                                                                <div className="empty-state">No chat forms submitted yet.</div>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="contact-forms">
                                                {selectedContactForm ? (
                                                    <FormSubmitedData mainTitle="Contact Form" form={selectedContactForm} onBack={() => setSelectedContactForm(null)} />
                                                ) : (
                                                    <div className="panel-shell">
                                                        <div className="panel-header">
                                                            <div>
                                                                <span className="dashboard-kicker">Website leads</span>
                                                                <h2>Contact form submissions</h2>
                                                            </div>
                                                            <span className="count-pill">{contactForms.length}</span>
                                                        </div>
                                                        <div className="users-cards-list">
                                                            {filteredContactForms.length ? filteredContactForms.map((form) => (
                                                                <div key={form._id} className="position-relative">
                                                                    <FormIdCard
                                                                        nameId={form.name}
                                                                        date={form.createdAt}
                                                                        onClick={() => setSelectedContactForm(form)}
                                                                    />
                                                                    <button className="delete-item-btn" onClick={() => deleteContactForm(form._id)}>
                                                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6"/></svg>
                                                                    </button>
                                                                </div>
                                                            )) : (
                                                                <div className="empty-state">No contact forms submitted yet.</div>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </Tab.Pane>
                            </Tab.Content>
                        </main>
                    
                    }
                </div>
            </Tab.Container>

            <ToastContainer />
        </div>
    );
}
