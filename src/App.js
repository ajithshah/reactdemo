import './App.css';
import ReactDOM from 'react-dom/client';
import NavigationBar from './component/Navbar/navbar.jsx';
import Main from './component/Main/main.jsx';
import EventBind from './component/Event/Event.jsx';

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Main></Main>
      <EventBind/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
