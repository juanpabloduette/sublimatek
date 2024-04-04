import { create } from 'zustand';

const useStore = create(set => ({
	initialValue: 0,
	count: 1,
	inc: () => set(state => ({ count: state.count + 1 })),
	dec: () => set(state => (state.count > 0 ? { count: state.count - 1 } : {})),
	reset: () => set(state => ({ count: state.initialValue })),
}));

export default useStore;
