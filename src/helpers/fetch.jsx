export const fetchData = async (URL) => {
    try{
      const response = await fetch(URL);

      if(!response.ok) return undefined

      return response.json()
    }
    catch(error){
      console.log(error)
    }
}