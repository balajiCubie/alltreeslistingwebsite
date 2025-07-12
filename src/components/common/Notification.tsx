import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface NotificationProps {
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  duration?: number; // in milliseconds, 0 for persistent
  onClose?: () => void;
}

const Notification: React.FC<NotificationProps> = ({
  message,
  type = 'info',
  duration = 3000,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onClose) onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  if (!isVisible) return null;

  const typeStyles = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
    warning: 'bg-yellow-500',
  };

  return createPortal(
    <div
      className={`fixed bottom-4 right-4 p-4 rounded-md text-white shadow-lg flex items-center justify-between z-50 ${typeStyles[type]}`}
      role="alert"
    >
      <span>{message}</span>
      <button onClick={() => { setIsVisible(false); if (onClose) onClose(); }} className="ml-4 text-white font-bold">
        &times;
      </button>
    </div>,
    document.body
  );
};

export default Notification;
