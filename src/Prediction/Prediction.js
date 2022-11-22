import styled from "styled-components";

export default function Prediction() {
  return (
    <OutterBox>
      <Main>
        <div>
          <h1>Prediction Interactive Tool</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </Main>
    </OutterBox>
  );
}

const OutterBox = styled.div`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
`;

const Main = styled.main`
  width: 80%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    word-wrap: wrap;
    word-break: break-word;
    margin-top: 15px;
    h1 {
      font-size: 22px;
      font-weight: 700;
      font-family: "Roboto", sans-serif;
      color: #363636;
      line-height: 23px;
      padding: 10px 10px 0 10px;
    }
    p {
      font-size: 17px;
      font-weight: 300;
      font-family: "Roboto", sans-serif;
      color: #343140;
      line-height: 23px;
      padding: 10px;
    }
  }
`;
