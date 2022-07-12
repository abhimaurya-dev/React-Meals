import styles from "./CartItem.module.css";

const CartItem = ({ name, price, amount, onAdd, onRemove }) => {
  const formattedPrice = `$${price.toFixed(2)}`;

  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{formattedPrice}</span>
          <span className={styles.amount}>x {amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={onRemove}>
          −
        </button>
        <button type="button" onClick={onAdd}>
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
