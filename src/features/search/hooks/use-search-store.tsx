import { type SearchStore, SearchTargetOptions } from "@/entities/search/types";
import { create } from "zustand";

export const useSearchStore = create<SearchStore>((set, get) => ({
  // 화면에 보이는 검색어 상태 값
  pageInputValue: "",
  modalInputValue: "",
  modalSelectValue: SearchTargetOptions.title,
  // 검색어를 입력하고 검색 시작 시 상태 값
  searchKeyword: "",
  searchTarget: undefined,

  setPageInputValue: (value: string) => set({ pageInputValue: value }),
  setModalInputValue: (value: string) => set({ modalInputValue: value }),
  setModalSelectValue: (value: SearchTargetOptions) =>
    set({ modalSelectValue: value }),

  pageSearch: (keyword?: string) => {
    if (keyword) {
      set({
        pageInputValue: keyword,
        searchKeyword: keyword,
        searchTarget: undefined,
      });
      return;
    }
    set({
      searchKeyword: get().pageInputValue,
      searchTarget: undefined,
    });
  },
  modalSearch: () =>
    set({
      searchKeyword: get().modalInputValue,
      searchTarget: get().modalSelectValue,
    }),
  resetPageSearchInput: () => set({ pageInputValue: "" }),
  resetModalSearchInput: () =>
    set({ modalInputValue: "", modalSelectValue: SearchTargetOptions.title }),
}));
