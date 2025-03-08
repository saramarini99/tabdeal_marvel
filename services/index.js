import { generateMarvelApiUrl } from "../utils/urlGenerator"
export async function getCharacterData({
    type = 'list',
    page = 1,
    itemsPerPage,
    searchQuery = ''
}) {
    const offset = (page - 1) * itemsPerPage;
    const params = {
        offset,
        limit: itemsPerPage,
    };

    if (searchQuery) {
        params.nameStartsWith = searchQuery;
    }

    try {
        const url = generateMarvelApiUrl("characters", params);
        const response = await fetch(url);

        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        return {
            results: data.data.results,
            total: data.data.total
        };
    } catch (error) {
        console.error(`Error fetching data:`, error);
        throw error;
    }
}
