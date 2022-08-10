export function formatName(name) {
  return name
    .split("-")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
}
