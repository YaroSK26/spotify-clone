import { create } from 'zustand';

interface VolumeStore {
  volume: number;
  setVolume: (volume: number) => void;
}

export const useVolume = create<VolumeStore>((set) => ({
  volume: 0.5,
  setVolume: (volume) => set({ volume }),
}));

export default useVolume;