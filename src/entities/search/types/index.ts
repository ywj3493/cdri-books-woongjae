export const SearchTargetOptions = {
  title: "title",
  author: "author",
  publisher: "publisher",
} as const;
export type SearchTargetOptions =
  (typeof SearchTargetOptions)[keyof typeof SearchTargetOptions];

export type SearchState = {
  pageInputValue: string;
  modalInputValue: string;
  modalSelectValue: SearchTargetOptions;
  searchKeyword: string;
  searchTarget?: SearchTargetOptions;
};
export type SearchActions = {
  setPageInputValue: (value: string) => void;
  setModalInputValue: (value: string) => void;
  setModalSelectValue: (value: SearchTargetOptions) => void;
  pageSearch: (keyword?: string) => void;
  modalSearch: () => void;
  resetPageSearchInput: () => void;
  resetModalSearchInput: () => void;
};
export type SearchStore = SearchState & SearchActions;

export type SearchHistoryState = {
  searchHistory: string[];
};
export type SearchHistoryActions = {
  addSearchHistory: (keyword: string) => void;
  removeSearchHistory: (keyword: string) => void;
  clearSearchHistory: () => void;
};
export type SearchHistoryStore = SearchHistoryState & SearchHistoryActions;
