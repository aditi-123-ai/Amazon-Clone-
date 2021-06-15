import React from 'react';
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import {useStateValue} from "./StateProvider";
import Subtotal from "./Subtotal";


function Checkout() {
    const [{ basket,user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__ad" 
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/GiftCards/CorpGCPages/InterMiles_Banner_PC.jpg" 
            alt="" />

        {basket?.length === 0 ? (
            <div>
                <h3>Hello, {user?.email}</h3>
                <h2>Your Shopping Basket is empty :(</h2>
                <p>
                    You have no item in you basket. To buy one or "Add to basket" next to the item.
                </p>
            </div>
        ):(
            <div>
                <h2 className="checkout__title">Your Shopping Basket</h2>
                {/*List out all of the checkout products*/}
                {basket?.map((item) => (
                    
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                
                ))}
            </div>
        )}
        </div>
        {basket.length > 0 &&(
            <div className="checkout__rigth">
                <Subtotal />
            </div>
        )}
        </div>
    );
}

export default Checkout;
