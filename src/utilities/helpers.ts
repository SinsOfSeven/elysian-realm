import { ref } from "vue";

export const useSlug = (str: string): string => {
  return str.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
} 
export const useTitle = (str: string): string => {
  const regex = /(^|\b(?!(and?|at?|the|for|of|to|but|by)\b))\w+/g;
  return str.toLowerCase().replace(regex, s => s[0].toUpperCase() + s.slice(1));
};
export const useRedirectTo = (url: string): void => {
  window.location.replace(`/admin/${url}`);
};
export function useEnsure<T> (argument: T | undefined | null, message: string = "Data not found"): T {
  if (argument === undefined || argument === null) {
    throw new TypeError(message);
  }
  return argument;
}

export const useValkyrieTypes = ref(["ALL", "BIO", "MECH", "PHY", "QUA", "IMG"]);