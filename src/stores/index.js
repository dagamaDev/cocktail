import { ref } from 'vue';
import { defineStore, storeToRefs } from 'pinia';
import axios from 'axios';
export const useCocktailInfo = defineStore('cocktailInfoStore', () => {
    const cocktailInfo = ref(null);
    const getCocktailInfo = async (code) => {
        try{
            const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${code} `);
            cocktailInfo.value = response.data;
        }
        catch(error){
            console.log(error);
        }    

    };
    return {
        cocktailInfo,
        getCocktailInfo
    }
});