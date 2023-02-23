export function useUtils() {
  function getImageByUrl(url: string): string{
    return new URL(url, import.meta.url).href;
  }

  return { getImageByUrl };
}
