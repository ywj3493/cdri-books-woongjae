import {
  KakaoSortTypes,
  type KakaoSearchBooksResponse,
  type KakaoSort,
} from "@/features/books/types";
import {
  useQuery,
  type QueryFunction,
  type QueryKey,
  type UseQueryOptions,
  type UseQueryResult,
} from "@tanstack/react-query";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const AUTHORIZATION = import.meta.env.VITE_KAKAO_REST_API_KEY;

/**
 * https://developers.kakao.com/docs/latest/ko/daum-search/dev-guide#search-book
 *
 * @param query string 검색어
 * @param sort KakaoSort 정렬 기준 (accuracy 정확도순, latest 발간일순, 기본값 accuracy)
 * @param page number 결과 페이지 번호 (1~50 사이, 기본 값 1)
 * @param size number 한 페이지에 보여질 결과 개수 (1~50 사이, 기본 값 10)
 * @param target string 검색 필드 제한 (title 제목, isbn ISBN, publisher 출판사, person 인명)
 * @returns KakaoSearchBooksResponse
 */
export async function getSearchBooks(
  query: string,
  sort: KakaoSort = KakaoSortTypes.AccuracySort,
  page = 1,
  size = 10,
  target: string | undefined = undefined,
): Promise<KakaoSearchBooksResponse> {
  const queryParams = new URLSearchParams({
    query,
    sort,
    page: String(page),
    size: String(size),
    ...(target && { target }),
  }).toString();
  try {
    const response = await fetch(`${BASE_URL}/search/book?${queryParams}`, {
      method: "GET",
      headers: {
        Authorization: `KakaoAK ${AUTHORIZATION}`,
      },
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data: KakaoSearchBooksResponse = await response.json();
    return data;
  } catch (error) {
    console.error(`Error: /search/book?${queryParams}`, error);
    throw error;
  }
}

export const getSearchBooksQueryKey = (
  query: string,
  sort: KakaoSort = KakaoSortTypes.AccuracySort,
  page = 1,
  size = 10,
  target: string | undefined = undefined,
) => ["book", query, sort, page, size, target] as const;

export const getSearchBooksQueryOptions = <
  TData = Awaited<ReturnType<typeof getSearchBooks>>,
  TError = unknown,
>(
  query: string,
  sort: KakaoSort = KakaoSortTypes.AccuracySort,
  page = 1,
  size = 10,
  target: string | undefined = undefined,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getSearchBooks>>, TError, TData>
    >;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ??
    getSearchBooksQueryKey(query, sort, page, size, target);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getSearchBooks>>
  > = () => getSearchBooks(query, sort, page, size, target);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getSearchBooks>>,
    TError,
    TData
  > & {
    queryKey: QueryKey;
  };
};

export const useGetSearchBooksQuery = <
  TData = Awaited<ReturnType<typeof getSearchBooks>>,
  TError = unknown,
>(
  query: string,
  sort: KakaoSort = KakaoSortTypes.AccuracySort,
  page = 1,
  size = 10,
  target: string | undefined = undefined,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getSearchBooks>>, TError, TData>
    >;
    request?: Parameters<typeof fetch>[1];
  },
): UseQueryResult<TData, TError> => {
  const queryOptions = getSearchBooksQueryOptions(
    query,
    sort,
    page,
    size,
    target,
    options,
  );

  const queryResult = useQuery(queryOptions);

  return queryResult;
};
