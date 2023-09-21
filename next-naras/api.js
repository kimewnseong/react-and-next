import axios from 'axios';

async function getAllCountries() {
  try {
    const res = await axios.get('https://naras-api.vercel.app/all');
    return res.data;
  } catch (e) {
    return [];
  }
}

async function getSearchCountries(query) {
  try {
    const res = await axios.get(
      `https://naras-api.vercel.app/search?q=${query}`
    );
    return res.data;
  } catch (e) {
    return [];
  }
}

async function getCountry(code) {
  try {
    const res = await axios.get(`https://naras-api.vercel.app/code/${code}`);
    return res.data;
  } catch (e) {
    return null;
  }
}

export { getAllCountries, getSearchCountries, getCountry };
