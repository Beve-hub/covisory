import { useState } from "react";

const ChangePass = () => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setError("");
      
      if (newPassword !== confirmPassword) {
        setError("New passwords do not match.");
        return;
      }
      
      if (newPassword.length < 6) {
        setError("Password must be at least 6 characters long.");
        return;
      }
    
    };
  
    return (
      <div className="grid items-center gap-4  p-6 bg-[var(--card-color)] rounded-lg">
        <h2 className="text-xl font-bold mb-4">Change Password</h2>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-md font-bold mb-2 ">Current Password</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-md font-bold mb-2">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-md font-bold mb-2">Confirm New Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <button type="submit" className="w-full bg-[var(--secondary-color)] text-[var(--text-white)] p-2 rounded">Change Password</button>
        </form>
      </div>
  )
}

export default ChangePass