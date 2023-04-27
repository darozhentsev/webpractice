import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BiCartAlt } from "react-icons/bi";
import CartMenu from './../cart-menu/cart-menu';
import ItemsInCart from './../items-in-cart/items-in-cart';
import { calcTotalPrice } from "../utils";
import "./../cart-block/cart-block.css";
import { useCallback } from "react";

const CartBlock = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
    const items = useSelector((state) => state.cart.itemsInCart);
    const navigate = useNavigate();
    const totalPrice = calcTotalPrice(items);
    const handleGoToOrderClick = useCallback(() => {
        setIsCartMenuVisible(false);
        navigate('/order');
    }, [navigate]);


    return (
        <div className="cart-block">
            <ItemsInCart quantity={items.length} />
            <BiCartAlt size={35} className="cart-block__icon" onClick={() => setIsCartMenuVisible(!isCartMenuVisible) }/>
            {totalPrice > 0 ? (<span className="cart-block__total-price">{totalPrice} руб. </span>) : null}
            { isCartMenuVisible && <CartMenu onClick={ handleGoToOrderClick }/>}
        </div>

    );
}

export default CartBlock;