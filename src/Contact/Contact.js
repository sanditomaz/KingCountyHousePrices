import styled from "styled-components";
import { SocialIcon } from "react-social-icons";

export default function About() {
  return (
    <OutterContainer>
      <Main>
        <FirstSide>
          <span>
            <h1>Hi there! Let's get in touch...</h1>
          </span>
          <div>
            <nav>
              <SocialIcon network="email" bgColor="#ffffff" fgColor="#f43f1b" />
              <h2>Kairo.silveira.contato@gmail.com</h2>
            </nav>
            <nav>
              <SocialIcon
                url="https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADDLHaoBH0lLV0BIdEkHpXACJpoYKyvJZWc&keywords=kairo%20silveira&origin=RICH_QUERY_SUGGESTION&position=0&searchId=00630234-e261-4ca4-9433-33911c42124b&sid=6r7"
                fgColor="#ffffff"
              />
              <h2>Linkedin</h2>
            </nav>
            <nav>
              <SocialIcon
                url="https://github.com/kairosilveira"
                fgColor="#ffffff"
              />
              <h2>Github</h2>
            </nav>
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
    nav {
      max-width: 500px;
      width: 100%;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      background-color: #ccd1e9;
      word-break: break-word;
      border-radius: 100px;
      padding-left: 10px;
      h2 {
        font-size: 18px;
        font-weight: 400;
        padding-left: 5px;
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
  }

  @media screen and (max-width: 650px) {
    visibility: hidden;
    width: 0%;
    height: 0%;
  }
`;
