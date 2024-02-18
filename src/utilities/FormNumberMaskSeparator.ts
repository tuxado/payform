export function replace(
  mask: string | string[],
  separator: string
):  string[] {
  if (typeof mask === "string") {
    mask = [mask]
  }

  if (Array.isArray(mask)) {
    return mask.map((value) => {
      return value.replace(/ /g, separator);
    });
  }

  return mask;
}
