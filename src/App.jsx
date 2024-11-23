import { useEffect, useState } from "react";
import './App.css';

const CAT_ENPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
const PREFIX_URL = 'https://cataas.com'

function App() {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    fetch(CAT_ENPOINT_RANDOM_FACT)
      .then(resp => resp.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  },[])

  useEffect(() => {
    if(!fact) return

    const firstWord = fact.split(' ').slice(0,3).join(' ')
    
    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then(resp => resp.json())
      .then(data => {
        const { _id } = data
        setImageUrl(`/cat/${_id}/says/${firstWord}?size=10&color=yellow`)
      })
    }, [fact])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${PREFIX_URL}${imageUrl}`} alt="Imagen random from API"/>}
    </main>
  )
}

export default App
