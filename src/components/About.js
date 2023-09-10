import React from 'react';
import profilePic from '../images/HT2-cropped.jpg';

function About() {
  return (
    <div>
      <div><img src={profilePic} alt="Harriet in a black dress" /></div>
      <h1>This is the about page</h1>
    </div>
  );
}

export default About;
