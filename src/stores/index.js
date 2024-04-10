import { ref } from 'vue';
import { defineStore, storeToRefs } from 'pinia';
import axios from 'axios';
const apiUrl = import.meta.env.VUE_APP_API_URL

export const useCocktailInfo = defineStore('cocktailInfoStore', () => {

    const cocktailInfo = ref();
    const getCocktailInfo = async (code) => {
        try {
            const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${code}`);
            cocktailInfo.value = response.data;
        } catch (error) {
            console.log(error);
        }    
    };
    return {
        cocktailInfo,
        getCocktailInfo
    }
});