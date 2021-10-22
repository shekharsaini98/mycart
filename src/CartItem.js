import React from 'react'
import { useGlobalContext } from './context'
export default function CartItem({id,title,img,price,amount}) {
    const {removeItem,increase,decrease} = useGlobalContext();
    return (
        <div>
            <article className="cart-item">
                <img className="item-image" src={`assets/images/${img}`} alt={title} />
                <div>
                <h4 className="type3para">{title}</h4>
                <h4 className="type3para item-price">₹{price}</h4>
                <button className="item-remove-btn" onClick={()=>removeItem(id)}>remove</button>
                </div>
                <div>
                <button className="qtn-btn" onClick={()=>increase(id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z"></path></svg>
                </button>
                <p className="amount">{amount}</p>
                <button className="qtn-btn" onClick={()=>decrease(id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg>
                </button>
                </div>
            </article>
        </div>
    )
}
