import React, { useState } from 'react';
import Button from '../common/Button';
import Modal from '../common/Modal';

interface FlagButtonProps {
  onFlag: (reason: string) => void;
  itemId: string; // ID of the item being flagged (e.g., comment ID, post ID)
}

const FlagButton: React.FC<FlagButtonProps> = ({ onFlag, itemId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reason, setReason] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!reason.trim()) {
      alert('Please provide a reason for flagging.');
      return;
    }
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    onFlag(reason);
    setIsSubmitting(false);
    setSubmitted(true);
    setIsModalOpen(false);
    setReason(''); // Clear reason after submission
  };

  return (
    <>
      <Button variant="outline" size="small" onClick={() => setIsModalOpen(true)}>
        Flag
      </Button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={`Flag Item: ${itemId}`}>
        <div className="p-4">
          {submitted ? (
            <p className="text-green-600 text-center">Item flagged successfully!</p>
          ) : (
            <>
              <p className="mb-4 text-gray-700">
                Please provide a reason for flagging this item. Your report helps us maintain a safe community.
              </p>
              <textarea
                className="w-full p-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
                rows={4}
                placeholder="e.g., 'Spam', 'Inappropriate content', 'Misinformation'"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                disabled={isSubmitting}
              ></textarea>
              <div className="flex justify-end space-x-2">
                <Button variant="secondary" onClick={() => setIsModalOpen(false)} disabled={isSubmitting}>
                  Cancel
                </Button>
                <Button variant="danger" onClick={handleSubmit} disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Flag'}
                </Button>
              </div>
            </>
          )}
        </div>
      </Modal>
    </>
  );
};

export default FlagButton;
