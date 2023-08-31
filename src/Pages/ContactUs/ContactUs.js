import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { PageContext } from '../../context/PageContext/PageContext';

const ContactUs = () => {
  const userDetails = useContext(PageContext);
  // console.log(userDetails);
  return (
    <>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <div>
        <h1 style={{ color: '#748720' }}>🎉🎉Welcome to ContactUsPage!🎉🎉</h1>
        <h3>UseContext Demo</h3>
        <p>{userDetails.isLoggedIn ? 'Logged In' : 'Logged Out'}</p>
        <p>Last Login :{userDetails.lastLogIn}</p>
      </div>
    </>
  );
};

export default ContactUs;
