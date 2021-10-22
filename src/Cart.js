import React from 'react';
import CartItem from './CartItem';
import { useGlobalContext } from './context';
export default function Cart() {
    const {cart, total, clearCart}  = useGlobalContext();
    return (
        <>
            {
                (cart.length>0)?
                <>
                    {
                        cart.map((item)=><CartItem {...item} key={item.id} />)
                    }
                    <footer className="cart-footer">
                        <hr />
                        <div className="cart-total">
                            <p className="type2para" >Total</p>
                            <p className="type2para">₹ {total}.00</p>
                        </div>
                        <button className="cartclearbtn" onClick={clearCart}>
                            Clear Cart
                        </button>
                    </footer>
                </>
                :
                <h6>is empty</h6>
            }
        </>
    )
}
