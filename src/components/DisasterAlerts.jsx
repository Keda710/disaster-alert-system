import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DisasterAlerts() {
    const [alerts, setAlerts] = useState([]);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    
    useEffect(() => {
        // Get user data from localStorage
        const userDataString = localStorage.getItem('userData');
        if (!userDataString) {
            navigate('/login');
            return;
        }
        const userData = JSON.parse(userDataString);
        setUser(userData);
    }, [navigate]);

    useEffect(() => {
        const fetchAlerts = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/alerts');
                if (response.ok) {
                    const data = await response.json();
                    // Filter alerts based on user's Location
                    const filtered = data.filter(item => item.location === user?.Location);
                    setAlerts(filtered);
                }
            } catch (error) {
                console.error('Error loading alerts:', error);
            }
        };

        if (user?.Location) {
            fetchAlerts();
        }
    }, [user?.Location]);

    const handleLogout = () => {
        localStorage.removeItem('userData');
        navigate('/login');
    };

    if (!user) return null;

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl text-blue-500 font-bold">DisAlert</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-gray-600">Support</span>
                        <span className="text-gray-600">{user.Email}</span>
                        <button 
                            onClick={handleLogout}
                            className="px-4 py-2 border rounded-md hover:bg-gray-50"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                    <h2 className="text-3xl font-bold mb-2">Fear not {user.Location}, we'll keep you informed of any issues nearby!</h2>
                    <p className="text-gray-600">Stay safe and healthy being tuned with DisAlert</p>
                </div>

                <div className="space-y-4">
                    {alerts.map((alert, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-between">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="font-semibold">{alert.location}</span>
                                </div>
                                <p className="text-gray-600">
                                    {alert.disasterType}
                                    <a href="#" className="text-blue-500 hover:underline ml-1">help guide</a>
                                </p>
                            </div>
                            <div className={`w-3 h-3 ${alert.alertType === 'red' ? 'bg-red-500' : 
                                                      alert.alertType === 'orange' ? 'bg-orange-500' : 
                                                      'bg-yellow-500'} rounded-full`}></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* <footer className="max-w-7xl mx-auto px-4 py-8 mt-8">
                <div className="flex justify-center gap-4 text-sm text-blue-500">
                    <a href="#" className="hover:underline">Terms of Service</a>
                    <a href="#" className="hover:underline">Privacy Policy</a>
                </div>
            </footer> */}
        </div>
    );
}