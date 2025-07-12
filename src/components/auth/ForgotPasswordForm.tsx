import React, { useState } from 'react';
import Button from '../common/Button';
import Link from 'next/link';

interface ForgotPasswordFormProps {
  onResetRequest: (email: string) => void;
  onLogin?: () => void;
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({ onResetRequest, onLogin }) => {
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
      await onResetRequest(email);
      setMessage('If an account with that email exists, a password reset link has been sent.');
    } catch (err: any) {
      setError(err.message || 'Failed to send reset link. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-6">Forgot Password</h2>
      <p className="text-gray-700 text-center mb-6">
        Enter your email address below and we'll send you a link to reset your password.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="your@example.com"
            required
            disabled={isLoading}
          />
        </div>
        {message && <p className="text-green-600 text-sm text-center">{message}</p>}
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <Button type="submit" variant="primary" className="w-full" disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send Reset Link'}
        </Button>
      </form>
      {onLogin && (
        <p className="mt-6 text-center text-sm text-gray-700">
          Remember your password?{' '}
          <Link href="/login" className="text-green-600 hover:underline">
            Login
          </Link>
        </p>
      )}
    </div>
  );
};

export default ForgotPasswordForm;
