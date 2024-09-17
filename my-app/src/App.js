import logo from './logo.svg';
import Welcome from './images/Welcome.mp4'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <figure>
            <video className='video' src={Welcome} width="320" height="240" controls autoPlay={"true"} preload="auto" loop muted />
            <figcaption>
              <p className='welcome'>Welcome</p> 😊
            </figcaption>
          </figure>
        </div>
      </header>

      <main>

      </main>

      <footer>
        <div>
          &copy; Alberth G. Ruado
        </div>
      </footer>
    </div>
  );
}

export default App;
