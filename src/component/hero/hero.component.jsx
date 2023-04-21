import heroImg from '../../images/illustration-hero.svg';

const Hero = () => {
  return (
    <section className=''>
      <div className='grid gap-[2.2rem] px-[2rem] pt-[5.53rem] lg:grid-cols-2'>
        <div className='order-2 mx-auto flex max-w-[60rem] flex-col text-center text-veryDarkBlue lg:order-1 lg:mx-0 lg:ml-auto lg:max-w-[45rem] lg:pt-[2rem] lg:text-left xl:max-w-[54.4rem] xl:pt-[7.874rem]'>
          <h1>A Simple Bookmark Manager</h1>
          <p className='mt-[2.6rem] text-[1.5rem] tracking-[0.01rem]  opacity-60 sm:text-[1.8rem]'>
            A clean and simple interface to organize your favourite websites. Open a new browser tab
            and see your sites load instantly. Try it for free
          </p>
          <div className='mt-[3.3rem] flex flex-col justify-center gap-[2rem] xs:flex-row lg:justify-start '>
            <button className='btn-primary'>Get it on Chrome</button>
            <button className='font-inherit rounded-lg  bg-grayishBlue  bg-opacity-10 px-[2rem] pb-[1.43rem] pt-[1.3rem] text-[1.5rem] font-bold text-veryDarkBlue text-opacity-70 shadow-md'>
              Get it on Firefox
            </button>
          </div>
        </div>
        <div className='left-elipse elipse order-1 justify-self-center lg:order-2 lg:justify-self-start'>
          <img src={heroImg} width={657} height={466} alt='Hero bookmark website' />
        </div>
      </div>
    </section>
  );
};
export default Hero;
