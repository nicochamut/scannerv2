import styled from "styled-components";
import React, { useState, useRef } from "react";
import ProductDetails from "./ProductDetails";
import BarCodeComponent from "../BarCodeComponent/BarCodeComponent";
import Exceptions from "./Exceptions";

// Importa los datos de productos
import { productos } from "../../Data/Data";

const ProductCard = () => {
  const [inputValue, setInputValue] = useState("");
  const [productExist, setProductExist] = useState(false);
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false); // Estado para controlar si hay un error

  const inputRef = useRef(null);

  const setTimer = () => {
    setTimeout(() => {
      setProductExist(false);
      setError(false);
    }, 8500);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const productFound = productos.find(
      (producto) => producto.cod_scanner === inputValue
    );

    if (productFound) {
      setProduct(productFound);
      setProductExist(true);
      setTimer();
      setError(false); // Reiniciar el estado de error
    } else {
      setError(true); // Configurar el estado de error
      setTimer();
    }

    setInputValue("");
  };

  return (
    <ProductStyled>
      {error ? ( // Mostrar el mensaje de error si hay un error
        <Exceptions />
      ) : productExist ? (
        <ProductDetails product={product} />
      ) : (
        <BarCodeComponent />
      )}

      <form onSubmit={handleFormSubmit} className="input">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Ingresa un valor"
          ref={inputRef}
        />
      </form>
    </ProductStyled>
  );
};

const ProductStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  padding: 2rem;
  .input {
    opacity: 1;
  }
  .error-message {
    color: red;
    margin-bottom: 10px;
  }
`;

export default ProductCard;
