import { ReactComponent as BookmarkLogo } from '../../images/logo-bookmark.svg';
import { ReactComponent as Burger } from '../../images/icon-hamburger.svg';

const Header = () => {
  return (
    <header className='max-w-[115.4rem] mx-auto flex flex-row py-[4.9rem] justify-between items-center px-[2.1rem]'>
      <a href='#bookmark' className='pl-[7px]'>
        <BookmarkLogo />
      </a>
      <nav className='hidden md:block'>
        <ul className='flex  flex-row flex-row gap-[4.8rem] text-[1.3rem] text-veryDarkBlue uppercase items-center tracking-[0.15rem]'>
          <li className='-mr-[0.5rem]'>Features</li>
          <li>Pricing</li>
          <li>Contact</li>
          <li>
            <button className='px-[3.2rem] bg-softRed rounded-lg text-white uppercase py-[1rem] tracking-[0.2rem]'>
              Login
            </button>
          </li>
        </ul>
      </nav>
      <Burger className='block md:hidden ' />
    </header>
  );
};

export default Header;
