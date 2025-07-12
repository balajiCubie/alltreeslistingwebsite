import React from 'react';
import Button from '../common/Button';

interface NotificationItemProps {
  id: string;
  message: string;
  timestamp: string;
  read: boolean;
  onMarkAsRead: (id: string) => void;
  onDelete: (id: string) => void;
  onClick?: (id: string) => void; // For navigating to related content
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  id,
  message,
  timestamp,
  read,
  onMarkAsRead,
  onDelete,
  onClick,
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-sm p-4 mb-3 flex items-center justify-between ${
        read ? 'opacity-70' : 'font-semibold'
      }`}
    >
      <div className="flex-grow cursor-pointer" onClick={() => onClick && onClick(id)}>
        <p className="text-gray-800">{message}</p>
        <p className="text-sm text-gray-500 mt-1">{timestamp}</p>
      </div>
      <div className="flex space-x-2 ml-4">
        {!read && (
          <Button variant="secondary" size="small" onClick={() => onMarkAsRead(id)}>
            Mark as Read
          </Button>
        )}
        <Button variant="danger" size="small" onClick={() => onDelete(id)}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default NotificationItem;
