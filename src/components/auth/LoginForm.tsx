import React, { useState } from 'react';
import Button from '../common/Button';
import Link from 'next/link';

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
  onForgotPassword?: () => void;
  onSignUp?: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, onForgotPassword, onSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      await onLogin(email, password);
      // Handle successful login (e.g., redirect)
    } catch (err: any) {
      setError(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-6">Login</h2>
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
        <div>
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="********"
            required
            disabled={isLoading}
          />
        </div>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <Button type="submit" variant="primary" className="w-full" disabled={isLoading}>
          {isLoading ? 'Logging In...' : 'Login'}
        </Button>
      </form>
      <div className="mt-6 text-center text-sm">
        {onForgotPassword && (
          <Link href="/forgot-password" className="text-green-600 hover:underline block mb-2">
            Forgot Password?
          </Link>
        )}
        {onSignUp && (
          <p className="text-gray-700">
            Don't have an account?{' '}
            <Link href="/signup" className="text-green-600 hover:underline">
              Sign Up
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
