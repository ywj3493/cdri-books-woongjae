import {
  KakaoSortTypes,
  type KakaoSearchBooksResponse,
  type KakaoSort,
} from "@/features/books/types";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const AUTHORIZATION = import.meta.env.VITE_KAKAO_REST_API_KEY;

export async function getSearchBooks(
  query: string,
  sort: KakaoSort = KakaoSortTypes.AccuracySort,
  page = 1,
  size = 10,
): Promise<KakaoSearchBooksResponse> {
  const queryParams = new URLSearchParams({
    query,
    sort,
    page: String(page),
    size: String(size),
  }).toString();
  try {
    const response = await fetch(`${BASE_URL}/search/book?${queryParams}`, {
      method: "GET",
      headers: {
        Authorization: `KakaoAK ${AUTHORIZATION}`,
      },
    });
    if (!response.ok) {
      throw new Error();
    }
    const data: KakaoSearchBooksResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error; // Re-throw the error for further handling if needed
  }
}
