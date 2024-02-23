import logo from "./logo.svg";
import "./App.css";
import "./index.css";

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
  return (
    <div>
      <header>
        <h2 className="header">Fast React Pizza Co.</h2>
      </header>
    </div>
  );
}

function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza
        name="Focaccia"
        ingredients="Bread with ithalian oil and rosemery"
        price="6"
        photoName="pizzas/focaccia.jpg"
        soldOut="false"
      />
    </div>
  );
}

function Pizza(props) {
  return (
    <div className="container">
      <img src={props.photoName} alt={props.name} />
      <div className="sideBySide">
        <h2>{props.name}</h2>
        <p>{props.ingredients}</p>
      </div>
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
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We're currently open.
    </footer>
  );
}

export default App;
