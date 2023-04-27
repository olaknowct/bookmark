import { ReactComponent as BookmarkLogo } from '../../images/logo-bookmark.svg';
import { ReactComponent as BookmarkLogoLight } from '../../images/logo-bookmark-light.svg';
import { ReactComponent as FacebookLogo } from '../../images/icon-facebook.svg';
import { ReactComponent as TwitterLogo } from '../../images/icon-twitter.svg';
import { ReactComponent as Burger } from '../../images/icon-hamburger.svg';
import { ReactComponent as Close } from '../../images/icon-close.svg';
import { useEffect, useState } from 'react';
import { mediumScreen } from '../../helper/constants';

const Header = () => {
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);

  const handleClosing = () => {
    if (window.innerWidth > mediumScreen) setIsOpenMobileNav(false);
  };

  useEffect(() => {
    window.addEventListener('resize', handleClosing);
    return () => {
      window.removeEventListener('resize', handleClosing);
    };
  }, []);

  const toggleBurgerNav = () => {
    setIsOpenMobileNav(!isOpenMobileNav);
  };

  return (
    <header className='relative mx-auto flex max-w-[115.4rem] flex-row items-center justify-between px-[2.1rem] py-[4.9rem]'>
      <a href='#bookmark' className='z-20 pl-[7px]'>
        {isOpenMobileNav ? <BookmarkLogoLight /> : <BookmarkLogo />}
      </a>
      <nav className='hidden md:block'>
        <ul className='flex flex-row flex-row items-center gap-[4.8rem] text-[1.3rem] uppercase tracking-[0.15rem] text-veryDarkBlue'>
          <li className='hover-li -mr-[0.5rem] '>Features</li>
          <li className='hover-li '>Pricing</li>
          <li className='hover-li '>Contact</li>
          <li>
            <button className='btn-secondary'>Login</button>
          </li>
        </ul>
      </nav>
      {isOpenMobileNav ? (
        <>
          <Close className='z-20 block md:hidden' onClick={toggleBurgerNav} />
          <nav className='absolute left-0 top-0 z-10 flex h-screen w-screen flex-col bg-veryDarkBlue/90 py-[20rem]'>
            <ul className='flex flex-col items-center justify-center gap-[5rem] text-[1.3rem] text-[2rem]  uppercase tracking-[1rem] text-white'>
              <li className='hover-li -mr-[0.5rem] '>Features</li>
              <li className='hover-li '>Pricing</li>
              <li className='hover-li '>Contact</li>
              <li className='w-full px-[10rem]'>
                <button className='w-full rounded-lg border border-white  px-[3rem] py-[1rem]  uppercase tracking-[1rem]  text-white transition duration-200 hover:bg-white hover:text-black '>
                  Login
                </button>
              </li>
            </ul>

            <ul className='mt-auto flex flex-row justify-center gap-[3rem]'>
              <li>
                <FacebookLogo />
              </li>
              <li>
                <TwitterLogo />
              </li>
            </ul>
          </nav>
        </>
      ) : (
        <Burger className='block md:hidden ' onClick={toggleBurgerNav} />
      )}
    </header>
  );
};

export default Header;
