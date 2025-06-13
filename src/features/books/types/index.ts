export const KakaoSortTypes = {
  LatestSort: "latest",
  AccuracySort: "accuracy",
} as const;
export type KakaoSort = (typeof KakaoSortTypes)[keyof typeof KakaoSortTypes];

export type KakaoBookMeta = {
  total_count: number;
  pageable_count: number;
  is_end: boolean;
};

export type KakaoBookDocument = {
  title: string;
  contents: string;
  url: string;
  isbn: string;
  datetime: string;
  authors: string[];
  publisher: string;
  translators: string[];
  price: number;
  sale_price: number;
  thumbnail: string;
  status: string;
};

export type KakaoSearchBooksResponse = {
  meta: KakaoBookMeta;
  documents: KakaoBookDocument[];
};
