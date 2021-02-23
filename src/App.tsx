import { ExperienceBar } from './components/ExperienceBar';
import './styles/global.css'

function App() {
  return (
    <div className='container'>
      <ExperienceBar />
      <h1>Hello!</h1>
      <button style={{height: '3rem' }}>Botão</button>
    </div>
  );
}

export default App;
