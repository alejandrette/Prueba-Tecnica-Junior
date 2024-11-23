const CAT_ENPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';

export const getRandomFact = async () => {
  const repsonse = await fetch(CAT_ENPOINT_RANDOM_FACT)
  const data = await repsonse.json()
  const { fact } = data
  return fact
}
