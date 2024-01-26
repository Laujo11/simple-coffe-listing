import "./card.css";

export default function Card({ product }) {
  return (
    <div className={`card__container ${product.popular ? "popular" : ""}`}>
      <img src={product.image} className="card__img" />
      <div className="card__info">
        <div className="card__info__texts">
          <h5 className="card__info__h5">{product.name}</h5>
          <div className="card__info__rating__container">
            <img src={product.votes ? "Star_fill.svg" : "Star.svg"} />
            <h6 className="card__info__rating">
              {product.votes ? (
                <>
                  {product.rating}
                  <span>({product.votes} votes)</span>
                </>
              ) : (
                <span>No ratings</span>
              )}
            </h6>
          </div>
        </div>
        <div className="card__info__price">
          <h6 className="card__info__price__h6">{product.price}</h6>
          {!product.available && (
            <h6 className="card__info__price__h6 card__info__price__h6--soldOut">
              Sold out
            </h6>
          )}
        </div>
      </div>
    </div>
  );
}
