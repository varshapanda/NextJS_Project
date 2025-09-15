"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import { signIn } from 'next-auth/react';
import Navbar from '@/components/layout/navbar';
import InputField from '@/components/global/input-field';
import Button from '@/components/global/button';  

const SignupPage = () => {
  const [form, setForm] = useState({ 
    email: '', 
    password: '', 
    name: '', 
    role: 'student' 
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    if (!form.email || !form.password || !form.name || !form.role) {
      setError('All fields are required.');
      return;
    }
    
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Registration failed');
        return;
      }

      console.log('Registration successful:', data);

      // Show the redirect message from backend
      setSuccess(data.message || 'Registration successful! Logging you in...');

      // Optional: Wait for DB consistency
      await new Promise((res) => setTimeout(res, 500));

      // Automatically sign in the user after registration
      const signInResponse = await signIn('credentials', {
        redirect: false,
        email: form.email,
        password: form.password,
      });

      if (signInResponse?.ok) {
        // Add a slight delay to show the success message
        setTimeout(() => {
          if (form.role === 'admin') {
            router.push('/admin_dashboard');
          } else {
            router.push('/student_dashboard');
          }
        }, 1500);
      } else {
        setError('Registration succeeded, but automatic login failed. Please sign in manually.');
      }

    } catch (err) {
      setError('An unexpected error occurred.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-16 p-4 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-2xl text-black font-bold mb-6 text-center">Sign Up</h2>
          
          {error && (
            <div className="p-3 mb-4 text-red-600 bg-red-100 rounded text-center text-sm" role="alert">
              {error}
            </div>
          )}
          
          {success && (
            <div className="p-3 mb-4 text-green-600 bg-green-100 rounded text-center text-sm" role="alert">
              {success}
            </div>
          )}
          
          <InputField
            label="Full Name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            disabled={isLoading}
            required
          />
          
          <InputField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            disabled={isLoading}
            required
          />
          
          <InputField
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password (min 6 characters)"
            disabled={isLoading}
            required
          />
          
          <div className="mb-6">
            <label htmlFor="role" className="block text-gray-700 mb-2">
              Role
            </label>
            <select
              id="role"
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black border rounded focus:outline-none focus:ring focus:border-blue-300 disabled:opacity-50"
              disabled={isLoading}
              required
            >
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          
          <Button 
            type="submit" 
            disabled={isLoading}
            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? 'Creating Account...' : 'Sign Up'}
          </Button>
          
          <div className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <button
              type="button"
              onClick={() => router.push('/signin')}
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignupPage;