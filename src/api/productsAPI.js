import axios from "axios";

export const fetchProducts = async (busqueda, setResultados) => {
  try {
    const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${busqueda}`)
    setResultados(response.data.results);
  } catch (error) {
    throw new Error('Error fetching data');
  }
}