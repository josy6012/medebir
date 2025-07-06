import React from 'react';
import './DASHBOARD.css';

function Dashboard() {
  return (<div>
    
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Categories</h2>
            <div className="flex flex-wrap gap-4"></div>
            <div className="bg-gray-200 p-4 rounded-lg">Category 1</div>
            <div className="bg-gray-200 p-4 rounded-lg">Category 2</div>
            <div className="bg-gray-200 p-4 rounded-lg">Category 3</div>
            <div className="bg-gray-200 p-4 rounded-lg">Category 4</div>
        </div>
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Products</h2>
            <div className="flex flex-wrap gap-4"></div>
            <div className="bg-gray-200 p-4 rounded-lg">Product 1</div>
            <div className="bg-gray-200 p-4 rounded-lg">Product 2</div>
            <div className="bg-gray-200 p-4 rounded-lg">Product 3</div>
            <div className="bg-gray-200 p-4 rounded-lg">Product 4</div>
      </div>
  </div>
  );

    
}
export default Dashboard;
// .cart-item {
//     display: flex;
//     align-items: center;
//     padding: 10px;
//     background-color: #fff;

//     border-radius: 4px;
//     box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
//     margin-bottom: 10px;
// }
//     border-radius: 4px;
//     box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
// }
// .cart-item img {
//     width: 50px;
//     height: 50px;
//     border-radius: 4px;
//     margin-right: 10px;
// }
// .item-details {
//  flex-grow: 1;
  //  display: flex;
  //  flex-direction: column;

   // justify-content: center;

  //  color: #333;
//}
// .item-details h2 {
//     font-size: 18px;
//     margin: 0;
//     color: #333;
// }
// .item-details p {
//     margin: 5px 0;
//     color: #666;
// }
// .item-details p {
//     font-size: 14px;
//     color: #666;
// }          
// .cart-item button {


//     padding: 5px 10px;                                               




//     background-color: #007bff;
//     color: #fff;

//     border: none;

//     border-radius: 4px;
//     cursor: pointer;
//     font-size: 14px;
//     transition: background-color 0.3s ease;

