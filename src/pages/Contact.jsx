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
      <div className="bg-[#e88069] w-full flex h-[500px] items-center rounded-xl">
        <div className="basis-1/2 px-20 py-20">
          <h1 className="text-white font-bold text-4xl pb-10">Contact Us</h1>
          <p className="text-white">
            Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.
          </p>
        </div>
        <form className="flex flex-col basis-1/2 px-10" onSubmit={handleSubmit}>
          <input
            className="inputStyle"
            placeholder="Name"
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-white font-bold">* {errors.name}</p>}

          <input
            className="inputStyle"
            placeholder="Email"
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-white font-bold">* {errors.email}</p>}

          <input
            className="inputStyle"
            placeholder="Number"
            type="number"
            name="number"
            value={formValues.number}
            onChange={handleChange}
          />
          {errors.number && <p className="text-white font-bold">* {errors.number}</p>}

          <textarea
            className="inputStyle"
            placeholder="Message"
            name="message"
            value={formValues.message}
            onChange={handleChange}
          />
          {errors.message && <p className="text-white font-bold"> * {errors.message}</p>}

          <button className="bg-white text-black uppercase py-3 rounded-lg px-8 self-end mt-5">
            Submit
          </button>
        </form>
      </div>

      <Location/>
    </section>
  );
}
