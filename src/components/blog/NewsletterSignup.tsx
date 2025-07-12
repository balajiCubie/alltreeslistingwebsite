import React, { useState } from 'react';
import Button from '../common/Button';

interface NewsletterSignupProps {
  onSignup: (email: string) => Promise<void>;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ onSignup }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');
    setIsLoading(true);
    try {
      await onSignup(email);
      setMessage('Thank you for signing up for our newsletter!');
      setEmail('');
    } catch (err: any) {
      setError(err.message || 'Failed to sign up. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-green-100 p-6 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold text-green-800 mb-4">Stay Updated!</h2>
      <p className="text-gray-700 mb-4">
        Subscribe to our newsletter for the latest tree news, updates, and conservation efforts.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          required
          disabled={isLoading}
        />
        <Button type="submit" variant="primary" disabled={isLoading}>
          {isLoading ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>
      {message && <p className="text-green-600 text-sm mt-4">{message}</p>}
      {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
    </div>
  );
};

export default NewsletterSignup;
