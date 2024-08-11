import { defineStore } from "pinia";
import { useUsersApi } from "../api/users"; // Assuming you have a users API
const { usersApi: api } = useUsersApi();

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [],
    user: {},
    userId: 0,
  }),

  actions: {
    async fetchAll(): Promise<Boolean> {
      try {
        const { data } = await api.all();
        this.users = data;
      } catch (error: any) {
        const message = error.response.data.message;
        return false;
      }
      return true;
    },

    async fetchOne(id: number): Promise<Boolean> {
      try {
        const { data } = await api.one(id);
        this.user = data;
      } catch (error: any) {
        const message = error.response.data.message;
        return false;
      }
      return true;
    },

    async create(newUser: any): Promise<Boolean> {
      try {
        const { data } = await api.post(newUser);
        this.user = data;
      } catch (error: any) {
        const message = error.response.data.message;
        return false;
      }
      return true;
    },

    async update(id: number, updatedUser: any): Promise<Boolean> {
      try {
        const { data } = await api.patch(id, updatedUser);
        this.user = data;
      } catch (error: any) {
        const message = error.response.data.message;
        return false;
      }
      return true;
    },
  },
});
