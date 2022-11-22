import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Top() {
  return (
    <Main>
      <div>
        <Link to={`/`}>
          <h1>King County House Prices</h1>
        </Link>
      </div>
      <div>
        <Link to={`/`}>
          <h2>PREDICTIONS</h2>
        </Link>
        <Link to={`/about`}>
          <h2>ABOUT</h2>
        </Link>
        <Link to={`/contact`}>
          <h2>CONTACT</h2>
        </Link>
      </div>
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  height: 72px;
  background: #2d2d2d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  div {
    padding: 0 25px 0 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  h1 {
    font-size: 25px;
    font-weight: 600;
    color: #fefefe;
    font-family: "Oswald", sans-serif;

    @media screen and (max-width: 335px) {
      font-size: 20px;
    }
  }

  h2 {
    font-size: 17px;
    font-weight: 500;
    color: #fefefe;
    font-family: "Roboto", sans-serif;
    padding: 0 5px 0 5px;

    @media screen and (max-width: 335px) {
      font-size: 12px;
    }
  }
`;
