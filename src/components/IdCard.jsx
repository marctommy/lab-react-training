import React from 'react';
const IdCard = (props) => {
  const { lastName, firstName, gender, height, birth, picture } = props;
  const birthString = birth.toDateString();
  return (
    <div className="Id-card">
      <ul>
        <li> Last Name: {lastName}</li>
        <li> First Name: {firstName}</li>
        <li> Gender: {gender}</li>
        <li> Height: {height}</li>
        <li> Birth: {birthString}</li>
        <img src={picture} alt="profile-pic" />
      </ul>
    </div>
  );
};

export default IdCard;
