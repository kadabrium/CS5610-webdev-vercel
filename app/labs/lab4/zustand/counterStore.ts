import { create, type UseBoundStore, type StoreApi } from "zustand";

export type CounterStore = {
  count: number;
  up: () => void;
  down: () => void;
};

// define wrapper for the full context object
// allows definition of methods not limited to a global setter
// callers call this function for the full wrapper object with full set of methods
export const useCounterStore: UseBoundStore<StoreApi<CounterStore>> = create<CounterStore>((set) => ({
  count: 7,
  up: () => set((state: CounterStore) => ({ count: state.count + 1 })),
  down: () => set((state) => ({ count: state.count - 1 })),
}));