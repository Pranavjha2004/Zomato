import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./UserSettingsPage.module.css";

const UserSettingsPage = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get("http://localhost:3000/users/1"); // Fetch user data based on user ID
      const userData = response.data;
      setUser(userData);
      setName(userData.name);
      setEmail(userData.email);
      setBio(userData.profile.bio);
      setLocation(userData.profile.location);
    };

    fetchUser();
  }, []);

  const handleUpdateProfile = async () => {
    const updatedUser = {
      ...user,
      name,
      email,
      profile: {
        ...user.profile,
        bio,
        location,
      },
    };

    await axios.put(`http://localhost:3000/users/${user.id}`, updatedUser);
    alert("Profile updated successfully!");
  };

  return (
    <div className={styles.outerDiv}>
      <div className={styles.innerDiv}>
        <div className={styles.bdy}>
          <div className={styles.header}>
            <h2 className={styles.ttl}>User Settings</h2>
          </div>
          <div className={styles.settingsBdy}>
            <div>
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Bio</label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>
            <div>
              <label>Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <button onClick={handleUpdateProfile}>Update Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettingsPage;