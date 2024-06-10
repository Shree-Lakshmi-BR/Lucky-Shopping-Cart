let products = [
  {
    id: 1,
    img: "./images/Samsung.jpg",
    title: "Samsung Galaxy M15 5G",
    price: "₹14499",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/51waOv47fqL._SX522_.jpg",
    title: "JBL Go 3",
    price: "₹2798",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/71lYhcc++AL._SX679_.jpg",
    title: "ASUS Vivobook 15",
    price: "₹28030",
  },
  {
    id: 4,
    img: "https://loopearplugs.in/cdn/shop/files/PDP_QUIET_WHITE_01_26f6bda0-99a2-495b-a530-97f667be2a0c.png?v=1703236336&width=1100",
    title: "Quiet",
    price: "₹1799",
  },
  {
    id: 5,
    img: "https://m.media-amazon.com/images/I/61VuVU94RnL._SX679_.jpg",
    title: "Apple iPhone 13",
    price: "₹52900",
  },
  {
    id: 6,
    img: "https://m.media-amazon.com/images/I/71o881+wdnL._SX522_.jpg",
    title: "Portronics SoundDrum",
    price: "₹1999",
  },
  {
    id: 7,
    img: "https://m.media-amazon.com/images/I/718VTQB6pxL._SX679_.jpg",
    title: "HP 15s, 11th Gen",
    price: "₹41499",
  },
  {
    id: 8,
    img: "https://m.media-amazon.com/images/I/61nxQ62qglL._SX679_.jpg",
    title: "Oneplus Nord CE4",
    price: "₹24999",
  },
  {
    id: 9,
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_blue_eb862c0f-658f-43a2-99c2-65783233f592_1875x.png?v=1641980344",
    title: "Airdopes 181",
    price: "₹1199",
  },
];

let cart = [];

let categories = [...new Set(products.map((item) => item))];

let i = 0;

let cartContainer = document.getElementById("root");
cartContainer.innerHTML = categories
  .map((item) => {
    let { img, title, price } = item;
    return (
      `<section class="part">
            <article class="img_part"><img src="${img}" alt="no img"></article>
            <article class="det_part">
                <p>${title}</p>
                <h2>${price}</h2>` +
      `<button onclick='addToCart(${i++})'>Add To Cart</button>` +
      `</article>
        </section>`
    );
  })
  .join("");

function addToCart(index) {
  cart.push({ ...categories[index] });
  displayCart();
}

function deleteItem(index) {
  cart.splice(index, 1);
  displayCart();
}

function displayCart() {
  let j = 0;
  let total = 0;
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "0";
  } else {
    document.getElementById("cartItem").innerHTML = cart
      .map((item) => {
        let { price } = item;
        price = parseInt(price.replace("₹", "")); // Remove currency symbol and convert to integer
        total += price;
        document.getElementById("total").innerHTML = "₹" + total;
        return (
          `<div class='cart-item'>
                    <h2 style='font-size: 15px;'>₹${price}</h2>` +
          `<button style='width:100px;' onclick='deleteItem(${j++})'>Remove</button></div>`
        );
      })
      .join("");
  }
}
