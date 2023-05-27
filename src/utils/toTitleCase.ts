export default function toTitleCase(
  str: string,
  replaceSymbols = false
): string {
  let modifiedStr = str;

  if (replaceSymbols) {
    modifiedStr = modifiedStr.replace(/[^a-zA-Z0-9\s]/g, " ");
  }

  return modifiedStr
    .toLowerCase()
    .replace(/(^|\s)\w/g, (match) => match.toUpperCase());
}
