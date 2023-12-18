import { create } from 'zustand';

const useFeedbackStore = create((set, get) => ({
  // server: import.meta.env.VITE_APP_API_URL,
 
  server: 'https://family-coach.onrender.com/api',

  getFeedbacks: async feedbackStatus => {
    const response = await fetch(`${get().server}/feedbacks/${feedbackStatus}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  },

  addFeedback: async data => {
    const newFeedBack = {
      name: data.name,
      feedback: data.feedback,
    };

    const response = await fetch(`${get().server}/feedbacks`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(newFeedBack),
    });
    const result = await response.json();
    return result;
  },

  getFeedbackId: async id => {
    const response = await fetch(`${get().server}/feedbacks/all/${id}`, {
      method: 'GET',
    });
    const result = await response.json();
    return result;
  },
  updateFeedbackStatus: async (id, data) => {
    const response = await fetch(`${get().server}/feedbacks/${id}/status`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PATCH',
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  },
  deleteFeedbackId: async id => {
    const response = await fetch(`${get().server}/feedbacks${id}`, {
      method: 'DELETE',
    });
    const result = await response.json();
    return result;
  },
}));

export default useFeedbackStore;
