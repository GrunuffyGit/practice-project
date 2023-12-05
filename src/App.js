import './App.css';
import FirstSection from './First_Section/Main';
import SecondSection from './Second_Section/Main';
import GlobalNav from './Navbar/GlobalNav';

const App = () => {
  return (
    <div className='app-container'>
      <GlobalNav />
      <FirstSection />
      <SecondSection />
    </div>
  );
}

export default App;
