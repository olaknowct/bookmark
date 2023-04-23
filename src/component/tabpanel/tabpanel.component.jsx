import { useContext } from 'react';
import { FeaturesContext } from '../../context/features.context';

const Tabpanel = () => {
  const { features, selectedIndexFeature } = useContext(FeaturesContext);

  return (
    <section className='elipse right-elipse mx-auto mt-[5.3rem] max-w-[60rem] text-center md:max-w-[110.3rem] md:text-left lg:h-[46.3rem]'>
      {features.map(({ heading, img, description, alt }, index) => (
        <article
          key={index}
          id='panel-1'
          role='tabpanel'
          tabIndex='0'
          aria-labelledby='tab-1'
          hidden={selectedIndexFeature === index ? false : true}
        >
          <figure className='flex flex-col items-center md:flex-row md:items-start md:justify-start md:px-[2rem] lg:gap-2 xl:gap-10 xl:px-[0]'>
            <img src={img} alt={alt} className='w-[53.6rem] rounded-lg md:w-[40rem] lg:w-[536px]' />
            <figcaption className='flex flex-col gap-7 pt-[2rem]  md:pl-[3rem] md:pt-[1rem] lg:pt-[3rem] xl:pl-[10rem] xl:pt-[5.8rem]'>
              <h2>{heading}</h2>
              <p className='text-[1.8rem] leading-[2.8rem] tracking-[0.01rem] opacity-50 md:max-w-[40rem] lg:max-w-[45rem]'>
                {description}
              </p>
              <button className='btn-primary mt-[1.3rem] self-center md:self-start'>
                More info
              </button>
            </figcaption>
          </figure>
        </article>
      ))}
    </section>
  );
};

export default Tabpanel;
