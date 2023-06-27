import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <form>
        <label for="name">Enter your Name:</label> 
        <input type="text" id="name"></input>
        <label for="email">Enter your Email Address:</label>
        <input type="text" id="email"></input>
        <label for="message">Enter your message:</label>
        <input type="textarea"></input>
        <input type="submit">Submit</input>
      </form>
    </div>
  );
}
