export const formatDate = date => {
  const newDate = new Date(date);
  let year = new Intl.DateTimeFormat('ua', { year: 'numeric' }).format(newDate);
  let month = new Intl.DateTimeFormat('ua', { month: '2-digit' }).format(
    newDate
  );
  let day = new Intl.DateTimeFormat('ua', { day: '2-digit' }).format(newDate);
  return `${year}.${month}.${day}`;
};
