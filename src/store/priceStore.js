import { create } from 'zustand';
import axios from '@/helpers/axios';
const usePriceStore = create(() => ({
  getPrices: async () => {
    const response = await axios.get(`/price`);
    if (response.status !== 200) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.data;
  },

  addPrice: async data => {
    const response = await axios.post('/price', data, {});
    return response.data;
  },

  updatePrice: async (data, id) => {
    const response = await axios.put(`/price/${id}`, data);
    return response.data;
  },
  deletePriceById: async (id, category) => {
    const categoryFild = {
      category: category,
    };
    console.log('categoryFild : ', categoryFild);
    const response = await axios.delete(
      `/price/${id}`,
      { data: categoryFild },
      {}
    );
    return response.data;
  },
}));

export default usePriceStore;
