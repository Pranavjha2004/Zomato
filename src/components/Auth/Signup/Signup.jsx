import React, { useState } from 'react';
import axios from 'axios';
import styles from './Signup.module.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState('');
  const [bio, setBio] = useState('');
  const [location, setLocation] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/users', {
        name, phone, email, password, profile: { avatar, bio, location }
      });
      alert('User registered successfully!');
    } catch (error) {
      console.error('Error signing up', error);
    }
  };

  return (
    <div className={styles.outerDiv}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <div className={styles.ttl}>Signup</div>
          <div className={styles.closeBtn}>
            <img className={styles.closeBtnImg} src="/path/to/close/icon.png" alt="close" />
          </div>
        </div>
        <div className={styles.lgBox}>
          <form onSubmit={handleSignup}>
            <input
              type="text"
              className={styles.inpBox}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
            <input
              type="text"
              className={styles.inpBox}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              required
            />
            <input
              type="email"
              className={styles.inpBox}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <input
              type="password"
              className={styles.inpBox}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            <input
              type="text"
              className={styles.inpBox}
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              placeholder="Enter avatar URL"
            />
            <input
              type="text"
              className={styles.inpBox}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Enter your bio"
            />
            <input
              type="text"
              className={styles.inpBox}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter your location"
            />
            <button type="submit" className={styles.btn}>Signup</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
