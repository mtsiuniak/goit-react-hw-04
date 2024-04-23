import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/search"

export const fetchImages = async (searchQuery, currentPage) => {
    const response = await axios.get("/photos/", {
        params: {
            client_id: 'imlyetIYFi3nxuKWUu6DW1XfaYTXK5JDXsGKT6CKclo',
            query: searchQuery,
            page: currentPage,
            per_page: 12,
            orientation: "portrait",
        },
    });
    return response.data.results;
}