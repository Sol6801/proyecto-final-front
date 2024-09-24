import { create } from 'zustand';

const useUserStore = create((set) => ({
  eventId: typeof window !== 'undefined' ? Number(localStorage.getItem('eventId')) : null,
  setUserId: (id) => {
    localStorage.setItem('eventId', id); // Guardar en localStorage
    set({ eventId: Number(id) });
  },
}));

export default useUserStore;
