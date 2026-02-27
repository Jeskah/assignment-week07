const BASE_URL =
    import.meta.env.PROD
        ? "https://server-week07.onrender.com"
        : "http://localhost:7777";

export default BASE_URL;