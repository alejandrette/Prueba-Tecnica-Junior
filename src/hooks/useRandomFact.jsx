import { useEffect, useState } from "react";

const PREFIX_URL = 'https://cataas.com'

function useRandomFact({ fact }) {
  const [imageUrl, setImageUrl] = useState();
  
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
  
  return { imageUrl: `${PREFIX_URL}${imageUrl}` }
}

export default useRandomFact