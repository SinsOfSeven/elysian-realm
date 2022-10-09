export const useSlug = (str: string): string => str.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
export const useTitle = (str: string): string => {
  const regex = /(^|\b(?!(and?|at?|the|for|of|to|but|by)\b))\w+/g;
  return str.toLowerCase().replace(regex, s => s[0].toUpperCase() + s.slice(1));
};
export const useRedirectToAdmin = (): void => window.location.replace("/admin");