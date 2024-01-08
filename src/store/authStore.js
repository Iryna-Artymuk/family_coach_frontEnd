import { create } from 'zustand';
import axios from '@/helpers/axios';

const useAuthStore = create(set => ({
  loading: false,
  loginError: null,
  currentUser: {},
  error: null,
  getCurrentUser: async () => {
    console.log(this);
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
        });
    } catch (error) {
      console.error(error);
    }
  },
  register: async data => {
    try {
      // const requestData = new URLSearchParams(data);
      // console.log(' requestData : ',  requestData );
      set( () =>
      {
        return {
          loading: true,
        };
      } );
      const response = await axios.post( `/auth/users/register`, data, {} )
      set( () =>
      {
        return {
          loading: false,
        };
      } );
      return response
    } 
     catch (error) {
      set(() => {
            return {
              loading: false,
              loginError: error,
            };
          });
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

  changePassword: async (data, id) => {
    try {
      set(() => {
        return {
          loading: true,
        };
      });

      const requestData = new URLSearchParams(data);
      const response = await axios.patch(
        `/auth//users/password/${id}`,
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
          error: error,
          loading: false,
        };
      });
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
            name: response.data.name,
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
          error: error,
          loading: false,
        };
      });
    }
  },
}));

export default useAuthStore;
