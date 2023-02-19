
import { create } from "zustand";

// console.log(Boolean(localStorage.getItem("isSidebarOpen")))
export const useSidebarStore = create(
    (set) => ({
        isSidebarOpen: (localStorage.getItem("isSidebarOpen"))? (localStorage.getItem("isSidebarOpen") === 'true') : false,
        selectedMenu: localStorage.getItem("selectedMenu") || "/foryou",
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
interface UserStore {
    isLoginModal: boolean;
    isUserLogin: boolean;
    setUserLogin: () => void;
    toggleLoginModal: () => void;
    checkLogin: (el: any) => void;
}
export const useUserStore = create<UserStore>((set, get) => ({
    isUserLogin: false,
    setUserLogin: () => set((state:any) => {
        return {
            isUserLogin: !state.isUserLogin,
        };
    }),
    isLoginModal: false,
    toggleLoginModal: () => set((state:any) => {
        return {
            isLoginModal: !state.isLoginModal,
        };
    }),
    checkLogin: (el:any) => {
        if(!get().isUserLogin) {
            get().toggleLoginModal()
        }else{
            el()
        }
    }
}));
