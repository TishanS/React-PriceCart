import React, { useEffect } from 'react';
import './product.css';
import { useLocation } from 'react-router-dom';
import { Output } from '@mui/icons-material';


export default function Checkout() {
    const Location = useLocation();
    var items = Location.state.cartItems;
    var pr, sum = 0;

    return (
        <div className="cart-items">
            <h3 style={{ textAlign: 'center' }}>Cart Items</h3><br /><br />
            <div>
                <table id='table'>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Product Items</td>
                            <td>Quantity</td>
                            <td>Original Price</td>
                            <td>Discount</td>
                            <td>Price(in $)</td>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((ele => {
                            console.log(ele[0])

                            if (ele[0].discount === '0')
                                pr = ele[0].price
                            else
                                pr = ele[0].price - (ele[0].price * (ele[0].discount / 100));

                            sum = sum + parseInt(pr)
                            return (
                                <tr>
                                    <td>{ele[0].id}</td>
                                    <td>{ele[0].name}</td>
                                    <td>1</td>
                                    <td>${ele[0].price}</td>
                                    <td>{ele[0].discount}%</td>
                                    <td>{pr}</td>
                                </tr>
                            )

                        }))
                        }
                    
                        <tr>
                            <td colSpan={5} className='total'>Sub-total </td>

                            <td id="val">${sum}</td>
                        </tr>
                        <tr>
                            <td colSpan={5} className='total'>GST(10%)</td>
                            <td>${(sum * 0.1).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td colSpan={5} className='total'>Total</td>
                            <td>${(sum + sum * 0.1).toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

function output() {

    var cell = document.getElementsByClassName("count-me")[0];
    var out = document.getElementById("val").innerText;
    var val = 0;
    var i = 0;
    while (cell[i] != undefined) {
        val += parseFloat(cell[i].innerHTML);
        i++;
    }
    return out = parseFloat(val).toFixed(2);
    // console.log(out)
}