export const formatDate = date => {
  const newDate = new Date(date || Date.now());

  let year = new Intl.DateTimeFormat('ua', { year: '2-digit' }).format(newDate);
  let month = new Intl.DateTimeFormat('ua', { month: '2-digit' }).format(
    newDate
  );
  let day = new Intl.DateTimeFormat('ua', { day: '2-digit' }).format(newDate);
  return `${day}.${month}.${year}`;
};
