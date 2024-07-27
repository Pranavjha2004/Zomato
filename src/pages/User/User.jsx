import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './User.module.css';

const User = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users/1'); // Fetch user data by ID
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    fetchData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.outerDiv}>
      <div className={styles.navbar}>Navbar Component</div>
      <div className={styles.box}>
        <div className={styles.mainbody}>
          <div className={styles.leftBox}>Left Side Content</div>
          <div className={styles.rightBox}>
            <h1>{userData.name}</h1>
            <p>{userData.email}</p>
            <p>{userData.profile.bio}</p>
            <p>{userData.profile.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;