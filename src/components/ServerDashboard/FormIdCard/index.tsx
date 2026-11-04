'use client';

import React from 'react';
import styled from 'styled-components';

interface StyledProps {
  $isUnread?: boolean;
}

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

  .icon-rounded {
    height: 48px;
    width: 48px;
    border-radius: 12px;
    background: #f1f5f9;
    color: #475569;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 18px;
    flex-shrink: 0;
  }

  .user-details {
    flex: 1;
    min-width: 0;
  }

  h6 {
    font-size: 16px;
    font-weight: 700;
    color: #0f172a;
    margin: 0;
  }

  .form-tag {
    display: inline-block;
    font-size: 11px;
    font-weight: 700;
    color: #0891b2;
    background: #ecfeff;
    padding: 2px 8px;
    border-radius: 6px;
    margin-top: 4px;
    text-transform: uppercase;
  }

  .message-time {
    font-size: 12px;
    font-weight: 600;
    color: #94a3b8;
    text-align: right;
    line-height: 1.5;
    flex-shrink: 0;
  }
`;

const formatDateTime = (timestamp: number | string | Date) => {
  const date = new Date(timestamp);

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  const formattedTime = `${hours % 12 || 12}:${
    minutes < 10 ? '0' : ''
  }${minutes} ${ampm}`;

  const formattedDate = date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric' 
  });

  return { formattedTime, formattedDate };
};

interface FormIdCardProps {
  nameId?: string;
  date: number | string | Date;
  onClick?: () => void;
  isUnread?: boolean;
}

const FormIdCard: React.FC<FormIdCardProps> = ({
  nameId,
  date,
  onClick,
  isUnread,
}) => {
  const { formattedTime, formattedDate } = formatDateTime(date);

  return (
    <StyledCom $isUnread={isUnread} onClick={onClick}>
      <div className="unread-dot"></div>
      <div className="icon-rounded">
        {(nameId || 'F').charAt(0).toUpperCase()}
      </div>

      <div className="user-details">
        <h6>{nameId ? nameId : 'New Form'}</h6>
        <span className="form-tag">Lead Form</span>
      </div>

      <span className="message-time">
        <div>{formattedTime}</div>
        <div>{formattedDate}</div>
      </span>
    </StyledCom>
  );
};

export default FormIdCard;
