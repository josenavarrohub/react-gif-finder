export const getResults = async (query) => {
    const apiKey = 'FOdOsx0AnBvT9LlItPhNryUhL3v5RHUu';
    try {
        const response = await fetch(
            `https://api.giphy.com/v1/gifs/search` +
            `?q=${encodeURI(query)}` +
            `&limit=6` +
            `&api_key=${apiKey}`
        );
        const { data } = await response.json();
        const results = data.map(item => {
            return {
                id: item.id,
                title: item.title,
                url: item.images.fixed_height.url
            };
        })
        return results;
    } catch (e) {
        console.error(e);
    }
}
