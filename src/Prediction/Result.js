import styled from "styled-components";
import SimpleMap from "../Styles/Map";

export default function Result({ goMain, setMain, data }) {
  const result = data.price[0];
  const price = result.toFixed(2);

  function handleClick() {
    setMain(true);
  }

  return (
    <>
      <Main>
        <h1>The estimated house price is the following:</h1>
        <article>${price}</article>

        <SimpleMap />

        <h6 onClick={handleClick}>Predict another price</h6>
      </Main>
    </>
  );
}

const Main = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  word-wrap: wrap;
  word-break: break-word;
  margin-top: 15px;
  gap: 30px;

  h1 {
    font-size: 24px;
    font-weight: 700;
    font-family: "Oswald", sans-serif;
    color: #363636;
    line-height: 23px;
    padding: 20px 10px 10px 10px;
  }
  article {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: yellow;
    width: 80%;
    height: 45px;
    font-size: 35px;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
    color: #343140;
    background-color: #faf9f7;
    line-height: 23px;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    border: 2px solid #d5d3d2;
    flex-wrap: wrap;
    word-break: break-word;

    @media screen and (max-width: 315px) {
      font-size: 28px;
    }
  }

  h6 {
    max-width: 327px;
    width: 100%;
    height: 46px;
    border: none;
    outline: 5px solid #2d2d2d;
    border-radius: 5px;
    background-color: #2d2d2d;
    font-size: 20px;
    font-weight: 700;
    color: #ffffff;
    cursor: pointer;
    margin-bottom: 5px;
    text-align: center;
    padding-top: 25px;
  }
`;
