import thumbnail from "../public/images/image-product-1-thumbnail.jpg";

export const CART_ITEM = (n) => {
  const initialPrice = 125;

  return (
    `<div class="cart-item">
    <div class="cart-item-detail">
      <div class="cart-item-detail-image">
        <img src="${thumbnail}" alt="thumbnails">
      </div>
      <div class="cart-item-detail-description">
        <span class="item-detail-name">
          Fall Limited Edition Sneakers
        </span>
        <span class="item-detail-price">
          $125.00 &times; ${n} <b class="total">$${initialPrice * n}.00</b>
        </span>
      </div>
      <div class="delete-btn">
        <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs>
            <path
              d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
              id="a" />
          </defs>
          <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a" />
        </svg>
      </div>
    </div>
    <button class="checkout-btn">Checkout</button>
  </div>`
  )
};
export const CLOSE_SVG = `<span class="close-bg"><svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#fff" fill-rule="evenodd"/></svg></span>`;
export const EMPTY_SIGN = `<div class="empty-sign">Your cart is empty.</div>`;

export function NOTIF(n) {
  return `<span class="notification">${n}</span>`
}