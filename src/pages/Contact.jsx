import { useState } from 'react';
import Location from '../components/about/Location';

export default function Contact() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formValues.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formValues.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = 'Email is not valid';
    }
    if (!formValues.number.trim()) {
      newErrors.number = 'Number is required';
    }
    if (!formValues.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      
      alert(`Thanks ${formValues.name}, your form has been sended! `);
      window.location.reload(true);
    }
  };

  return (
    <section className="max-w-[1070px] m-auto">
      <div className="bg-[#e88069] w-full flex flex-col sm:flex-row sm:h-[500px] sm:items-center rounded-xl py-5 sm:py-0">
        <div className="px-10 py-5 sm:py-20 sm:px-20 sm:basis-1/2 sm:mb-10">
          <h1 className="pb-10 text-4xl font-bold text-center text-white sm:text-left">Contact Us</h1>
          <p className="text-center text-white sm:text-left">
            Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.
          </p>
        </div>
        <form className="flex flex-col px-10 basis-1/2 sm:w-full" onSubmit={handleSubmit}>
          <input
            className="inputStyle"
            placeholder="Name"
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
          {errors.name && <p className="font-bold text-white">* {errors.name}</p>}

          <input
            className="inputStyle"
            placeholder="Email"
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          {errors.email && <p className="font-bold text-white">* {errors.email}</p>}

          <input
            className="inputStyle"
            placeholder="Number"
            type="number"
            name="number"
            value={formValues.number}
            onChange={handleChange}
          />
          {errors.number && <p className="font-bold text-white">* {errors.number}</p>}

          <textarea
            className="inputStyle"
            placeholder="Message"
            name="message"
            value={formValues.message}
            onChange={handleChange}
          />
          {errors.message && <p className="font-bold text-white"> * {errors.message}</p>}

          <button className="self-center px-8 py-3 mt-5 mb-5 text-black uppercase bg-white rounded-lg sm:self-end ">
            Submit
          </button>
        </form>
      </div>

      <Location/>
    </section>
  );
}
