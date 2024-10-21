import styled from "styled-components";
import image from "../../images/barcode.png";

const BarCodeComponent = () => {
  return (
    <DivBarcode>
      <div className="divcard">
        <div className="titulo">
          <h2>Escaneá tu producto.</h2>
        </div>

        <div className="barcode">
          <img src={image} alt="imagw" />
        </div>
      </div>
    </DivBarcode>
  );
};

export const DivBarcode = styled.div`
  height: 35rem;
  width: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 8px 23px 24px -10px rgba(0, 0, 0, 0.8);
  color: #ffffff;
  background: #929e91;

  @media screen and (max-width: 1024px) {
    width: 45rem;
    height: 25rem;
    margin: 0px;
    padding: 0px;
  }

  .divcard {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 30rem;
  }
  .titulo {
    background: #2b2e2b;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 2.57rem;
    @media screen and (max-width: 1024px) {
      margin: 0 auto;
      font-size: 2rem;
    }
  }
  .barcode {
    height: 17rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      margin-top: 2rem;
      width: 45rem;
      height: 32rem;
    }
    @media screen and (max-width: 1024px) {
      width: 100%;
      margin: 0 auto;
      height: 40%;

      img {
        padding: 0;
        margin: 0;
        width: 40rem;
      }
    }
  }
`;
export default BarCodeComponent;
