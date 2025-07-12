"use client";
import React, { useState } from 'react';
import { Button } from './Button';

export const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setMessage('Subscribing...');
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (email.includes('@') && email.includes('.')) {
      setMessage('Successfully subscribed!');
      setEmail('');
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-grow px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
        required
      />
      <Button type="submit" variant="primary">
        Subscribe
      </Button>
      {message && <p className="text-sm mt-2">{message}</p>}
    </form>
  );
};
