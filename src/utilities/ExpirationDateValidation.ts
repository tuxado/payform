export function validate(expiry: string): boolean {
  const [month, year] = expiry.split("/");
  if (!month || !year) {
    return false;
  }
  if (!/^\d+$/.test(month)) {
    return false;
  }
  if (!/^\d+$/.test(year)) {
    return false;
  }
  if (!(1 <= parseInt(month, 10) && parseInt(month, 10) <= 12)) {
    return false;
  }
  const currentYear = new Date().getFullYear();

  const currentYearFirstTwoDigits = Math.floor(currentYear / 100);
  const fullYear = `${currentYearFirstTwoDigits}${year}`;

  if (fullYear.length !== 4) {
    return false;
  }
  const date = new Date(`${fullYear}-${month}-01`);
  if (isNaN(date.getTime())) {
    return false;
  }
  const currentTime = new Date();

  return date > currentTime;
}
