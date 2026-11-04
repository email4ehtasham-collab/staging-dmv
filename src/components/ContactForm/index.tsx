'use client';

import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import styles from './style.module.scss';

const ContactForm = () => {
    
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        message: ''
    });
    const [inputActive, setInputActive] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const response = await axios.post('https://api.dmv-gc.com/api/auth/contact-form', formData);
            const response = await axios.post('https://api.dmv-gc.com/api/auth/contact-form', formData);
            if (response.status === 200) {
                toast.success('Form submitted successfully!',{ position: 'top-right' });
                setFormData({
                    name: '',
                    phoneNumber: '',
                    email: '',
                    message: ''
                });
            }
        } catch (error) {
            toast.error('Error submitting form. Please try again.', { position: 'top-right' });
            console.error('Error submitting form:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setInputActive(value !== '' ? true : false);
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className={`${styles['input-item']}`}>
                <input
                    type="text"
                    name="name"
                    className={`form-control ${styles['form-control']} ${formData.name ? 'active' : ''}`}
                    value={formData.name}
                    onChange={handleInputChange}
                />
                <label>Name</label>
                <div className={styles['border_']}></div>
            </div>
            <div className={`${styles['input-item']}`}>
                <input
                    type="number"
                    name="phoneNumber"
                    className={`form-control ${styles['form-control']} ${formData.phoneNumber ? 'active' : ''}`}
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                />
                <label>Phone</label>
                <div className={styles['border_']}></div>
            </div>
            <div className={`${styles['input-item']}`}>
                <input
                    type="email"
                    name="email"
                    className={`form-control ${styles['form-control']} ${formData.email ? 'active' : ''}`}
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <label>Email</label>
                <div className={styles['border_']}></div>
            </div>
            <div className={`${styles['input-item']}`}>
                <textarea
                    name="message"
                    className={`form-control ${styles['form-control']} ${formData.message ? 'active' : ''}`}
                    value={formData.message}
                    onChange={handleInputChange}
                />
                <label>Message</label>
                <div className={styles['border_']}></div>
            </div>
            <div className="form-button-holder">
                <button className="btn button-primary btn-c-rounded" type="submit">Submit</button>
            </div>
            <ToastContainer />
        </form>
    );
};

export default ContactForm;
