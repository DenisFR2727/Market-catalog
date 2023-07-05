import { createSlice,createSelector } from "@reduxjs/toolkit";
import { fetchedTovars } from "../../../thunk/index";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    originalTovars: JSON.parse(localStorage.getItem("tovars")) || [],
    tovars: JSON.parse(localStorage.getItem("tovars")) || [],
    tovarsLoadingStatus: 'idle',
    infocard: [],
    basket: JSON.parse(localStorage.getItem("basket")) || [],
    showBasket: false,
    closeBasket: true,
    sum: localStorage.getItem("sum") || 0,
    filterOpen: false,
    selectOption: "All",
    discountUsers: [],
    isPandingSearch: ''
}
export const fetchTovars =  fetchedTovars;

const tovarsSlice = createSlice({
    name: "tovars",
    initialState,
    reducers: {
        addNewTovar(state,action) {
            state.tovars = [...state.tovars, action.payload]
            // state.basket = [...state.basket, action.payload]; // Оновлення кошика
            localStorage.setItem('tovars', JSON.stringify(state.tovars));
            // localStorage.setItem('basket', JSON.stringify(state.basket));
        },
        filterCategory(state,action) {
            const filteredTovars = state.originalTovars.filter((item) => {
                return action.payload === "All" || action.payload === item.category;
            });
            state.tovars = filteredTovars;
        },
        filterPrice(state,action) {
            const { from, to } = action.payload;
            const filteredTovars = state.originalTovars.filter((item) => {
                    return item.price >= from && item.price <= to;
            });
            state.tovars = filteredTovars;
        },
        selectCard(state,action) {
             state.infocard = action.payload
        },
        addTovar(state, action)  {
          if(!state.showBasket) {
             state.showBasket = true;
          }
          const newItem = {...action.payload, counter: 1, id: uuidv4()}
             state.basket = [...state.basket, newItem]
          if(state.basket.length > 0){
             state.sum = state.basket.reduce((acc,next) => acc + next.price * next.counter,0)
          }
             localStorage.setItem("basket", JSON.stringify(state.basket));
             localStorage.setItem("sum",state.sum);
        },
        deleteTovar(state, action) {
             const tovarId = action.payload;
             state.basket = state.basket.filter((item) => item.id !== tovarId)
             state.sum = state.basket.reduce((acc, next) => acc + next.price * next.counter, 0);
             localStorage.setItem("basket", JSON.stringify(state.basket));
             localStorage.setItem("sum",state.sum);
        },
        closeBasket(state){
             state.closeBasket = false;
             state.showBasket = false;
        },
        counterIncrement(state,action) {
              const itemIndex = action.payload;
              const item = state.basket[itemIndex];
          if (item && item.counter >= 1) {
             item.counter += 1;
             state.sum = state.basket.reduce((acc, next) => acc + next.price * next.counter, 0);
             localStorage.setItem('basket', JSON.stringify(state.basket));
          }
             localStorage.setItem("sum",state.sum);
        },
        counterDecrement(state,action) {
              const itemIndex = action.payload;
              const item = state.basket[itemIndex];
          if (item && item.counter > 1) {
             item.counter -= 1;
             state.sum = state.basket.reduce((acc, next) => acc + next.price * next.counter, 0);
             localStorage.setItem('basket', JSON.stringify(state.basket));
          } 
             localStorage.setItem("sum",state.sum);
        },
        filterModal(state,action) {
          if(!state.filterOpen) {
                state.filterOpen = true;
          }else{
                state.filterOpen = false;
            }
                
        },
        addDiscountUser(state,action) {
           state.discountUsers = [...state.discountUsers, action.payload];
        },
        searchTovars(state,action) {
            const search = action.payload
            state.tovars = state.originalTovars.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
        },
        isPendingSearch(state,action) {
            state.isPandingSearch = action.payload;
        }
    }, 
    extraReducers:(builder) => {
        builder
        .addCase(fetchTovars.pending, state => {
          state.tovarsLoadingStatus = 'loading'})
        .addCase(fetchTovars.fulfilled, (state, action) => {
          state.tovarsLoadingStatus = 'idle';
          state.tovars = action.payload;
          localStorage.setItem('tovars', JSON.stringify(state.tovars));
          })
        .addCase(fetchTovars.rejected, state => {
              state.tovarsLoadingStatus = 'error';
          })
        .addDefaultCase(() => {})
    }
})
export const tovarsList = createSelector(
    state => state.tovars,
    tovars => tovars
)
export const infoTovar = createSelector(
    state => state.infocard,
    infocard => infocard
)
export const  basketTovar = createSelector(
    state => state.basket,
    basket => basket
)
export const closedBusket = createSelector(
    state => state.closeBasket,
    closeBasket => closeBasket
)
export const sum = createSelector(
    state => state.sum,
    sum => sum
)

const {actions, reducer} = tovarsSlice;

export const {
    selectCard,
    addTovar,
    deleteTovar,
    closeBasket,
    counterIncrement,
    counterDecrement,
    filterModal,
    addNewTovar,
    filterCategory,
    filterPrice,
    addDiscountUser,
    searchTovars,

} = actions;

export default reducer

