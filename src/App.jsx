import './App.css';
import 'images/logo-bookmark';
import BookmarkLogo from './images/logo-bookmark.svg';

const App = () => {
  return (
    <div className=''>
      <header className='m'>
        <a href='#bookmark'>
          <img src={BookmarkLogo} alt='' />
        </a>
      </header>
    </div>
  );
};

export default App;
