import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UpdateAlert = () => {
  const [alertData, setAlertData] = useState({
    location: '',
    disasterType: '',
    alertType: '',
  });
  const [alerts, setAlerts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAlert = {
      ...alertData,
      id: Date.now(),
      timestamp: new Date().toLocaleString()
    };
    setAlerts([...alerts, newAlert]);
    setAlertData({ location: '', disasterType: '', alertType: '' });
  };

  const handleDelete = (id) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  return (
    <div className="  mx-12 mt-10 md:px-8 lg:px-16 ">
 

      <div className="form-container bg-white dark:bg-[#2d2d2d] rounded-lg shadow-md p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Disaster Alert Form</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-white/60">
              Location
            </label>
            <input
              type="text"
              placeholder="Enter your location"
              value={alertData.location}
              onChange={(e) => setAlertData({ ...alertData, location: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 dark:text-white"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-white/60">
              Type of Disaster
            </label>
            <input
              type="text"
              placeholder="Enter disaster type"
              value={alertData.disasterType}
              onChange={(e) => setAlertData({ ...alertData, disasterType: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-white/60">
              Type of Alert
            </label>
            <select
              value={alertData.alertType}
              onChange={(e) => setAlertData({ ...alertData, alertType: e.target.value })}
              className="w-full px-3 py-2 border dark:text-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
              required
            >
              <option value="">Select alert type</option>
              <option value="red">Red Alert</option>
              <option value="orange">Orange Alert</option>
              <option value="yellow">Yellow Alert</option>
            </select>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-500  text-white font-bold py-2 px-4 rounded-md transition-colors"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="alerts-list mt-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-500">Active Alerts</h2>
        {alerts.length > 0 ? (
          alerts.map((alert) => (
            <div key={alert.id} className="bg-white rounded-xl p-5 mb-5 shadow-md">
              <div className="flex justify-between items-center mb-2.5">
                <div className=" flex items-center font-bold">
                  <i className="mr-2">📍</i>
                  <div className='text-gray-700'>{alert.location}</div>
                </div>
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => handleDelete(alert.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded cursor-pointer transition-colors"
                  >
                    Delete
                  </button>
                  <span className={`w-3 h-3 rounded-full inline-block ${
                    alert.alertType === 'red' ? 'bg-red-600' :
                    alert.alertType === 'orange' ? 'bg-orange-600' :
                    alert.alertType === 'yellow' ? 'bg-yellow-600' :
                    'bg-gray-400'
                  }`}></span>
                </div>
              </div>
              <div className={`bg-${alert.alertType}-600 hover:bg-${alert.alertType}-900 text-white px-4 py-1.5 rounded cursor-pointer transition-colors`}>

                <strong>{alert.disasterType}</strong>
                <span className="alert-description ml-2">
                  reported in the {alert.location} at {alert.timestamp} as a {alert.alertType} Area.
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white rounded-xl p-8 text-center shadow-md">
            <div className="text-gray-500 text-lg">No Active Alerts</div>
            <div className="text-gray-400 mt-2">All clear at the moment</div>
          </div>
        )}
      </div>

    </div>
  );
};

export default UpdateAlert;