export default function removeTrailingS(str: string): string {
  if (str.endsWith("s")) {
    return str.slice(0, -1);
  }

  return str;
}
