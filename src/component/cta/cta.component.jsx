import { useState } from 'react';
import { validateLinkInput } from '../../helper/helper';

const CallToAction = () => {
  const [formEmail, setFormEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      validateLinkInput(formEmail);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setFormEmail(value);
  };

  return (
    <section>
      <div className='bg-softBlue  pb-[7.5rem] pt-[7rem] text-center text-white'>
        <span className='pl-[0.7rem] text-[1.2rem] tracking-[0.58rem]'>35,000+ ALREADY JOINED</span>
        <h2 className='mx-auto mt-[3.2rem] max-w-[45rem] leading-[4.2rem] text-white'>
          Stay up-to-date with what we’re doing
        </h2>
        <form
          onSubmit={handleSubmit}
          className=' mx-auto mt-[3.5rem] flex max-w-[44rem] flex-col justify-center gap-[1.8rem] md:flex-row'
        >
          <div className='relative flex-1 self-start'>
            <input
              onChange={handleChange}
              type='email'
              placeholder='Enter your email address'
              className='w-full rounded-lg  px-[2rem] py-[1.4rem] text-[1.4rem] text-black'
              value={formEmail}
            />
            {error && (
              <span className='absolute left-0 top-[5rem] w-full rounded-lg bg-softRed py-[1rem] pl-[2rem] text-left'>
                {error}
              </span>
            )}
          </div>
          <button className='btn-secondary flex-start px-[2rem] py-[1.4rem] text-[1.2rem] capitalize'>
            Contact Us
          </button>
        </form>
      </div>
    </section>
  );
};

export default CallToAction;
