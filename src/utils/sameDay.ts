export default function isSameDay(isoDateString1: any, isoDateString2: any) {
  const date1 = new Date(isoDateString1);
  const date2 = new Date(isoDateString2);

  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}
