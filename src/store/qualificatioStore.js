import { create } from 'zustand';
import axios from '@/helpers/axios';
const useQualificatioStore = create(() => ({
  getDiplomas: async () => {
  
    const response = await axios.get(`/qualification`);
    if (response.status !== 200) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.data;
  },

  addDiploma: async formData => {
   
    const response = await axios.post('/qualification', formData, {});
    return response.data;
  },

  deleteDiplomayId: async id => {
   
    const response = await axios.delete(`qualification/${id}`);
    return response.data;
  },
}));

export default useQualificatioStore;
