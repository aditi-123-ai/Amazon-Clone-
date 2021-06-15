import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./StateProvider";
import { getBasketTotal } from './reducer';
import { useHistory } from "react-router-dom";

function Subtotal(){
    const history = useHistory();
    const [{basket}] = useStateValue();
    return (
        <div className="subtotal">
            {/* Price */}
            <CurrencyFormat
                renderText={(value) => (
                 <>
                    <p>
                        Subtotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" /> This order contains the gift
                    </small>
                 </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;
