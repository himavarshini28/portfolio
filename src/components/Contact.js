import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Container, Row, Col } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';  
import contactImg from '../assets/img/contact-img.svg';  

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs.send(
      'service_qos754x',       
      'template_me2mh29',      
      formDetails,             
      '-Mji1qkYMZPDV7ZP6'          
    )
    .then((response) => {
      console.log('Message sent successfully:', response);
      setButtonText("Send");
      alert("Message sent successfully!");
      setFormDetails(formInitialDetails); 
    })
    .catch((error) => {
      console.log('Failed to send message:', error);
      setButtonText("Send");
      alert("Something went wrong!");
    });
  };

  return (
    <section className="contact py-0 pb-20" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img src={contactImg} alt="Contact Us"/>
              )}
            </TrackVisibility>
          </Col>
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div >
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <input type="text" value={formDetails.firstName} placeholder="Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                        <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                        <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                      </Col>
                      <Col md={6}>
                        <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                    
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
