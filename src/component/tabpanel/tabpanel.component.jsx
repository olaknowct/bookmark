import { useContext } from 'react';
import { FeaturesContext } from '../../context/features.context';

const Tabpanel = () => {
  const { features, selectedIndexFeature } = useContext(FeaturesContext);

  return (
    <section className='mt-[5.3rem] max-w-[110.rem] mx-auto text-left'>
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
            <figcaption className='pt-[5.7rem] pl-[10rem] flex flex-col gap-8'>
              <h2>{heading}</h2>
              <p className='text-[1.8rem] opacity-50 max-w-[44rem]'>{description}</p>
              <button className='bg-softBlue text-white text-[1.5rem] px-[2.2rem] pb-[1.43rem] pt-[1.3rem] tracking-[0.02rem] rounded-lg font-bold mt-[1.2rem] self-start'>
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
