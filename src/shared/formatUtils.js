export function formatName(name) {
  return name
    .split("-")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
}

export function allFound(array) {
  return array.every((elem) => elem.found);
}
