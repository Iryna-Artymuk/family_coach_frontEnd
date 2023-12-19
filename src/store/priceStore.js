import { create } from 'zustand';

const usePriceStore = create((set, get) => ({
  // server: import.meta.env.VITE_APP_API_URL,
  server: 'https://family-coach.onrender.com/api',
  // server: 'http://localhost:5000/api',
  getPrices: async () => {
    const response = await fetch(`${get().server}/price`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  },

  addPrice: async data => {
    const response = await fetch(`${get().server}/price`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  },

  updatePrice: async (data, id) => {
    const response = await fetch(`${get().server}/price/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  },
  deletePriceById: async (id, category) => {
    const categoryFild = {
      category: category,
    };
    const response = await fetch(`${get().server}/price/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(categoryFild),
    });
    const result = await response.json();
    return result;
  },
}));

export default usePriceStore;
