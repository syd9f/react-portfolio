import React from 'react';
import '../../App';

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <form>
        <div className="form-row">
          <label for="name">Enter your Name:</label> 
          <input type="text" id="name" />
        </div>

        <div className="form-row">
          <label for="email">Enter your Email Address:</label>
          <input type="text" id="email" />
        </div>

        <div className="form-row">
          <label for="message">Enter your message:</label>
          <input type="textarea" />
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
