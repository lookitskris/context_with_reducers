const baseUrl = process.env.REACT_APP_API_BASE_URL;

export async function getCharacters() {
  const response = await fetch(baseUrl + "characters/");
  if (response.ok) return response.json();
  throw response;
}
