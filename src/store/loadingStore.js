import { create } from 'zustand';

export const useIsLoading = create(set => ({
  isLoading: false,
  setIsLoading: () => set({ isLoading: true }),
  setLoaded: () => set({ isLoading: false }),
}));
