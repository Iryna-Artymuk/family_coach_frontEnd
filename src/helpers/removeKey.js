export const checkAndRemoveKey = key => {
  // Get the value of the key from local storage
  const value = localStorage.getItem(key);

  // Check if the value is not null
  const exists = value !== null;

  // If the key exists, remove it
  if (exists) {
    localStorage.removeItem(key);
  }
};
