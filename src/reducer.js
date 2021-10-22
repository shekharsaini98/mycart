import data from "./data";
const reducer = (state, action) =>{
    if(action.type === 'LOADING'){
        return {...state, loading:true}
    }
    if(action.type === 'DISPLAY'){
        return {...state, cart:data,loading:false};
    }
    if(action.type === 'CLEAR_CART'){
        return {...state, cart:[]}
    }
    if(action.type === 'REMOVE_ITEM'){
        return {...state, cart:state.cart.filter(item=>item.id!==action.payload)}
    }
    if(action.type === 'INCREASE_ITEM'){
        const newcart = state.cart.map(item=>(item.id===action.payload)?{...item,amount:item.amount+1}:item);
        return {...state, cart:newcart}
    }
    if(action.type === 'DECREASE_ITEM'){
        const newcart = state.cart.map(item=>(item.id===action.payload)?{...item, amount:item.amount-1}:item).filter(item=>item.amount!==0);
        return {...state, cart:newcart}
    }
    if(action.type==='GET_TOTAL'){
        const {total, amount} = state.cart.reduce((cartTotal, cartItem)=>{
            const {price, amount} = cartItem;
            cartTotal.amount += amount;
            cartTotal.total += (amount * price);
            return cartTotal
        },{total:0,amount:0})
        return {...state, total, amount}
    }
    return state;
}
export default reducer;