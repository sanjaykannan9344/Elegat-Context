import { useContext } from "react";
import { CartContext } from "../store/shoppingCardContext";
import { HiMinusCircle, HiPlusCircle, HiXCircle } from "react-icons/hi";
export default function Cart() {
  //{items} in shopingCardContext (CartContext)
  const { items, updateItemQuantity, deleteCart } = useContext(CartContext);
  //calculate the total price using the context value
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div id="cart" className="mx-4">
      {items.length === 0 && <p>No items in cart!</p>}
      {items.length > 0 && (
        <ul id="cart-items">
          {items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div className="flex flex-col gap-3 ">
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <HiMinusCircle
                    onClick={() => updateItemQuantity(item.id, -1)}
                  >
                    -
                  </HiMinusCircle>
                  <span>{item.quantity}</span>
                  <HiPlusCircle onClick={() => updateItemQuantity(item.id, 1)}>
                    +
                  </HiPlusCircle>
                  <HiXCircle onClick={() => deleteCart(item.id, 0)}>
                    DELETE
                  </HiXCircle>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
