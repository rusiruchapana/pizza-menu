import logo from "./logo.svg";
import "./App.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with ithalian oil and rosemery",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },

  {
    name: "Funghi",
    ingredients: "Tomato and Mozarella",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },

  {
    name: "Margherita",
    ingredients: "Tomato, Mozaralla, spinach and ricotta",
    price: 2,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },

  {
    name: "Porsciutto",
    ingredients: "Tomato, Mozaralla",
    price: 7,
    photoName: "pizzas/porsciutto.jpg",
    soldOut: false,
  },

  {
    name: "Salamino",
    ingredients: "spinach and ricotta",
    price: 4,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },

  {
    name: "Spinaci",
    ingredients: "Bread with ithalian oil and rosemery, spinach and ricotta",
    price: 8,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h2>Fast React Pizza Co.</h2>;
}

function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  const Hour = new Date().getHours;
  const OpenHour = 12;
  const CloseHour = 22;
  const isOpen = Hour >= OpenHour && Hour <= CloseHour;
  console.log(isOpen);

  return (
    <footer>{new Date().toLocaleTimeString()}. We're currently open.</footer>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/focaccia.jpg" alt="Pizza Focaccia." />
      <h2>Focaccia</h2>
      <p>Bread with ithalian oil and rosemery</p>,
    </div>
  );
}

export default App;
