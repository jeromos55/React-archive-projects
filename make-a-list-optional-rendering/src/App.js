import React from "react";
import "./index.css";

export default function App() {
  const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false
    }
  ];

  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );

  function Header() {
    const style = {};
    return (
      <header className="header">
        <h1 style={style} className="header">
          {" "}
          Fast React Pizza Co.{" "}
        </h1>
      </header>
    );
  }

  function Menu() {
    const pizzas = pizzaData;
    const numPizzas = pizzas.length;

    return (
      <main className="menu">
        <h2>Our menu</h2>

        {numPizzas > 0 ? (
          <>
            <p>
              Authentic Italian cuisine. 6 creative dishes to chos from. All
              from our stone oven, all organic, all delicious.
            </p>
            <ul className="pizzas">
              {/* The foreach function not working because it is not create new object.
                We have to a new object and the map is create one. */}
              {pizzas.map((pizza) => (
                // <Pizza
                //   name={pizza.name}
                //   photoName={pizza.photoName}
                //   price={pizza.price}
                // />
                <Pizza pizzaObj={pizza} key={pizza.name} /> // This working same as but shorter
              ))}
            </ul>
          </>
        ) : (
          <p>We're still working on our menu. Please come back later :)</p>
        )}
      </main>
    );
  }

  function Pizza({ pizzaObj }) {
    // if (props.pizzaObj.soldOut) return null; // if the pizza title is soldout we return and not rendering it
    return (
      <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <div>
          <h3> {pizzaObj.name} </h3>
          <p> {pizzaObj.ingredients} </p>
          <span> {pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price} </span>
        </div>
      </li>
    );
  }

  function Footer() {
    const hour = new Date().getHours();
    const openHour = 10;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
      <footer className="footer">
        {isOpen ? (
          <OrderOpen openHour={openHour} closeHour={closeHour} />
        ) : (
          <OrderClose openHour={openHour} closeHour={closeHour} />
        )}
      </footer>
    );
  }

  function OrderOpen({ closeHour, openHour }) {
    return (
      <div className="order">
        <p>
          We're open from {openHour}:00 to {closeHour}:00. Come visit us or
          order online.
        </p>
        <button className="btn">Order</button>
      </div>
    );
  }

  function OrderClose({ closeHour, openHour }) {
    return (
      <p>
        We're happy to welcome you {openHour}:00 and {closeHour}:00.
      </p>
    );
  }
}
