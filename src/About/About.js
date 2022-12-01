import styled from "styled-components";

export default function About() {
  return (
    <Main>
      <div>
        <nav>
          <h1>The Project</h1>
          <span>
            <p>
              In this project, the goal is to solve a business problem where a
              fictitious company is looking for real state to invest, with this
              WebApp one can consult the estimated prices. The model achieved a
              R2 of 0.9 using a GradientBoostingRegressor, below we have a
              feature importance chart:
            </p>

            <img src="Image/model.jpeg" alt="" />
          </span>
        </nav>
        <nav>
          <h1>The Dataset</h1>
          <p>
            The project was developed using the House Sales in King County, USA
            Dataset, available -
            <a
              href="https://www.kaggle.com/datasets/harlfoxem/housesalesprediction"
              target="blank"
            >
              here
            </a>
          </p>
        </nav>
        <nav>
          <h1>The Author</h1>
          <p>
            My name is Kairo Silveira. I am a stundent of Data Science and
            MLOps, I have knowledge in python, SQL, Machine Learning and I am
            looking for an opportunity in the market.
          </p>
        </nav>
        <header>
          <h2>
            Front end developed by Sandi Tomaz -
            <a
              href="https://www.linkedin.com/in/sanditomaz/"
              target="_blank"
              alt="linkedin"
            >
              Linkedin
            </a>
          </h2>
        </header>
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

    header {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      width: 100%;

      border-top: 1px solid #c8c3c1;
      gap: 20px;

      h2 {
        font-size: 17px;
        font-weight: 300;
        font-family: "Roboto", sans-serif;
        color: #343140;
        padding-top: 20px;
      }

      a {
        text-decoration: none;
        color: blue;
        font-weight: 400;
      }
    }

    nav {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 15px;
      flex-wrap: wrap;
      word-break: break-word;

      span {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        word-break: break-word;

        img {
          max-width: 800px;
          width: 100%;
          object-fit: cover;
          border-radius: 5px;
          transition: transform 0.25s ease;
          cursor: pointer;
        }
        img:hover {
          -webkit-transform: scale(1.5); /* or some other value */
          transform: scale(1.5);
        }
      }

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
