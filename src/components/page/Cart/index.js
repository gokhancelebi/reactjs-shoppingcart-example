import {useState, useEffect} from "react";
import './index.scss';

const Cart = () => {

    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [enteredName, setEnteredName] = useState("");
    const [enteredPrice, setEnteredPrice] = useState("");

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const newCartItem = {
            name: enteredName,
            price: enteredPrice,
            id: Math.random().toString()
        };
        setCartItems((prevCartItems) => [...prevCartItems, newCartItem]);
    };

    const removeItemHandler = (e) => {
        cartItems.forEach((item, index) => {
            if(item.id === e.currentTarget.id){
                cartItems.splice(index, 1);
            }
        });
        setCartItems([...cartItems]);
    }

    const nameChangeHandler = (e) => {
        setEnteredName(e.target.value);
    }

    const priceChangeHandler = (e) => {
        setEnteredPrice(e.target.value);
    }

    useEffect(() => {
        setTotal(calculateCarttotal(cartItems));
    }, [cartItems]);

    const calculateCarttotal = (cartItems) => {
        let total = 0;
        cartItems.forEach(item => {
            total += parseInt(item.price);
        });
        return total;
    }

    return (
        <div>
            <h1>Cart</h1>
            <div className="add-cart-item">
                <h2>Add Item</h2>
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={enteredName} onChange={nameChangeHandler} id="name"/>
                    <label htmlFor="price">Price</label>
                    <input type="text" name="price" value={enteredPrice} onChange={priceChangeHandler} id="price"/>
                    <button type='submit' onClick={formSubmitHandler}>Add Item</button>
                </form>
            </div>
            <div className="cart-list">
                {cartItems.map(item => (
                    <div className="cart-item" key={item.id}>
                        <div className="cart-item__name">{item.name}</div>
                        <div className="cart-item__price">{item.price}</div>
                        <button className="cart-item__remove" id={item.id} onClick={removeItemHandler}>Remove</button>
                    </div>
                ))}
            </div>
            <div className="cart-footer">
                <div className="cart-footer__total">Total: {total}</div>
            </div>
        </div>
    );
}

export default Cart;