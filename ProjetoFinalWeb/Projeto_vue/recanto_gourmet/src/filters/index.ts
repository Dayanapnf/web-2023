export function truncateWords(str: string | undefined, count: number): string | undefined {
    if (!str) return str;
    return str.split(" ").slice(0, count).join(" ");
  }
  