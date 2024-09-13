import React, { useState, useEffect, useRef } from "react";
import ProductDetails from "./ProductDetails";
import BarCodeComponent from "../BarCodeComponent/BarCodeComponent";
import Exceptions from "./Exceptions";

import styled from "styled-components";

const ProductCard = () => {
  const [productos, setProductos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [productExist, setProductExist] = useState(false);
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("/productos.json"); // Ruta al archivo JSON en la carpeta public
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      }
    };

    fetchProductos(); // Cargar productos inicialmente

    const interval = setInterval(fetchProductos, 120000); // Actualizar cada 2 minutos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
inputRef.current.focus()
    
  }, []);

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
      (producto) => producto.COD_SCANER === parseInt(inputValue)
    );

    if (productFound) {
      setProduct(productFound);
      setProductExist(true);
      setTimer();
      setError(false);
    } else {
      setError(true);
      setTimer();
    }

    setInputValue("");
  };

  return (
    <ProductStyled>
      {error ? (
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
