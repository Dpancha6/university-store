import React, { useState, useEffect } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({
  id,
  universityName,
  universityLink,
  title,
  image,
  price,
  rating,
}) {
  const [{ basket }, dispatch] = useStateValue();
  const [buttonText, setButtonText] = useState("Add to Cart");

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    setButtonText("Added to Cart!");
  };

  useEffect(() => {
    if (buttonText === "Added to Cart!") {
      const timer = setTimeout(() => {
        setButtonText("Add to Cart");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [buttonText]);

  return (
    <div className="product">
      <div className="product__info">
        {/* Every Product has 5 components: Product Title, Price, Rating, Image, 'Add to Basket' Button */}
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <form>
          <button
            className="product__university"
            type="submit"
            formAction={universityLink}
            formTarget="_blank"
          >
            {universityName}
          </button>
        </form>
      </div>
      <img src={image} alt="Product_Image" />

      <button onClick={addToBasket}>{buttonText}</button>
    </div>
  );
}

export default Product;
