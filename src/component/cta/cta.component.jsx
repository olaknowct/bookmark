const CallToAction = () => {
  return (
    <section>
      <div className='bg-softBlue  pb-[7.5rem] pt-[7rem] text-center text-white'>
        <span className='pl-[0.7rem] text-[1.2rem] tracking-[0.58rem]'>35,000+ ALREADY JOINED</span>
        <h2 className='mx-auto mt-[3.2rem] max-w-[45rem] leading-[4.2rem] text-white'>
          Stay up-to-date with what we’re doing
        </h2>
        <form className='mx-auto mt-[3.5rem] flex max-w-[44rem] justify-center gap-[1.8rem]'>
          <input
            type='text'
            placeholder='Enter your email address'
            className='flex-1 rounded-lg px-[2rem] text-[1.4rem]'
          />
          <button className='btn-secondary flex-start px-[2rem] py-[1.4rem] text-[1.2rem] capitalize'>
            Contact Us
          </button>
        </form>
      </div>
    </section>
  );
};

export default CallToAction;
