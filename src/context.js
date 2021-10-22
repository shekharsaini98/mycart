import React,{useContext, useReducer, useEffect} from "react";
import reducer from "./reducer";
const AppContext = React.createContext();

const initialState= {
 loading:false,
 cart:[],
 total:0,
 amount:0
}

const AppProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState);
    // dispatchers
    const clearCart = ()=> {
        dispatch({type:'CLEAR_CART'})
    }
    const removeItem = (id)=>{
        dispatch({type:'REMOVE_ITEM', payload:id});
    }
    const increase = (id)=>{
        dispatch({type:'INCREASE_ITEM', payload:id});
    }
    const decrease = (id)=>{
        dispatch({type:'DECREASE_ITEM', payload:id});
    }
    useEffect(() => {
        dispatch({type:'LOADING'});
        setTimeout(() => {
            dispatch({type:'DISPLAY'});
        }, 700);
    }, [])
    useEffect(() => {
        dispatch({type:'GET_TOTAL'})
    }, [state.cart])
    return(
        <AppContext.Provider
            value={{...state,clearCart,removeItem,increase,decrease}}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}