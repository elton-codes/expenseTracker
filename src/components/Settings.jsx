import React, { useState, useContext } from 'react';
import { ExpensesContext } from '../context/ExpensesContext';
import { CategoriesContext } from '../context/CategoriesContext';
import { BudgetsContext } from '../context/BudgetsContext';

const Settings = () => {
  const { expenses, setExpenses } = useContext(ExpensesContext);
  const { categories, setCategories } = useContext(CategoriesContext);
  const { budgets, setBudgets } = useContext(BudgetsContext);

  // State for profile info
  const [profile, setProfile] = useState({
    name: 'Frank',
    email: 'frank@gmail.com',
    profilePicture: 'https://via.placeholder.com/150',
  });

  // State for notification settings
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: true,
  });

  // State for security settings
  const [security, setSecurity] = useState({
    changePassword: '',
    twoFactorAuth: false,
  });

  // Handle profile updates
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile({ ...profile, profilePicture: URL.createObjectURL(file) });
    }
  };

  // Handle notifications settings change
  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotifications({ ...notifications, [name]: checked });
  };

  // Handle security settings change
  const handleSecurityChange = (e) => {
    const { name, value } = e.target;
    setSecurity({ ...security, [name]: value });
  };

  const handleTwoFactorAuthToggle = () => {
    setSecurity({ ...security, twoFactorAuth: !security.twoFactorAuth });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md space-y-8">
      <h2 className="text-2xl font-bold">Settings</h2>

      {/* Profile Settings */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Profile Settings</h3>
        <div className="flex items-center mb-4">
          <img src={profile.profilePicture} alt="Profile" className="w-24 h-24 rounded-full mr-4" />
          <input type="file" onChange={handleProfilePictureChange} className="text-sm" />
        </div>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleProfileChange}
          placeholder="Name"
          className="p-2 border rounded mb-4 w-full"
        />
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleProfileChange}
          placeholder="Email"
          className="p-2 border rounded mb-4 w-full"
        />
      </section>

      {/* Notification Settings */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Notification Settings</h3>
        <label className="flex items-center mb-2">
          <input
            type="checkbox"
            name="emailNotifications"
            checked={notifications.emailNotifications}
            onChange={handleNotificationChange}
            className="mr-2"
          />
          Email Notifications
        </label>
        <label className="flex items-center mb-2">
          <input
            type="checkbox"
            name="pushNotifications"
            checked={notifications.pushNotifications}
            onChange={handleNotificationChange}
            className="mr-2"
          />
          Push Notifications
        </label>
      </section>

      {/* Budget Alerts */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Budget Alerts</h3>
        {categories.map((category, index) => (
          <div key={index} className="mb-4">
            <h4 className="font-semibold">{category}</h4>
            <input
              type="number"
              value={budgets[category] || ''}
              onChange={(e) => setBudgets({ ...budgets, [category]: parseFloat(e.target.value) })}
              placeholder={`Set budget for ${category}`}
              className="p-2 border rounded w-full"
            />
          </div>
        ))}
      </section>

      {/* Security Settings */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Security Settings</h3>
        <div className="mb-4">
          <h4 className="font-semibold">Change Password</h4>
          <input
            type="password"
            name="changePassword"
            value={security.changePassword}
            onChange={handleSecurityChange}
            placeholder="New Password"
            className="p-2 border rounded w-full"
          />
        </div>
        <div className="flex items-center">
          <label className="mr-2">Two-Factor Authentication</label>
          <button
            onClick={handleTwoFactorAuthToggle}
            className={`p-2 rounded ${security.twoFactorAuth ? 'bg-green-500 text-white' : 'bg-gray-300'}`}
          >
            {security.twoFactorAuth ? 'Enabled' : 'Disabled'}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Settings;
