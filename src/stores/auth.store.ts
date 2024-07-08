import { create } from "zustand";
import { TCurrentUser } from "~/types/auths.type";

interface StoreState {
  currentUser?: TCurrentUser;
  setCurrentUser: (data: TCurrentUser) => void;
}

const useAuthStore = create<StoreState>((set) => ({
  setCurrentUser: (currentUser) => set((state) => ({ currentUser })),
}));

export default useAuthStore;
