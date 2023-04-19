import heroImg from '../../images/illustration-hero.svg';
import { ReactComponent as HeroImg } from '../../images/illustration-hero.svg';

const Hero = () => {
  return (
    <section className=''>
      <div className='grid grid-cols-2  gap-[2.2rem] pt-[5.53rem] '>
        <div className='pt-[7.874rem] text-veryDarkBlue max-w-[54.4rem] ml-auto'>
          <h1 className='text-[4.7rem] font-semibold leading-[5.2rem]'>
            A Simple Bookmark Manager
          </h1>
          <p className='text-[1.8rem] mt-[2.6rem] tracking-[0.01rem] opacity-60'>
            A clean and simple interface to organize your favourite websites. Open a new browser tab
            and see your sites load instantly. Try it for free
          </p>
          <button className='bg-softBlue text-white mt-[3.3rem] text-[1.5rem] px-[2.2rem] pb-[1.43rem] pt-[1.3rem] tracking-[0.02rem] rounded-lg'>
            Get it on Chrome
          </button>
          <button className='bg-grayishBlue text-veryDarkBlue text-[1.5rem] ml-[2rem] font-bold text-opacity-70 bg-opacity-10 font-inherit px-[2rem] pb-[1.43rem] pt-[1.3rem] rounded-lg shadow-md'>
            Get it on firefox
          </button>
        </div>
        <div className="after:content-[''] after:bg-softBlue after:h-[35.2rem] after:rounded-full after:w-[1000rem] after:block after:absolute after:top-[20rem] after:left-[92.5rem] after:-z-10">
          {/* <HeroImg /> */}
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
