import { apiUrl } from "../main";
import { defineStore } from "pinia";
import { useAuthApi } from "../api/auth";
const {authsellerApi: sapi } = useAuthApi();
import router from "../router/index.js";
import type { AuthState, LoginResponse, RegisterResponse } from "../helpers/dataHelpers";



export const useAuthStore = defineStore<
  string,
  AuthState,
  {},
  {
    login(data: Record<string, any>): Promise<void>;
    register(data: Record<string, any>): Promise<void>;
    logout(): Promise<void>;
  }
>("auth", {
  state: (): AuthState => ({
    token: null,
  }),
  getters: {
    accessToken: (state: AuthState) => state.token,
  },
  actions: {
    async login(data: Record<string, any>) {
      try {
        const axiosInstance = await sapi.raw();
        const response = await axiosInstance.post<LoginResponse>(
          `${apiUrl}/seller/login`,
          data
        );
        if (response.status == 200) {
          this.token = response.data.seller.token;
          router.push("/orders");
        }
      } catch (e: any) {
        if (e.response && e.response.status == 404) {
          this.ErrorMsg = e.response.data.message[0];
        }
        console.log(e);
      }
    },
    async register(data: Record<string, any>) {
      try {
        const axiosInstance = await sapi.raw();
        const response = await axiosInstance.post<RegisterResponse>(
          `${apiUrl}/seller/register`,
          data
        );
        if (response.status == 200) {
          this.token = response.data.seller.token;
          router.push("/orders");
        }
      } catch (e) {
        console.log(e);
      }
    },
    async logout() {
      try {
        const axiosInstance = await sapi.raw();
        const response = await axiosInstance.post(`${apiUrl}/seller/logout`);
        if (response.status == 200) {
          this.token = null;
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
 
});
