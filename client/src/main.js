import "./reset.css";
import "./assets.css";
import "./style.css";

const Header = `
        <div class="header-container">
          <div class="header-logo logo">
            <a href="#">shopping</a>
          </div>
            <input class ="searchbox" type="text" placeholder="search items" />
        </div>`;

const Footer = `
    <footer>
        footer
    </footer>
`;

const MainMenu = `
    <ul class="main-menu">
     <li><a href="#">smartphones</a></li>
     <li><a href="#">laptops</a></li>
    </ul>
`;

// {
//             "id": 1,
//             "title": "iPhone 9",
//             "description": y"An apple mobile which is nothing like apple",
//             "price": 549,
//             "discountPercentage": 12.96,
//             "rating": 4.69,
//             "stock": 94,
//             "brand": "Apple",
//             "category": "smartphones",
//             "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//             "images": [
//                 "https://i.dummyjson.com/data/products/1/1.jpg",
//                 "https://i.dummyjson.com/data/products/1/2.jpg",
//                 "https://i.dummyjson.com/data/products/1/3.jpg",
//                 "https://i.dummyjson.com/data/products/1/4.jpg",
//                 "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
//             ]
//         },

const Product = `
    <div class="product">
        <img src="https://i.dummyjson.com/data/products/1/thumbnail.jpg" alt="product" />
        <ul>
            <li>Iphone 9</li>
            <li>An apple mobile which is nothing like apple</li>
            <li>594 u$s</li>
        </ul>
    </div>`;

const Products = `
    <ul>
      <li>
        <a href="#">
         ${Product}
        </a>
      </li>
      <li>
        <a href="#">
         ${Product}
        </a>
      </li>
    </ul>
    `;

const MainWrapper = `
    <div class="main-wrapper">
        ${MainMenu}
        ${Products}
        ${Footer}
    </div>
`;

document.querySelector("#app").innerHTML = `
    ${Header}
    ${MainWrapper}
`;
