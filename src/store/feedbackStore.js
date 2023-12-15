import { create } from 'zustand';

const useFeedbackStore = create((set, get) => ({
  // server: import.meta.env.VITE_APP_API_URL,
  server: 'https://family-coach.onrender.com/api',
  // server: 'http://localhost:5000/api',
  getFeedbacks: async feedbackStatus => {
    const response = await fetch(`${get().server}/feedbacks/${feedbackStatus}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  },

  // addDiploma: async formData => {
  //   const response = await fetch(`${get().server}/qualification`, {
  //     method: 'POST',

  //     body: formData,
  //   });
  //   const result = await response.json();
  //   return result;
  // },

  // deleteDiplomayId: async id => {
  //   const response = await fetch(`${get().server}/qualification/${id}`, {
  //     method: 'DELETE',
  //   });
  //   const result = await response.json();
  //   return result;
  // },
}));

export default useFeedbackStore;
