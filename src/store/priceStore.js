import { create } from 'zustand';
import axios from '@/helpers/axios';
const usePriceStore = create((set, get) => ({
  getPrices: async () => {
    // const response = await fetch(`${get().server}/price`);
    // if (!response.ok) {
    //   throw new Error(`HTTP error! Status: ${response.status}`);
    // }
    // const result = await response.json();
    // return result;
    const response = await axios.get(`/price`);
    if (response.status !== 200) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.data;
  },

  addPrice: async data => {
    // const response = await fetch(`${get().server}/price`, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   method: 'POST',
    //   body: JSON.stringify(data),
    // });
    // const result = await response.json();
    // return result;
    const response = await axios.post('/price', data, {});
    return response.data;
  },

  updatePrice: async (data, id) => {
    // const response = await fetch(`${get().server}/price/${id}`, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   method: 'PUT',
    //   body: JSON.stringify(data),
    // });
    // const result = await response.json();
    // return result;
    const response = await axios.put(`/price/${id}`, data);
    return response.data;
  },
  deletePriceById: async (id, category) => {
    const categoryFild = {
      category: category,
    };
    console.log('categoryFild : ', categoryFild);
    // const response = await fetch(`${get().server}/price/${id}`, {
    //   method: 'DELETE',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(categoryFild),
    // });
    // const result = await response.json();
    // return result;

    const response = await axios.delete(
      `/price/${id}`,
      { data: categoryFild },
      {}
    );
    return response.data;
  },
}));

export default usePriceStore;
