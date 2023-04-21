import { useContext } from 'react';
import { FeaturesContext } from '../../context/features.context';

const Tablist = () => {
  const { features, setSelectedIndexFeature, selectedIndexFeature } = useContext(FeaturesContext);

  const handleTabbable = (index) => {
    setSelectedIndexFeature(index);
  };

  return (
    <nav className='mt-[2.8rem]'>
      <ul
        role='tablist'
        aria-label='Features'
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
  );
};

export default Tablist;
