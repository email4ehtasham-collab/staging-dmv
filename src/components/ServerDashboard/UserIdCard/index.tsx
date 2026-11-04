"use client";

import React from "react";
import styled from "styled-components";

// 👉 Props type
type UserIdCardProps = {
  name?: string;
  message?: string;
  onClick: (chatId: string) => void;
  chatId: string;
  date: string | Date;
  isUnread?: boolean;
};

// 👉 Use TRANSIENT prop ($ prefix)
type StyledProps = {
  $bgColor: string;
  $isUnread?: boolean;
};

const StyledCom = styled.div<StyledProps>`
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 18px 24px;
  background: ${({ $isUnread }) => ($isUnread ? "#f0f9ff" : "#ffffff")};
  border: 1px solid ${({ $isUnread }) => ($isUnread ? "#bae6fd" : "#f1f5f9")};
  border-radius: 12px;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease-in-out;
  box-shadow: ${({ $isUnread }) => ($isUnread ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "0 1px 2px 0 rgba(0, 0, 0, 0.05)")};

  &:hover {
    border-color: #cbd5e1;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transform: translateY(-2px);
  }

  .unread-dot {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 8px;
    height: 8px;
    background: #0ea5e9;
    border-radius: 50%;
    display: ${({ $isUnread }) => ($isUnread ? "block" : "none")};
  }

  .avatar-container {
    position: relative;
    flex-shrink: 0;
  }

  .icon-rounded {
    height: 48px;
    width: 48px;
    border-radius: 50%;
    background-color: ${({ $bgColor }) => $bgColor};
    color: #1e293b;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 18px;
    border: 2px solid #fff;
    box-shadow: 0 0 0 1px #e2e8f0;
  }

  .status-indicator {
    position: absolute;
    bottom: 2px;
    right: 2px;
    width: 12px;
    height: 12px;
    background-color: #22c55e;
    border: 2px solid #fff;
    border-radius: 50%;
  }

  .user-details {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  h6 {
    font-size: 16px;
    font-weight: 700;
    color: #0f172a;
    margin: 0;
  }

  .short-message {
    font-size: 14px;
    color: #64748b;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 400px;
  }

  .meta-info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
    flex-shrink: 0;
  }

  .message-time {
    font-size: 12px;
    font-weight: 600;
    color: #94a3b8;
    text-align: right;
  }

  .unread-badge {
    background: var(--primary-color);
    color: white;
    font-size: 10px;
    font-weight: 800;
    padding: 2px 8px;
    border-radius: 10px;
    text-transform: uppercase;
  }
`;

// 👉 stable color (better UX than random every render)
const getColorFromString = (str: string = ""): string => {
  const colors = ["#e2e8f0", "#f1f5f9", "#f8fafc", "#f1f5f9", "#e2e8f0"]; // More subtle SaaS colors
  const accentColors = ["#dbeafe", "#ccfbf1", "#fef9c3", "#ffedd5", "#f3e8ff"];
  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  return accentColors[Math.abs(hash) % accentColors.length];
};

// 👉 date formatter
const formatDateTime = (timestamp: string | Date) => {
  const date = new Date(timestamp);

  if (isNaN(date.getTime())) {
    return { formattedTime: "-", formattedDate: "-" };
  }

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  const formattedTime = `${hours % 12 || 12}:${
    minutes < 10 ? "0" : ""
  }${minutes} ${ampm}`;

  const formattedDate = date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric' 
  });

  return { formattedTime, formattedDate };
};

const UserIdCard: React.FC<UserIdCardProps> = ({
  name,
  message,
  onClick,
  chatId,
  date,
  isUnread,
}) => {
  const { formattedTime, formattedDate } = formatDateTime(date);

  // 👉 stable color based on name
  const bgColor = getColorFromString(name || "user");

  return (
    <StyledCom
      $bgColor={bgColor}
      $isUnread={isUnread}
      className={isUnread ? "not-read" : ""}
      onClick={() => onClick(chatId)}
    >
      <div className="unread-dot"></div>
      <div className="avatar-container">
        <div className="image-holder icon-rounded">
          {name ? name.charAt(0).toUpperCase() : "N/A"}
        </div>
        <div className="status-indicator"></div>
      </div>

      <div className="user-details">
        <h6>{name || "User"}</h6>
        <span className="short-message">
          {message || "No message"}
        </span>
      </div>

      <div className="meta-info">
        <span className="message-time">
          <div>{formattedTime}</div>
          <div>{formattedDate}</div>
        </span>
      </div>
    </StyledCom>
  );
};

export default UserIdCard;
