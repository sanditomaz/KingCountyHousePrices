import styled from "styled-components";

export default function About() {
  return (
    <Main>
      <div>
        <nav>
          <h1>The Project</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </nav>
        <nav>
          <h1>The Dataset</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </nav>
        <nav>
          <h1>The Author</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </nav>
      </div>
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  background-color: #e0dedb;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  div {
    width: 80%;
    background-color: #e0dedb;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 45px;
    padding: 30px 50px;
    border-radius: 6px;

    nav {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 15px;

      h1 {
        font-size: 22px;
        font-weight: 700;
        color: #363636;
        font-family: "Raleway", sans-serif;
      }

      p {
        font-family: "Roboto", sans-serif;
        font-size: 17px;
        font-weight: 300;
        color: #343140;
        line-height: 23px;
      }
    }
  }
`;
