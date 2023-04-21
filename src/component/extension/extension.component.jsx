import { useState } from 'react';
import Chrome from '../../images/logo-chrome.svg';
import Firefox from '../../images/logo-firefox.svg';
import Opera from '../../images/logo-opera.svg';

const Extension = () => {
  const defaultExtensions = [
    {
      id: 1,
      name: 'Chrome',
      minVersion: 62,
      img: Chrome,
    },
    {
      id: 2,
      name: 'Firefox',
      minVersion: 55,
      img: Firefox,
    },

    {
      id: 3,
      name: 'Opera',
      minVersion: 46,
      img: Opera,
    },
  ];
  const [extensions] = useState(defaultExtensions);

  return (
    <ul className='mt-[4.3rem] flex flex-row justify-center gap-[3.4rem]'>
      {extensions.map(({ id, name, minVersion, img }) => (
        <li
          key={id}
          className=' h-[36rem] w-[28rem] rounded-xl px-[2.4rem] pt-[3.8rem] shadow-xl last:mt-[7.4rem]  last:pr-[1.8rem] [&:nth-child(2)]:mt-[4.12rem] [&:nth-child(2)]:pr-[2.45rem] [&:nth-child(2)]:pt-[4rem] '
        >
          <div className='flex flex-col items-center '>
            <img src={img} alt={name} width={102} />
            <h3 className='mt-[2.9rem] text-[2rem] font-bold'>Add to {name}</h3>
            <span className='mt-[0.5rem] text-[1.5rem]'>Minimum version {minVersion}</span>
            <button className='btn-primary mt-[6.5rem] self-stretch py-[1.25rem] tracking-[-0.05rem]'>
              Add & Install Extension
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Extension;
