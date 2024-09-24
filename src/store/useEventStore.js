import { create } from 'zustand';

const useEventStore = create((set) => ({
  eventId: typeof window !== 'undefined' ? Number(localStorage.getItem('eventId')) : null,
  setEventId: (id) => {
    localStorage.setItem('eventId', id); // Guardar en localStorage
    set({ eventId: Number(id) });
  },
}));

export default useEventStore;