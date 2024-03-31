import {create} from 'zustand'


export const useDataStore = create((set) => ({
    userChips: 0,
    setUserChips: (userChips) => set({userChips: userChips}),
}))