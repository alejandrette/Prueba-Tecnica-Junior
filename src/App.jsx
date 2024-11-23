import useCatFact from "./hooks/useCatFact";
import useRandomFact from "./hooks/useRandomFact";
import './App.css';

function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useRandomFact({ fact });

  const handleClick = async () => {
    refreshFact()
  }
  
  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick} className="btn btn-warning">Generate New Fact</button>
      
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt="Imagen random from API"/>}
    </main>
  )
}

export default App
