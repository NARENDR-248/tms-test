import { create } from "zustand";
import jwt_decode from "jwt-decode";

export const useAuth = create<{
  user: any;
  permissions: any;
  isLoggedIn: boolean;
  checkAuth: () => void;
}>((set) => ({
  user: null,
  permissions: null,
  isLoggedIn: false,
  checkAuth: () => {
    set((state) => {
      const accessToken = localStorage.getItem("x-access-token");
      const user = localStorage.getItem("rac-user");

      const newState = {
        user: null,
        permissions: null,
        isLoggedIn: false,
      };

      if (!accessToken || !user) {
        return newState;
      }

      const decoded: any = jwt_decode(accessToken);

      if (!decoded) {
        return newState;
      }

      return {
        ...state,
        permissions: decoded?.permissions,
        isLoggedIn: !!decoded?.permissions,
        user: JSON.parse(user),
      };
    });
  },
}));
