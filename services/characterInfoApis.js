import { generateMarvelApiUrl } from '../utils/urlGenerator'; 

const getCharacterDetails = async (characterId) => {
    try {
        const url = generateMarvelApiUrl(`characters/${characterId}`);
        const response = await fetch(url);
        const data = await response.json();
        return data.data.results[0];
    } catch (error) {
        console.error("Error fetching character details:", error);
        throw error; 
    }
};

const getCharacterComics = async (characterId) => {
    try {
        const url = generateMarvelApiUrl(`characters/${characterId}/comics`);
        const response = await fetch(url);
        const data = await response.json();
        return data.data.results;
    } catch (error) {
        console.error("Error fetching character comics:", error);
        throw error; 
    }
};

const getCharacterSeries = async (characterId) => {
    try {
        const url = generateMarvelApiUrl(`characters/${characterId}/series`);
        const response = await fetch(url);
        const data = await response.json();
        return data.data.results;
    } catch (error) {
        console.error("Error fetching character series:", error);
        throw error; 
    }
};

export { getCharacterDetails, getCharacterComics, getCharacterSeries };
