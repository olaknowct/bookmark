import './App.css';
import { ReactComponent as BookmarkLogo } from './images/logo-bookmark.svg';

const App = () => {
  return (
    <div className=''>
      <header className='max-w-[115.4rem] mx-auto flex flex-row py-[4.9rem] justify-between items-center px-[2.1rem]'>
        <a href='#bookmark' className='pl-[7px]'>
          <BookmarkLogo />
        </a>
        <nav className=''>
          <ul className='flex flex-row gap-[4.8rem] text-[1.3rem] text-veryDarkBlue uppercase items-center tracking-[0.15rem]'>
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
      </header>
    </div>
  );
};

export default App;
