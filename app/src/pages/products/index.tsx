import { CSSProperties } from "react";
import styles from "./styles.module.scss";

const style: CSSProperties = {
  maxWidth: "18rem",
};

export default function Products() {
  const products = [
    {
      name: "Notbook",
      quantity: 12,
      price: 3200.0,
      description: `Some quick example text to build on the card title and make up
      the bulk of the card's content.`,
    },
    {
      name: "Mouse",
      quantity: 66,
      price: 90.0,
      description: `Some quick example text to build on the card title and make up
      the bulk of the card's content.`,
    },
    {
      name: "Webcam",
      quantity: 9,
      price: 100.0,
      description: `Some quick example text to build on the card title and make up
      the bulk of the card's content.`,
    },
    {
      name: "Keyboard",
      quantity: 9,
      price: 100.0,
      description: `Some quick example text to build on the card title and make up
      the bulk of the card's content.`,
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {products.map((item) => {
          return (
            <div key={item.name} className="col">
              <div className={styles.card}>
                <div className="card text-bg-light mb-3" style={style}>
                  <div className="card-header">{item.name}</div>
                  <div className="card-body">
                    <h5 className="card-title">
                      Quantity: {item.quantity} / Price: {item.price}
                    </h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
