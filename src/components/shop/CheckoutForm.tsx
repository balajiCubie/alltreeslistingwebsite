import React, { useState } from 'react';
import Button from '../common/Button';

interface CheckoutFormProps {
  totalAmount: number;
  onCheckout: (paymentDetails: { cardNumber: string; expiryDate: string; cvv: string; nameOnCard: string }) => Promise<void>;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ totalAmount, onCheckout }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setIsLoading(true);
    setSuccess(false);

    try {
      await onCheckout({ cardNumber, expiryDate, cvv, nameOnCard });
      setSuccess(true);
      setMessage('Payment successful! Thank you for your order.');
      setCardNumber('');
      setExpiryDate('');
      setCvv('');
      setNameOnCard('');
    } catch (err: any) {
      setError(err.message || 'Payment failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg mx-auto">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-6">Checkout</h2>
      <p className="text-center text-xl text-green-700 mb-6">Total: ${totalAmount.toFixed(2)}</p>

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
          <label htmlFor="cardNumber" className="block text-gray-700 text-sm font-bold mb-2">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="XXXX XXXX XXXX XXXX"
            required
            disabled={isLoading}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="expiryDate" className="block text-gray-700 text-sm font-bold mb-2">
              Expiry Date (MM/YY)
            </label>
            <input
              type="text"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="MM/YY"
              required
              disabled={isLoading}
            />
          </div>
          <div>
            <label htmlFor="cvv" className="block text-gray-700 text-sm font-bold mb-2">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="XXX"
              required
              disabled={isLoading}
            />
          </div>
        </div>
        <div>
          <label htmlFor="nameOnCard" className="block text-gray-700 text-sm font-bold mb-2">
            Name on Card
          </label>
          <input
            type="text"
            id="nameOnCard"
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Full Name"
            required
            disabled={isLoading}
          />
        </div>
        <Button type="submit" variant="primary" className="w-full" disabled={isLoading}>
          {isLoading ? 'Processing...' : `Pay $${totalAmount.toFixed(2)}`}
        </Button>
      </form>
    </div>
  );
};

export default CheckoutForm;
