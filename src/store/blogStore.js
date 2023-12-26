import { create } from 'zustand';

const useBlogStore = create((set, get) => ({
  // server: import.meta.env.VITE_APP_API_URL,
  //server: 'https://family-coach.onrender.com/api',
  server: 'http://localhost:5000/api',
  getPosts: async () => {
    const response = await fetch(`${get().server}/blog`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  },

  getPostById: async id => {
    const response = await fetch(`${get().server}/blog/${id}`, {
      method: 'GET',
    });
    const result = await response.json();
    return result;
  },
  addPost: async formData => {
    const response = await fetch(`${get().server}/blog`, {
      method: 'POST',
      body: formData,
    });
    const result = await response.json();
    return result;
  },

  updatePostText: async (data, id) => {
    const response = await fetch(`${get().server}/blog/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  },
  updatePostImage: async (formData, id) => {
    const response = await fetch(`${get().server}/blog/postImage/${id}`, {
      method: 'PATCH',
      body: formData,
    });
    const result = await response.json();
    return result;
  },
  deletePostById: async id => {
    const response = await fetch(`${get().server}/blog/${id}`, {
      method: 'DELETE',
    });
    const result = await response.json();
    return result;
  },
}));

export default useBlogStore;
