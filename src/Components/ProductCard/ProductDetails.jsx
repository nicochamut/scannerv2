import styled from "styled-components";
import { DivBarcode } from "../BarCodeComponent/BarCodeComponent";

const ProductDetails = ({ product }) => {
  console.log(product);
  const { descriart, precio, cod_scanner } = product;
  return (
    <StyledDetails>
      <div className="codart">
        <h3>Cod artículo:</h3>
        <h2>{cod_scanner}</h2>
      </div>
      <div className="nombre">
        <h1>{descriart}</h1>
      </div>
      <div className="precio">
        <h1>${precio}</h1>
      </div>
    </StyledDetails>
  );
};

const StyledDetails = styled(DivBarcode)`
  font-size: 1rem;

  h1,
  h2,
  h3,
  h4 {
    padding-left: 4rem;
  }
  div {
    width: 100%;
  }
  .codart {
    width: 100%;
    height: 8rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: #2b2b2b;

    h3 {
      font-size: 1.2rem;
      margin-bottom: -15px;
    }
  }

  .nombre {
    background: linear-gradient(to right, #6d857b, #2b2e2b);
    // background: #2b2e2b; a4c6b8
    color: #ffffff;
    height: 5rem;
    display: flex;
    align-items: center;
  }

  .precio {
    font-size: 2rem;
    background: linear-gradient(to right, #41473b, #000000);
  }
`;

export default ProductDetails;
