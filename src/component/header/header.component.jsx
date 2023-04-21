import { ReactComponent as BookmarkLogo } from '../../images/logo-bookmark.svg';
import { ReactComponent as Burger } from '../../images/icon-hamburger.svg';

const Header = () => {
  return (
    <header className='mx-auto flex max-w-[115.4rem] flex-row items-center justify-between px-[2.1rem] py-[4.9rem]'>
      <a href='#bookmark' className='pl-[7px]'>
        <BookmarkLogo />
      </a>
      <nav className='hidden md:block'>
        <ul className='flex flex-row flex-row items-center gap-[4.8rem] text-[1.3rem] uppercase tracking-[0.15rem] text-veryDarkBlue'>
          <li className='-mr-[0.5rem]'>Features</li>
          <li>Pricing</li>
          <li>Contact</li>
          <li>
            <button className='rounded-lg bg-softRed px-[3.2rem] py-[1rem] uppercase tracking-[0.2rem] text-white'>
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
