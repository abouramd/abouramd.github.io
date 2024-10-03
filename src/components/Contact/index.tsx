import './index.css';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa6';
import { Store } from 'react-notifications-component';

export default function Contact(): JSX.Element {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xkgwogzw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);

      if (data?.ok) {
        Store.addNotification({
          title: 'success',
          message: 'Message sent successfully',
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true
          },
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        Store.addNotification({
          title: 'error',
          message: data?.error || 'Failed to send message',
          type: "danger",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true
          },
        });

      }
    } catch (error) {
      Store.addNotification({
        title: 'error',
        message: (error as Error).message || 'Failed to send message',
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        },
      });

    }
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <p>I’d Love to Hear From You!</p>
      <p>If you have any questions, feedback, or just want to say hello, feel free to reach out!</p>
      <ul>
        <li><strong>Drop me an email</strong> at <a href="mailto:abdelhaybouramdane@gmail.com">abdelhaybouramdane@gmail.com <FaPaperPlane /></a> – I love getting messages from you!</li>
        <li><strong>Or, simply fill out the form below</strong>. I’ll get back to you as soon as possible!</li>
      </ul>
      <p>Your thoughts matter to me, and I’m here to help!</p>
      <form onSubmit={handleSubmit}>
        <div className='label-div'>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='label-div'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='label-div'>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};


