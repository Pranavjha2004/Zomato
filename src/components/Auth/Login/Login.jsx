import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
  const [phone, setPhone] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/otp', { phone });
      if (response.status === 200) {
        history.push('/otp', { phone });
      }
    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  return (
    <div className={styles.outerDiv}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <div className={styles.ttl}>Login</div>
          <div className={styles.closeBtn}>
            <img className={styles.closeBtnImg} src="/path/to/close/icon.png" alt="close" />
          </div>
        </div>
        <div className={styles.lgBox}>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              className={styles.phoneInp}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              required
            />
            <button type="submit" className={`${styles.btn} ${styles.Sbtn}`}>Send OTP</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
