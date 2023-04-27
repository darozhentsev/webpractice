import React from "react";
import { useSelector } from "react-redux";
import { calcTotalPrice } from "../utils";
import GameButton from "../btn-game/btn-game";
import  CartItem  from "./../cart-item/cart-item";
import './cart-menu.css';

const CartMenu = ({ onClick }) => {
    const items = useSelector((state) => state.cart.itemsInCart);
    return ( 
        <div className="cart-menu">
            <div className="cart-menu__product-list">
              {items.length > 0
              ? items.map((game) => (
                <CartItem
                key={game.image}
                image={game.image}
                price={game.price}
                title={game.title}
                id={game.id}
                />
              ))
              : "Корзина пуста"}
            
            </div>
            {
                items.length > 0 ? (
                <div className="cart-menu__arrange">
                    <div className="cart-menu__total-price">
                        <span>Итого:</span>
                        <span>{calcTotalPrice(items)} руб.</span>
                    </div>
                    <GameButton type="primary" size="m" onClick={onClick}>
                        Оформить заказ
                    </GameButton>
                </div>
                 ) :null
            }
        </div>
     );
}
 
export default CartMenu;