import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [item, setItem] = React.useState([]);
  const [cartItem, setCartItem] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://615d910b12571a00172076df.mockapi.io/item")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItem(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItem((prev) => [...prev, obj]);
  };

  return (
    <div className="wrapper clear">
      {cartOpened ? (
        <Drawer item={cartItem} onClose={() => setCartOpened(false)} />
      ) : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {item.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={() => console.log("")}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
