'use client';

import React from 'react';
import styled from 'styled-components';

const StyledCom = styled.div`
  background: #ffffff;
  border: 1px solid #f1f5f9;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  padding: 32px;

  .header-area {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
    padding-bottom: 20px;
    border-bottom: 1px solid #f1f5f9;
  }

  h3 {
    font-size: 24px;
    font-weight: 800;
    color: #0f172a;
    margin: 0;
  }

  .ghost-button {
    background: #f8fafc;
    color: #475569;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 700;
    transition: all 0.2s;
    cursor: pointer;
    &:hover {
      background: #f1f5f9;
      color: var(--primary-color);
      border-color: #cbd5e1;
    }
  }

  .items-holder {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
  }

  .info-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .info-label {
    color: #64748b;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 800;
  }

  .info-value {
    color: #1e293b;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
    background: #f8fafc;
    padding: 12px 16px;
    border-radius: 10px;
    border: 1px solid #f1f5f9;
  }

  .message-box {
    grid-column: 1 / -1;
    .info-value {
      min-height: 120px;
      white-space: pre-wrap;
    }
  }

  @media (max-width: 760px) {
    padding: 20px;
    .header-area {
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
    }
    .items-holder {
        grid-template-columns: 1fr;
    }
  }
`;

const formatDateTime = (date: number | string | Date): string => {
  const newDate = new Date(date);

  const hours = newDate.getHours();
  const minutes = newDate.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  const formattedTime = `${hours % 12 || 12}:${
    minutes < 10 ? '0' : ''
  }${minutes} ${ampm}`;

  const formattedDate = `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;

  return `${formattedDate}, ${formattedTime}`;
};

interface ChatFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  createdAt: number | string | Date;
  message?: string;
}

interface ChatFormSubmitedProps {
  mainTitle: string;
  form: ChatFormData;
  onBack?: () => void;
}

const ChatFormSubmited: React.FC<ChatFormSubmitedProps> = ({
  mainTitle,
  form,
  onBack,
}) => {
  return (
    <StyledCom>
      <div className="header-area">
        <h3>{mainTitle}</h3>
        {onBack && (
          <button className="ghost-button" onClick={onBack}>
            Back to list
          </button>
        )}
      </div>

      <div className="items-holder">
        <div className="info-group">
          <span className="info-label">Full Name</span>
          <div className="info-value">
            {form?.firstName} {form?.lastName}
          </div>
        </div>

        <div className="info-group">
          <span className="info-label">Email Address</span>
          <div className="info-value">{form?.email}</div>
        </div>

        <div className="info-group">
          <span className="info-label">Phone Number</span>
          <div className="info-value">{form?.phoneNumber}</div>
        </div>

        <div className="info-group">
          <span className="info-label">Submission Date</span>
          <div className="info-value">{formatDateTime(form?.createdAt)}</div>
        </div>

        {form?.message && (
          <div className="info-group message-box">
            <span className="info-label">Message / Notes</span>
            <div className="info-value">{form.message}</div>
          </div>
        )}
      </div>
    </StyledCom>
  );
};

export default ChatFormSubmited;
