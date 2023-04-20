import heroImg from '../../images/illustration-hero.svg';

const Hero = () => {
  return (
    <section className=''>
      <div className='grid lg:grid-cols-2 gap-[2.2rem] pt-[5.53rem] px-[2rem]'>
        <div className='xl:pt-[7.874rem] order-2 lg:order-1 lg:pt-[2rem] flex flex-col text-veryDarkBlue max-w-[60rem] mx-auto text-center lg:text-left lg:max-w-[45rem] xl:max-w-[54.4rem] lg:mx-0 lg:ml-auto'>
          <h1 className='xl:text-[4.7rem] text-[3rem] xs:text-[3.5rem] sm:text-[4rem] font-semibold leading-[5.2rem]'>
            A Simple Bookmark Manager
          </h1>
          <p className='sm:text-[1.8rem] text-[1.5rem] mt-[2.6rem]  tracking-[0.01rem] opacity-60'>
            A clean and simple interface to organize your favourite websites. Open a new browser tab
            and see your sites load instantly. Try it for free
          </p>
          <div className='mt-[3.3rem] flex flex-col xs:flex-row gap-[2rem] justify-center lg:justify-start '>
            <button className='bg-softBlue text-white text-[1.5rem] px-[2.2rem] pb-[1.43rem] pt-[1.3rem] tracking-[0.02rem] rounded-lg'>
              Get it on Chrome
            </button>
            <button className='bg-grayishBlue text-veryDarkBlue  text-[1.5rem]  font-bold text-opacity-70 bg-opacity-10 font-inherit px-[2rem] pb-[1.43rem] pt-[1.3rem] rounded-lg shadow-md'>
              Get it on firefox
            </button>
          </div>
        </div>
        <div className="after:content-[''] justify-self-center order-1 lg:order-2 after:bg-softBlue after:h-[35.2rem] after:rounded-full after:w-[1000rem] after:block after:absolute lg:after:top-[20rem] after:top-[15rem] after:left-[20rem] lg:after:left-[92.5rem] after:-z-10">
          <img src={heroImg} width={657} height={466} />
        </div>
      </div>
    </section>
  );
};
export default Hero;

// [54.4rem_minmax(61.75rem, 1fr)]

// [54.4rem_61.75rem]

// pl-[5.7rem]

{
  /* <div className='grid grid-cols-[minmax(0,54.4rem)_minmax(0,65.7rem)] gap-[2.2rem] pt-[5.53rem] max-w-[122.3rem] mx-auto  '> */
}
