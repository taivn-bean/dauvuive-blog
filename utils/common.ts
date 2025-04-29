export function getReadingTime(content_length: number): number {
  const wordsPerMinute = 150;
  const words = content_length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}
