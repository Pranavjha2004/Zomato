import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './EnterOTP.module.css';

const EnterOTP = () => {
  const [otp, setOtp] = useState('');
  const history = useHistory();
  const location = useLocation();

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    const { phone } = location.state;
    try {
      const response = await axios.post('http://localhost:3000/verify-otp', { phone, otp });
      if (response.status === 200) {
        history.push('/profile');
      }
    } catch (error) {
      console.error('Error verifying OTP', error);
    }
  };

  return (
    <div className={styles.outerDiv}>
      <div className={styles.innerDiv}>
        <div className={styles.header}>
          <div className={styles.title}>Enter OTP</div>
          <div className={styles.closeBtn}>
            <img className={styles.closeBtnImg} src="/path/to/close/icon.png" alt="close" />
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.txt1}>We have sent an OTP to your phone</div>
          <form onSubmit={handleVerifyOTP} className={styles.OTPBox}>
            <input
              type="text"
              className={styles.inpBox}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              required
            />
            <button type="submit" className={styles.okBtn}>Verify OTP</button>
          </form>
        </div>
        <div className={styles.footerBox}>
          <div className={styles.time}>00:30</div>
          <div className={styles.footerTxt}>
            Didn't receive the OTP? <span className={styles.resendTxt}>Resend</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterOTP;
