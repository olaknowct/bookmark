import { ReactComponent as BookmarkLogo } from '../../images/logo-bookmark-light.svg';
import FacebookLogo from '../../images/icon-facebook.svg';
import TwitterLogo from '../../images/icon-twitter.svg';

const Footer = () => {
  return (
    <footer className='bg-veryDarkBlue text-white'>
      <div className='mx-auto flex max-w-[115.4rem] flex-col items-center gap-[6.5rem]  px-[2.1rem] py-[3.2rem] md:flex-row'>
        <a href='#bookmark'>
          <BookmarkLogo />
        </a>
        <ul className='flex flex-col gap-[4.4rem] text-[1.2rem] uppercase tracking-[0.2rem] md:flex-row '>
          <li className='hover-li'>Features</li>
          <li className='hover-li'>Pricing</li>
          <li className='hover-li pl-[0.4rem]'>Contact</li>
        </ul>
        <ul className='flex flex-row gap-[4rem] md:ml-auto'>
          <li>
            <img src={FacebookLogo} alt='FacebookLogo' className='cursor-pointer filter' />
          </li>
          <li>
            <img src={TwitterLogo} alt='TwitterLogo' className='cursor-pointer filter' />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
