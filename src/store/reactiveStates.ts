import { reactive, provide, inject, readonly } from 'vue';
import { UserProfile } from './type'


export const storeSymbol = Symbol('store');

export const createStore = () => {
    const state = reactive({ counter: 0, user: null as UserProfile | null });


    const increment = () => state.counter++;
    const setUser = (user: UserProfile | null) => {
        state.user = user
    }

    return { mutations: { increment, setUser }, state: readonly(state) };
}

export declare type Store = ReturnType<typeof createStore>


export const provideStore = () => provide(
    storeSymbol,
    createStore()
);

export const useStore = () => inject<Store>(storeSymbol);


/// doc https://dev.to/blacksonic/you-might-not-need-vuex-with-vue-3-52e4
