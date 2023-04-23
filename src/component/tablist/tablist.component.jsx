import { useContext } from 'react';
import { FeaturesContext } from '../../context/features.context';

const Tablist = () => {
  const { features, setSelectedIndexFeature, selectedIndexFeature } = useContext(FeaturesContext);

  const handleTabbable = (index) => {
    setSelectedIndexFeature(index);
  };

  return (
    <nav className='mt-[2.6rem]'>
      <ul
        role='tablist'
        aria-label='Features'
        className='group flex flex-col justify-center text-[1.6rem] text-veryDarkBlue/50 md:flex-row'
      >
        {features.map(({ name }, index) => (
          <li key={index} className='hover-li  hover:opacity-100'>
            <button
              onClick={handleTabbable.bind(null, index)}
              role='tab'
              aria-selected={selectedIndexFeature === index ? 'true' : 'false'}
              aria-controls='panel-1'
              id='tab-1'
              tabIndex={selectedIndexFeature === index ? '1' : '0'}
              className={`  pb-[2.5rem] pt-[2.2rem] text-center tracking-[0.06rem] ${
                selectedIndexFeature === index
                  ? 'border-b-[2px] border-b-softRed text-softRed'
                  : 'border-b-[1px] border-b-veryDarkBlue/50'
              } ${index === features.length - 1 ? 'px-[7.5rem]' : 'px-[4.5rem]'} `}
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
