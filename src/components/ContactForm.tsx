import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_c18h4kj',
      'template_p0l2x34',
      formRef.current!,
      'e_rX-dUkoZhvvHOdP'
    )
    .then(() => {
      alert('Message sent successfully!');
      formRef.current?.reset();
    })
    .catch((error) => {
      console.error('EmailJS error:', error);
      alert('Failed to send message. Please try again later.');
    });
  };

  return (
    <form ref={formRef} onSubmit={sendEmail}>
      <input name="first_name" placeholder="First Name" required />
      <input name="last_name" placeholder="Last Name" required />
      <input name="user_email" placeholder="Email" type="email" required />
      <input name="phone" placeholder="Phone" required />
      <textarea name="message" placeholder="Your message" required />
      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactSection;

