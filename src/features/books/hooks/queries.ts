import {
  useQuery,
  type QueryFunction,
  type QueryKey,
  type UseQueryOptions,
  type UseQueryResult,
} from "@tanstack/react-query";
import { KakaoSortTypes, type KakaoSort } from "../types";
import { getSearchBooks } from "../api";

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
