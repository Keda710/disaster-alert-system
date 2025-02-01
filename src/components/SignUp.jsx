import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const [formData, setFormData] = useState({
        Email: '',
        Password: '',
        Location: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Keep the capitalized properties as expected by the server
        const formattedData = {
            id: Date.now(),
            Email: formData.Email.toLowerCase(), // Keep Email capitalized but convert value to lowercase
            Password: formData.Password,
            Location: formData.Location
        };

        console.log('Form submitted with data:', formattedData);

        try {
            const response = await fetch('http://localhost:3001/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formattedData)
            });

            console.log('Response status:', response.status);
            const data = await response.json();
            console.log('Response data:', data);

            if (response.ok) {
                // Store user data with the same capitalized format
                localStorage.setItem('userData', JSON.stringify({
                    id: formattedData.id,
                    Email: formattedData.Email,
                    Password: formattedData.Password,
                    Location: formattedData.Location
                }));
                navigate('/disaster-alerts');
            } else {
                setError(data.error || 'Failed to signup');
            }
        } catch (error) {
            console.error('Error during signup:', error);
            setError('Failed to connect to server');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Email</label>
                        <input
                            type="Email"
                            name="Email"
                            value={formData.Email}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Password</label>
                        <input
                            type="Password"
                            name="Password"
                            value={formData.Password}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2">Location</label>
                        <input
                            type="text"
                            name="Location"
                            value={formData.Location}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}
  