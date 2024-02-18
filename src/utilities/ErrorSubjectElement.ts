export function find(
  element: Element,
  subject?: string | Exclude<boolean, true>
) {
  if (subject === undefined || typeof subject === "boolean") {
    return element;
  }

  // Check if the element itself matches the selector
  if (element.matches(subject)) {
    return element;
  }

  // Check for a matching parent
  const parent = element.closest(subject);
  if (parent) {
    return parent;
  }

  // Check for a matching next sibling
  let nextSibling = element.nextElementSibling;
  while (nextSibling) {
    if (nextSibling.matches(subject)) {
      return nextSibling;
    }
    nextSibling = nextSibling.nextElementSibling;
  }

  // Check for a matching previous sibling
  let prevSibling = element.previousElementSibling;
  while (prevSibling) {
    if (prevSibling.matches(subject)) {
      return prevSibling;
    }
    prevSibling = prevSibling.previousElementSibling;
  }

  // If no matching element is found, return null
  return;
}
