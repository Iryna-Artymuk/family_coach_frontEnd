import { create } from 'zustand';
import axios from '@/helpers/axios';

const useAuthStore = create(set => ({
  loading: false,
  error: null,

  login: async data => {
    try {
      const requestData = new URLSearchParams(data);
      set(() => {
        return {
          loading: true,
        };
      });
      await axios
        .post(`/auth/users/login`, requestData, {})
        .then(response => {
          const token = response.data.token;

          if (token) {
            set(() => {
              return {
                loading: false,
              };
            });
            window.localStorage.setItem('family_coach_access_token', token);
          }
        })
        .catch(error => {
          set(() => {
            return {
              loading: false,
              error: error,
            };
          });
          console.error('Fetch error:', error);
        });
    } catch (error) {
      console.error(error);
    }
  },

  changePassword: async data => {
    try {
      set(() => {
        return {
          loading: true,
        };
      });

      const requestData = new URLSearchParams(data);
      const response = await axios.post(
        `/auth/change-password`,
        requestData,
        {}
      );
      set(() => {
        return {
          loading: false,
        };
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  },
  logout: async()=> {
    try {
      set(() => {
        return {
          loading: true,
        };
      });

   
      const response = await axios.delete(`/auth/users/logout`, );
      set(() => {
        return {
          loading: false,
        };
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  },
}));

export default useAuthStore;
