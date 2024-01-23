export function isUrl(path: string): boolean {
  return /(http(s?)):\/\//i.test(path);
}
