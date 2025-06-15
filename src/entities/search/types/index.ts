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

  setPageInputValue: (value: string) => void;
  setModalInputValue: (value: string) => void;
  setModalSelectValue: (value: SearchTargetOptions) => void;
  pageSearch: () => void;
  modalSearch: () => void;
  resetPageSearchInput: () => void;
  resetModalSearchInput: () => void;
};
