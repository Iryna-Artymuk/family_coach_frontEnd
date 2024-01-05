import { create } from 'zustand';
import axios from '@/helpers/axios';

const useAuthStore = create(set => ({
  loading: false,
  loginError: null,
  currentUser: {},

  getCurrentUser: async () => {
    try {
      set(() => {
        return {
          loading: true,
        };
      });
      await axios
        .get(`/auth/users/current`)
        .then(response => {
          console.log('response: ', response.data);
          const user = response.data;

          if (user) {
            set(() => {
              return {
                currentUser: user,
                loading: false,
              };
            });
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
              loginError: error,
            };
          });
          console.error('Fetch error:', error);
        });
    } catch (error) {
      console.error(error);
    }
  },
  logout: async () => {
    try {
      set(() => {
        return {
          loading: true,
        };
      });

      const response = await axios.delete(`/auth/users/logout`);
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
        };
      });
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
      set(() => {
        return {
          loading: false,
        };
      });
      console.error(error);
    }
  },
  changeInfo: async (data, id) => {
    try {
      set(() => {
        return {
          loading: true,
        };
      });

      const requestData = new URLSearchParams(data);
      const response = await axios.patch(`/auth/users/${id}`, requestData, {});
      set(prevState => {
        return {
          currentUser: {
            ...prevState.currentUser,
            name: response.data.data.name,
          },

          loading: false,
        };
      });
      return response;
    } catch (error) {
      set(() => {
        return {
          loading: false,
        };
      });
      console.error(error);
    }
  },
  changeAvatar: async (formData, id) => {
    try {
      set(() => {
        return {
          loading: true,
        };
      });

      const response = await axios.patch(
        `/auth/users/avatar/${id}`,
        formData,
        {}
      );
      set(prevState => {
        return {
          currentUser: {
            ...prevState.currentUser,
            avatar: response.data.data.avatar,
          },

          loading: false,
        };
      });
      return response;
    } catch (error) {
      set(() => {
        return {
          loading: false,
        };
      });
      console.error(error);
    }
  },
}));

export default useAuthStore;
