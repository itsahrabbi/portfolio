export const useFetch = async (url: string) => {
  const response = await fetch(url, {
    cache: "no-store",
    method: "GET",
  });
  return response.json();
};
