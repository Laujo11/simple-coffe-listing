import Card from "../components/Card";
import { useEffect, useState } from "react";
import "./home.css";
export default function Home() {
  const [active, setActive] = useState("all");
  const [products, setProducts] = useState();
  const [productsFilter, setProductsFilter] = useState();

  const getProducts = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    );
    const resJson = await response.json();
    resJson && setProducts(resJson);
  };

  useEffect(() => {
    try {
      getProducts();
    } catch (err) {
      console.log("Error:" + err);
    }
  }, []);

  useEffect(() => {
    products && setProductsFilter(products);
  }, [products]);

  useEffect(() => {
    if (products) {
      active === "all"
        ? setProductsFilter(products)
        : setProductsFilter(products.filter((p) => p.available === true));
    }
  }, [active]);

  const changeActive = (param) => {
    setActive(param);
  };

  return (
    <div className="home__container">
      <figure className="home__background__figure">
        <img src="bg-cafe.jpg" alt="fondo" className="home__bgImg" />
      </figure>
      <div className="home__list__container">
        <div className="home__list__texts">
          <h1 className="home__list__title">Our Collection</h1>
          <p className="home__list__p">
            Introducing our Coffe Collection, a selection of unique coffes from
            different roas types and origins, expertly roasted in small batches
            and shipped fresh weekly.
          </p>
        </div>
        <div className="home__list__buttons">
          <button
            className={`home__list__button ${
              active === "all" ? "home__list__button--active" : ""
            }`}
            onClick={() => {
              changeActive("all");
            }}
          >
            All Products
          </button>
          <button
            className={`home__list__button ${
              active === "available" ? "home__list__button--active" : ""
            }`}
            onClick={() => {
              changeActive("available");
            }}
          >
            Available Now
          </button>
        </div>

        <div className="home__list__cards">
          {productsFilter &&
            productsFilter.map((product) => (
              <Card product={product} key={product.id}></Card>
            ))}
        </div>
      </div>
    </div>
  );
}
