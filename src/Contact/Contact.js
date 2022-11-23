import styled from "styled-components";
import { SocialIcon } from "react-social-icons";
import { useState } from "react";

export default function About() {
  const [isCopied, setIsCopied] = useState(false);

  async function copyEmail(email) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(email);
    }
  }

  function handleClick() {
    const email = "Kairo.silveira.contato@gmail.com";

    copyEmail(email)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <OutterContainer>
      <Main>
        <FirstSide>
          <span>
            <h1>Hi there! Let's get in touch...</h1>
          </span>
          <div>
            <nav onClick={() => handleClick()}>
              <SocialIcon network="email" bgColor="#ffffff" fgColor="#f43f1b" />
              <h2>
                {isCopied ? "Copied !! 😉" : "Kairo.silveira.contato@gmail.com"}
              </h2>
            </nav>
            <a
              href="https://www.linkedin.com/in/kairosilveira/"
              target="_blank"
            >
              <nav>
                <SocialIcon
                  url="https://www.linkedin.com/in/kairosilveira/"
                  fgColor="#ffffff"
                  target="_blank"
                />

                <h2>Linkedin</h2>
              </nav>
            </a>
            <a href="https://github.com/kairosilveira" target="_blank">
              <nav>
                <SocialIcon
                  url="https://github.com/kairosilveira"
                  fgColor="#ffffff"
                  target="_blank"
                />
                <h2>Github</h2>
              </nav>
            </a>
          </div>
        </FirstSide>

        <SecondSide>
          <span>
            <img
              src="https://letzmarket.com/wp-content/uploads/2020/04/about-gif.gif"
              alt="network"
            />
          </span>
        </SecondSide>
      </Main>
    </OutterContainer>
  );
}

const OutterContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 8px;
  background-color: #e0dedb;
`;

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const FirstSide = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 70%;
  flex-wrap: wrap;
  word-wrap: wrap;
  word-break: break-word;
  gap: 15px;
  padding: 10px;

  span {
    h1 {
      font-size: 28px;
      font-weight: 700;
      font-family: "Oswald", sans-serif;
      color: #363636;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 500px;
    width: 100%;
    gap: 20px;

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      max-width: 500px;
      width: 100%;
      gap: 20px;
    }

    nav {
      max-width: 500px;
      width: 100%;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      background-color: #ffffff;
      border: 2px solid #d5d3d2;
      box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
      word-break: break-word;
      border-radius: 100px;
      padding-left: 15px;
      cursor: pointer;

      h2 {
        font-size: 18px;
        font-weight: 400;
        padding-left: 10px;
        font-family: "Roboto", sans-serif;
        color: #343140;

        @media screen and (max-width: 350px) {
          font-size: 13px;
        }
      }
    }
  }
`;

const SecondSide = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
  height: 70%;
  word-wrap: wrap;
  word-break: break-word;

  span {
    padding: 25px;

    @media screen and (max-width: 650px) {
      padding: 0;
    }
  }
  img {
    width: 100%;

    @media screen and (min-width: 1800px) {
      width: 600px;
    }
  }

  @media screen and (max-width: 650px) {
    visibility: hidden;
    width: 0%;
    height: 0%;
  }
`;
