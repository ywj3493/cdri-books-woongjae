import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// tailwind 조건부 적용 및 유틸 함수
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
