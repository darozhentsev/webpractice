import React from "react";
import { useDispatch, useSelector } from "react-redux";
import GameButton from "../btn-game/btn-game";
import './game-buy.css';
import { setItemInCart } from "../../redux/cart/reducer";
import { deleteItemFromCart } from "../../redux/cart/reducer";

const GameBuy = ({game}) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart);
    const isItemInCart = items.some(item => item.id === game.id);

    const handleClick = (e) => {
        e.stopPropagation();
        if ( isItemInCart ) {
            dispatch(deleteItemFromCart(game.id));
        } else {
            dispatch(setItemInCart(game));
        }
        
    }
    return ( 
        <div className="game-buy">
            <span className="game-buy__price">
                {game.price} руб.
            </span>
            <GameButton 
                type={isItemInCart ? "secondary" : "primary" }
                onClick={ handleClick }
            >
              { isItemInCart ? 'Удалить из корзины' : 'Добавить в корзину' }
            </GameButton>
            
        </div>
     );
}
 
export default GameBuy;