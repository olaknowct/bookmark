import { useContext } from 'react';

import { FeaturesContext } from '../../context/features.context';

const Features = () => {
  const { features, selectedIndexFeature, setSelectedIndexFeature } = useContext(FeaturesContext);

  const handleTabbable = (index) => {
    setSelectedIndexFeature(index);
  };

  return (
    <section>
      <div className='pt-[11rem] text-center flex flex-col gap-[1.8rem]'>
        <h2>Features</h2>
        <p className='text-[1.8rem] mx-auto opacity-50 max-w-[54rem]'>
          Our aim is to make it quick and easy for you to access your favourite websites. Your
          bookmarks sync between your devices so you can access them on the go
        </p>

        <nav className='mt-[2.8rem]'>
          <ul
            role='tablist'
            aria-label='Bookmark Features'
            className='flex flex-row justify-center text-[1.6rem]  opacity-50'
          >
            {features.map(({ name }, index) => (
              <li key={index}>
                <button
                  onClick={handleTabbable.bind(null, index)}
                  role='tab'
                  aria-selected={selectedIndexFeature === index ? 'true' : 'false'}
                  aria-controls='panel-1'
                  id='tab-1'
                  tabIndex={selectedIndexFeature === index ? '1' : '0'}
                  className={`tracking-[0.06rem] text-center border-b-[1px] pt-[2.2rem] pb-[3rem]  border-b-veryDarkBlue ${
                    index === features.length - 1 ? 'px-[7.5rem]' : 'px-[4.5rem]'
                  } `}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
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
      </div>
    </section>
  );
};
export default Features;
