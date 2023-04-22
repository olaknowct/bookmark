import { ReactComponent as BookmarkLogo } from '../../images/logo-bookmark-light.svg';
import { ReactComponent as FacebookLogo } from '../../images/icon-facebook.svg';
import { ReactComponent as TwitterLogo } from '../../images/icon-twitter.svg';

const Footer = () => {
  console.log('render footer');

  return (
    <footer className='bg-veryDarkBlue text-white'>
      <div className='mx-auto flex max-w-[115.4rem] flex-row items-center  gap-[6.5rem] px-[2.1rem] py-[3.2rem]'>
        <a href='#bookmark'>
          <BookmarkLogo />
        </a>
        <ul className='flex flex-row gap-[4.4rem] text-[1.2rem] uppercase tracking-[0.2rem] '>
          <li>Features</li>
          <li>Pricing</li>
          <li className='pl-[0.4rem]'>Contact</li>
        </ul>
        <ul className='ml-auto flex flex-row gap-[4rem]'>
          <li>
            <FacebookLogo />
          </li>
          <li>
            <TwitterLogo />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
