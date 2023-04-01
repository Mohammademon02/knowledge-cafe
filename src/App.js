import './App.css';
import Blog from './components/Blog/Blog';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <hr className='underline' />
      <Body></Body>
      <hr className='underline' />
      <Blog></Blog>
    </div>
  );
}

export default App;
