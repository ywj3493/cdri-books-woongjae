const BASE_URL = import.meta.env.VITE_BASE_URL;
const AUTHORIZATION = import.meta.env.VITE_KAKAO_REST_API_KEY;

export async function getBooks() {
  try {
    const response = await fetch(`${BASE_URL}/search/book`, {
      method: "GET",
      headers: {
        Authorization: `KakaoAK ${AUTHORIZATION}`,
      },
    });
    if (!response.ok) {
      throw new Error();
    }
    const data = await response.json();
    return data.documents;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error; // Re-throw the error for further handling if needed
  }
}
