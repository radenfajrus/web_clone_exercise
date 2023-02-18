
import { create } from "zustand";

// console.log(Boolean(localStorage.getItem("isSidebarOpen")))
export const useSidebarStore = create(
    (set) => ({
        isSidebarOpen: (localStorage.getItem("isSidebarOpen"))? (localStorage.getItem("isSidebarOpen") === 'true') : false,
        selectedMenu: localStorage.getItem("selectedMenu") || "/",
        toggleSidebar: () => set((state:any) => {
            localStorage.setItem("isSidebarOpen", String(!state.isSidebarOpen));
            return {
                isSidebarOpen: !state.isSidebarOpen,
            };
        }),
        setMenu: (menu:string) => set(() => {
            localStorage.setItem("selectedMenu", menu);
            return {
                selectedMenu: menu,
            };
        }),
    })
);