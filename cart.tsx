
import './cart.css'; // Import the CSS file for styling

// Define the Cart component
// This component represents the shopping cart in the application
// It displays the items in the cart, their details, and a checkout button
// The component is styled using CSS classes defined in the cart.css file
// The cart component is a functional component that returns JSX to render the cart UI
// The component uses React's functional component syntax and JSX to define the structure and style of the cart
// The component is designed to be reusable and can be integrated into a larger application
// The component is exported as the default export of the module, allowing it to be imported and used in other parts of the application
// The component is a simple representation of a shopping cart, and it can be extended with additional functionality as needed
// The component is a functional component that returns JSX to render the cart UI
function cart() {
    return (
        <>
            <div className="cart">
            <h1>Shopping Cart</h1>
            <div className="cart-items">
                <div className="cart-item">
                    <img src="https://via.placeholder.com/150" alt="Product" />
                    <div className="item-details">
                        <h2>Product Title</h2>
                        <p>Quantity: 1</p>
                        <p>Price: 19.99 Br.</p>
                    </div>
                </div>
            </div>
            <button className="checkout-button">Checkout</button>
        </div>
        </>
    );

    
}
export default cart;
// Compare this snippet from MiniApp/src/App.tsx:   
// import './App.css'
// import Productcard from '../components/ProductCard'
// import Cart from '../components/cart'
//
// function App() {
//
//     return ( 
//         <>
//             <Productcard/>
//             <Cart/>  
//         </>
//     )
// }
//
// export default App
// Compare this snippet from MiniApp/src/components/cart.css:
// .cart {
//     padding: 20px;

//     background-color: #f9f9f9;
//     border-radius: 8px;
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//     max-width: 600px;
//     margin: 0 auto;
// }
//
// .cart h1 {
//     font-size: 24px;
//     margin-bottom: 20px;
//     text-align: center;
//     color: #333;
// }
//
// .cart-items {
//     display: flex;
//     flex-direction: column;
//     gap: 10px;
//     margin-bottom: 20px;
// }
//
// .cart-item {
//     display: flex;
//     align-items: center;
//     padding: 10px;
//     background-color: #fff;
//     border-radius: 8px;
//     box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
//     transition: box-shadow 0.3s ease;    
// }
//
// .cart-item:hover {
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
// }
//
// .cart-item img {
//     width: 50px; 
//     height: 50px;
//     border-radius: 4px;
//     margin-right: 10px;
// }
//
// .item-details {
//     flex-grow: 1;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     color: #333;
// }
// .item-details h2 {
//     font-size: 18px;
//     margin: 0;
//     color: #333;
// }
// .item-details p {  
//     margin: 5px 0;
//     color: #666;
// }
// .checkout-button {
//     padding: 10px 20px;
//     background-color: #28a745;
//     color: #fff;
//     border: none;
//     border-radius: 4px;
//     cursor: pointer;
//     font-size: 16px;
//     transition: background-color 0.3s ease;
// }
//
// .checkout-button:hover {
//     background-color: #218838;
// }
// .checkout-button:focus {
//     outline: none;
//     box-shadow: 0 0 0 2px rgba(40, 167, 69, 0.5);
// }
// .checkout-button:active {
//     background-color: #1e7e34;
//     transform: translateY(1px);
//     box-shadow: 0 0 0 2px rgba(40, 167, 69, 0.5);
// }
// .checkout-button:disabled {
//     background-color: #ccc;
//     cursor: not-allowed;
//     opacity: 0.7;
//     pointer-events: none;
// }
// .checkout-button:disabled:hover {
//     background-color: #ccc;
//     cursor: not-allowed;
//     opacity: 0.7;
//     pointer-events: none;
// }
// .checkout-button:disabled:focus {
//     outline: none;
//     box-shadow: none;
//     pointer-events: none;

// }
// .checkout-button:disabled:active {       
//     background-color: #ccc;
//     cursor: not-allowed;
//     opacity: 0.7;    
//     pointer-events: none;
// }
// .checkout-button:disabled:active:hover {
//     background-color: #ccc;
//     cursor: not-allowed;
//     opacity: 0.7;
//     pointer-events: none;
// }


