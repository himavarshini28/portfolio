import { Col } from "react-bootstrap";
import { useState } from "react";

export const ProfileCard = ({ name,url,content, bgImage }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    position: 'relative',
    borderRadius: '30px',
    overflow: 'hidden',
    marginBottom: '24px'
  };

  const imageStyle = {
    width: '100%',
    height: '300px',
    objectFit: 'cover'
  };

  const overlayStyle = {
    content: "",
    background: 'linear-gradient(90.21deg,rgb(26, 21, 47) -5.91%, #1E1151 111.58%)',
    opacity: '0.85',
    position: 'absolute',
    width: '100%',
    height: isHovered ? '100%' : '0',
    transition: '0.4s ease-in-out',
    top: 0,
    left: 0
  };

  const textContainerStyle = {
    position: 'absolute',
    textAlign: 'center',
    top: isHovered ? '50%' : '65%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    transition: '0.5s ease-in-out',
    opacity: isHovered ? 1 : 0,
    width: '100%'
  };

  const titleStyle = {
    fontSize: '30px',
    fontWeight: 700,
    letterSpacing: '0.8px',
    lineHeight: '1.1em',
    color: '#fff'
  };

  const usernameStyle = {
    fontStyle: 'italic',
    fontWeight: 400,
    fontSize: '15px',
    letterSpacing: '0.8px',
    color: '#fff'
  };

  return (
    <Col size={12} sm={6} md={4}>
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ textDecoration: 'none' }}
      >
        <div 
          style={cardStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src={bgImage} alt={name} style={imageStyle} />
          <div style={overlayStyle}></div>
          <div style={textContainerStyle}>
            <h4 style={titleStyle}>{name}</h4>
            <span style={usernameStyle}>{content}</span>
        
          </div>
        </div>
      </a>
    </Col>
  );
};