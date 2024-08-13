export const useFetch = async (url: string) => {
    const response = await fetch("https://itsahrabbi.vercel.app" + url, {
        cache: "no-store",
        method: "GET"
    });
    return response.json();
};
