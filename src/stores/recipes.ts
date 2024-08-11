import { defineStore } from "pinia";
import { useRecipesApi } from "../api/recipes";
const { recipesApi: api } = useRecipesApi();

// const store = useMainStore();

export const useRecipesStore = defineStore("recipes", {
  state: ()  => ({
    recipes: [],
    recipe: {},
    recipeId: 0,
  }),

  actions: {


    async fetchAll(): Promise<Boolean> {
      try {
        const { data } = await api.all();
        this.recipes = data;
      } catch (error: any) {
        const message = error.response.data.message;

        return false;
      }
      return true;
    },

    async fetchOne(id: number): Promise<Boolean> {
   
      try {
        const { data } = await api.one(id);
        this.recipe = data;

      } catch (error: any) {
        const message = error.response.data.message;
      
        return false;
      }
      return true;
    },

    async create(one:any): Promise<Boolean> {
      try {
        const { data } = await api.post(one);
        this.recipe = data;
      } catch (error: any) {
        const message = error.response.data.message;
        return false;
      }
      return true;
    },

    async update(id: number, one:any): Promise<Boolean> {
      try {
        const { data } = await api.patch(id, one);
        this.recipe = data;
      } catch (error: any) {
        const message = error.response.data.message;
        return false;
      }
      return true;
    },


    async delete(id: number): Promise<Boolean> {
      try {
        const { data } = await api.delete(id);
        this.recipe = data;
      } catch (error: any) {
        const message = error.response.data.message;
        return false;
      }
      return true;
    },
  },
});
