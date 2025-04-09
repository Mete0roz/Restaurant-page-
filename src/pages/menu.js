import logo2 from "../img/bar/logo2.jpeg";
import tables from "../img-menu/tables.jpeg";

export default function loadMenu(){
    const container = document.querySelector("#container");

    container.innerHTML = `

     <div id="bar">
        <img src="${logo2}" alt="" id="logobar" />
        <h1>Sweet & Cream</h1>
        <div id="choices">
        <p class="link-bar" id="homeBtn">Home</p>
        <p class="link-bar" id="menuBtn">Menu</p>
        <p class="link-bar" id="aboutBtn">About us</p>
        <p class="link-bar">Location</p>
        </div>
    </div>
      <div id="menu-page">
        <h1>Sweet Cream Menu</h1>
        <img src="${tables}" alt="tables" />
        <div id="menu-list">
        <section> 
        
        <h2>Beverages</h2>
        
            
               <p> Lattes - $3.50 </p> <br>

                <p> Cappuccino - $4.00 </p> <br>
                
               <p> Expresso - $2.50 </p> <br>
                
                <p> American - $3.00 </p> <br>  
                
               <p> Iced Coffee - $3.75 </p> <br>
                
                <p> Hot Chocolate - $3.25  </p> <br>
            
        
        <h2>Milkshakes</h2>
       
               <p> Vanilla Milkshake - $5.00</p> <br>
                
                <p>Chocolate Milkshake - $5.50</p> <br>

                <p>Strawberry Milkshake - $5.25 </p><br>

                <p>Coffee Milkshake - $5.75</p> <br>
          
        <h2>Cakes</h2>
        
               <p> Chocolate Cake - $4.25 per slice </p><br>

               <p> Vanilla Cake - $4.00 per slice</p> <br>

                <p>Red Velvet Cake - $4.50 per slice</p> <br>

               <p> Carrot Cake - $4.00 per slice</p> <br>
         
        <h2>Pies</h2>
       
              <p>  Apple Pie - $3.75 per slice </p><br>

               <p> Lemon Meringue Pie - $4.00 per slice </p><br>

                <p>Cherry Pie - $4.25 per slice</p> <br>

                <p>Pumpkin Pie - $3.50 per slice </p><br>
        
        <h2>Pastries</h2>
        
               <p> Croissant - $2.50 </p><br>

               <p> Chocolate Croissant - $3.00 </p><br>

               <p> Cinnamon Roll - $3.50</p> <br>

               <p> Fruit Danish - $3.25</p> <br>

               <p> Almond Biscotti - $2.75</p> <br>
           
        <h2>Specials</h2>
        
              <p>  Fruit Tart - $4.75 </p><br>

              <p>  Cheesecake - $5.25 </p><br>

               <p> Macarons (3 pieces) - $4.50 </p><br>
         
        </div>
        </section>
        <div id=bottom> 
        <stronger><h3 id="git">My GitHub</h3><stronger>
        </div>
    </div>
   
    `;

}
