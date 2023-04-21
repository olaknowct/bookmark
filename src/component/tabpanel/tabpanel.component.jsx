import { useContext } from 'react';
import { FeaturesContext } from '../../context/features.context';

const Tabpanel = () => {
  const { features, selectedIndexFeature } = useContext(FeaturesContext);

  return (
    <section className='elipse right-elipse mx-auto mt-[5.3rem] max-w-[110.3rem]  text-left'>
      {features.map(({ heading, img, description, alt }, index) => (
        <article
          key={index}
          id='panel-1'
          role='tabpanel'
          tabIndex='0'
          aria-labelledby='tab-1'
          hidden={selectedIndexFeature === index ? false : true}
        >
          <figure className=' flex flex-row gap-10 '>
            <img src={img} alt={alt} className=' rounded-lg' width={536} />
            <figcaption className='flex flex-col gap-7 pl-[10rem] pt-[5.8rem]'>
              <h2>{heading}</h2>
              <p className='max-w-[45rem] text-[1.8rem] leading-[2.8rem] tracking-[0.01rem] opacity-50'>
                {description}
              </p>
              <button className='btn-primary mt-[1.6rem] self-start'>More info</button>
            </figcaption>
          </figure>
        </article>
      ))}
    </section>
  );
};

export default Tabpanel;
