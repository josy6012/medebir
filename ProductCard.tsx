
import './productCard.css';

function ProductCard() {   
    return( <div>
    <h1 className="Shop-title"> MEDEBIR</h1> 
    <h2 className="Shop-catagory">Stationary</h2>
        
    

   <div className="products" >
     <div className="product-card" >
         <div className="product-image" >
             
             <div className="scroll-container">
             <img src="components/K.One front.png" alt="Product" className="image" />
             <img src="components/K.One Back.jpg" alt="Product" className="image" />
            
         </div>
         </div>  
         <div className="product-details">
              <h2 className="product-title">K.One Premium A4 Copier Paper</h2>
              <p className="product-description">Kone premium A4 Copier paper 80 gms 500 Sheets. Perfect for any Printer.
                Made in India. </p>
                
               
                <div className="product-availability">
                    <span className="availability">In Stock</span>
                </div>
                
               
            
             <span className="product-price">800Br.</span>
           </div>
             <button className="buy-now-button">Buy Now</button> 
       
        </div >
       
    </div>
</div>
   ) 
}
export default ProductCard;