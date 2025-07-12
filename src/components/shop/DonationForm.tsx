import React, { useState } from 'react';
import Button from '../common/Button';

interface DonationFormProps {
  onDonate: (amount: number, message?: string) => Promise<void>;
}

const DonationForm: React.FC<DonationFormProps> = ({ onDonate }) => {
  const [amount, setAmount] = useState<number | string>('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const predefinedAmounts = [10, 25, 50, 100];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setSuccess(false);

    const donationAmount = typeof amount === 'string' ? parseFloat(amount) : amount;

    if (isNaN(donationAmount) || donationAmount <= 0) {
      setError('Please enter a valid donation amount.');
      return;
    }

    setIsLoading(true);
    try {
      await onDonate(donationAmount, message);
      setSuccess(true);
      setMessage('Thank you for your generous donation!');
      setAmount('');
      // Optionally clear message as well, or keep it for confirmation
    } catch (err: any) {
      setError(err.message || 'Donation failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-6">Make a Donation</h2>
      <p className="text-gray-700 text-center mb-6">
        Your contribution helps us protect and preserve trees worldwide.
      </p>

      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> {message}</span>
        </div>
      )}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">
            Donation Amount ($)
          </label>
          <div className="flex space-x-2 mb-3">
            {predefinedAmounts.map((amt) => (
              <Button
                key={amt}
                type="button"
                variant={amount === amt ? 'primary' : 'secondary'}
                onClick={() => setAmount(amt)}
                size="small"
              >
                ${amt}
              </Button>
            ))}
          </div>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Other amount"
            min="1"
            step="0.01"
            required
            disabled={isLoading}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
            Optional Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows={3}
            placeholder="e.g., 'For the Amazon rainforest!'"
            disabled={isLoading}
          ></textarea>
        </div>
        <Button type="submit" variant="primary" className="w-full" disabled={isLoading}>
          {isLoading ? 'Processing...' : `Donate $${typeof amount === 'number' ? amount.toFixed(2) : '0.00'}`}
        </Button>
      </form>
    </div>
  );
};

export default DonationForm;
