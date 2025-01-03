import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './assets/styles/Contact.css';  
import '@fontsource/fira-code';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const style = {
  fontFamily: 'Fira Code',
}

const splitMessage = (message) => {
  const maxLength = 30; // Adjust this value based on your div width
  const lines = [];
  for (let i = 0; i < message.length; i += maxLength) {
    lines.push(message.slice(i, i + maxLength));
  }
  return lines;
};

function Contact() {
  const { register, handleSubmit } = useForm();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const onSubmit = data => console.log(data);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='contactContainer' style={style}>
      <div className='contactHeader'>
        <div className='contactText'>
          <h1>Contact Me</h1>
          <p>If you have any inquiries, comments or collaborations in mind</p>
        </div>
        <div className='contactHandles'>
          <div className='contactHandle'>
            <WhatsAppIcon className='contactIcon' />
            <a href="https://wa.me/+254794331651" target="_blank" rel="noopener noreferrer">Let's Chat</a>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Try Typing</h2>
        <label>
          Name:
          <input type="text" name="name" {...register('name')} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" {...register('email')} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" {...register('message')} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <div className='formDataDisplay'>
        <div className='formData'>
          <p style={{color:'lightblue'}}>1</p>
          <p style={{color:'#ffffff80'}}>{'//'} see your typed response</p>
        </div>
        
        <div className='formData'>
          <p style={{color:'lightblue'}}>2</p>
          <p>
            <span style={{color:'palevioletred'}}>const</span> message 
            <span style={{color:'palevioletred'}}> = </span>
            <span style={{color:'yellowgreen'}}>{'{'}</span> 
          </p>
        </div>
        <div className='formData'>
          <p style={{color:'lightblue'}}>3</p>
          <p className='formInput'>name: 
            <span style={{color:'gold'}}>"</span>
            <span style={{color:'gold'}}>{formData.name}</span>
            <span style={{color:'gold'}}>"</span>
          </p>
        </div>
        <div className='formData'>
          <p style={{color:'lightblue'}}>4</p>
          <p className='formInput'>email: 
            <span style={{color:'gold'}}>"</span>
            <span style={{color:'gold'}}>{formData.email}</span>
            <span style={{color:'gold'}}>"</span>
          </p>
        </div>
        <div className='formData'>
          <p style={{color:'lightblue'}}>5</p>
          <p className='formInput'>message: 
            <span style={{color:'gold'}}>"</span>
            <span style={{color:'gold'}}>{splitMessage(formData.message)[0]}</span>
            <span style={{color:'gold'}}>"</span>
          </p>
        </div>
        {splitMessage(formData.message).slice(1).map((line, index) => (
          <div className='formData' key={index}>
            <p style={{color:'lightblue'}}>{6 + index}</p>
            <p className='formInput'>
              <span style={{color:'gold'}}>"</span>
              <span style={{color:'gold'}}>{line}</span>
              <span style={{color:'gold'}}>"</span>
            </p>
          </div>
        ))}
        <div className='formData'>
          <p style={{color:'lightblue'}}>{6 + splitMessage(formData.message).length - 1}</p>
          <p style={{color:'yellowgreen'}}>{'};'}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;