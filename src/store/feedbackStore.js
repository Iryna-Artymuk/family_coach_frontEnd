import { create } from 'zustand';
import axios from '@/helpers/axios';
const useFeedbackStore = create((set, get) => ({
  getFeedbacks: async feedbackStatus => {
    const response = await axios.get(`/feedbacks/${feedbackStatus}`);
    if (response.status !== 200) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.data;
  },

  addFeedback: async data => {
    const newFeedBack = {
      name: data.name,
      feedback: data.feedback,
    };
    const response = await axios.post('/feedbacks', newFeedBack, {});
    return response.data;
  },

  getFeedbackId: async id => {
    
    const response = await axios.get(`/feedbacks/all/${id}`);
    return response.data;
  },
  updateFeedbackStatus: async (id, data) => {
   
    const response = await axios.patch(`/feedbacks/${id}/status`, data);
    return response.data;
  },
  deleteFeedbackId: async id => {
   
    const response = await axios.delete(`/feedbacks/${id}`);
    return response.data;
  },
}));

export default useFeedbackStore;
