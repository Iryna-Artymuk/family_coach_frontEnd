import { create } from 'zustand';
import axios from '@/helpers/axios';
const useBlogStore = create(set => ({
  error: null,
  loading: false,
  getPosts: async () => {
    const response = await axios.get(`/blog`);
    if (response.status !== 200) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.data;
  },

  getPostById: async id => {
    const response = await axios.get(`/blog/${id}`);
    return response.data;
  },
  // addPost: async formData =>
  // {

  //   const response = await axios.post('/blog', formData, {});
  //   return response.data;
  // },

  addPost: async formData => {
    try {
      set(() => {
        return {
          loading: true,
        };
      });
      const response = await axios.post('/blog', formData, {});
      set(() => {
        return {
          loading: false,
        };
      });
      return response;
    } catch (error) {
      set(() => {
        return {
          loading: false,
          error: error,
        };
      });
    }
  },
  updatePostText: async (data, id) => {
    const response = await axios.put(`/blog/${id}`, data);
    return response.data;
  },
  updatePostImage: async (formData, id) => {
    const response = await axios.patch(`/blog/postImage/${id}`, formData, {});
    return response.data;
  },
  deletePostById: async id => {
    const response = await axios.delete(`/blog/${id}`);
    return response.data;
  },
}));

export default useBlogStore;
