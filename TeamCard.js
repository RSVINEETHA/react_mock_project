import React,{useState} from 'react';

const TeamCard = ({ name, position,description }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
  
    const handleHover = () => {
      setIsHovered(!isHovered);
    };
  
    const handleClick = () => {
      setIsClicked(!isClicked);
    };   
  return (
    <div className={`team-member-card ${isHovered ? 'hovered' : ''} ${isClicked ? 'clicked' : ''}`}
    onMouseEnter={handleHover}
    onMouseLeave={handleHover}
    onClick={handleClick}>
      <h5>{name}</h5>
      <p>{position}</p>
      {isClicked && <p className="description">{description}</p>}
    </div>
  );
};

export default TeamCard;