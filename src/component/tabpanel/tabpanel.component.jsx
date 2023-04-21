import { useContext } from 'react';
import { FeaturesContext } from '../../context/features.context';

const Tabpanel = () => {
  const { features, selectedIndexFeature } = useContext(FeaturesContext);

  return (
    <section className='mx-auto mt-[5.3rem] max-w-[110.rem] text-left'>
      {features.map(({ heading, img, description, alt }, index) => (
        <article
          key={index}
          id='panel-1'
          role='tabpanel'
          tabIndex='0'
          aria-labelledby='tab-1'
          hidden={selectedIndexFeature === index ? false : true}
        >
          <figure className='flex flex-row gap-10 '>
            <img src={img} alt={alt} className='rounded-lg' width={536} />
            <figcaption className='flex flex-col gap-8 pl-[10rem] pt-[5.7rem]'>
              <h2>{heading}</h2>
              <p className='max-w-[44rem] text-[1.8rem] opacity-50'>{description}</p>
              <button className='mt-[1.2rem] self-start rounded-lg bg-softBlue px-[2.2rem] pb-[1.43rem] pt-[1.3rem] text-[1.5rem] font-bold tracking-[0.02rem] text-white'>
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
