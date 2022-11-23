import React from "react";
import styled from "styled-components";
import Result from "./Result";

export default function Prediction() {
  const [value, setValue] = React.useState(0);
  return (
    <OutterBox>
      <Main>
        {/* <Result /> */}

        <div>
          <h1>Prediction Interactive Form</h1>
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

        <nav>
          <form>
            <span>
              <div>
                <label for="datemax">Date house was last sold: </label>
                <input type="date" name="datemin" min="1900-01-01" />
                <br />
                <br />

                <label for="quantity">Number of Bedrooms: </label>
                <input
                  type="number"
                  name="quantity"
                  min="0"
                  max="15"
                  step="1"
                />
                <br />
                <br />

                <label for="quantity">Number of bathrooms/bedrooms:</label>
                <input
                  type="number"
                  name="quantity"
                  min="0"
                  max="8"
                  step="0.1"
                />
                <br />
                <br />

                <label for="quantity">Interior living space:</label>
                <input
                  type="number"
                  name="quantity"
                  min="0"
                  max="10000"
                  step="0.1"
                />
                <br />
                <br />

                <label for="quantity">Total floors (levels) in house:</label>
                <input
                  type="number"
                  name="quantity"
                  min="1.0"
                  max="3.5"
                  step="0.1"
                />
                <br />
                <br />

                <label for="quantity">
                  The square footage of the land lots of the nearest 15
                  neighbors :
                </label>
                <input
                  type="number"
                  name="quantity"
                  min="0"
                  max="10000"
                  step="0.1"
                />
                <br />
                <br />

                <label for="quantity">Latitude coordinate:</label>
                <input
                  type="number"
                  name="quantity"
                  min="45.0"
                  max="50.0"
                  step="0.1"
                />
                <br />
                <br />

                <label for="quantity">Longitude coordinate:</label>
                <input
                  type="number"
                  name="quantity"
                  min="-123.0"
                  max="-121.0"
                  step="0.1"
                />
                <br />
                <br />

                <label for="quantity">
                  The square footage of interior housing living space for the
                  nearest 15 neighbors:
                </label>
                <input
                  type="number"
                  name="quantity"
                  min="0"
                  max="10000"
                  step="0.1"
                />
                <br />
                <br />
              </div>

              <div>
                <label for="waterfront">
                  Does the house have a waterfront view?
                </label>
                <select>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>

                <br />
                <br />

                <label for="quantity">Square footage of the lot:</label>
                <input
                  type="number"
                  name="quantity"
                  min="0"
                  max="10000"
                  step="0.1"
                />
                <br />
                <br />

                <label for="quantity">How good the view is: </label>
                <input type="number" name="quantity" min="0" max="4" step="1" />
                <br />
                <br />

                <label for="quantity">How good the condition is:</label>
                <input type="number" name="quantity" min="1" max="5" step="1" />
                <br />
                <br />

                <label for="quantity">
                  Overall grade given to the housing unit:
                </label>
                <input
                  type="number"
                  name="quantity"
                  min="1"
                  max="13"
                  step="1"
                />
                <br />
                <br />

                <label for="quantity">
                  Square footage of house apart from basement :
                </label>
                <input
                  type="number"
                  name="quantity"
                  min="0"
                  max="10000"
                  step="0.1"
                />
                <br />
                <br />

                <label for="quantity">Built Year: </label>
                <input
                  type="number"
                  name="quantity"
                  min="1900"
                  max="2022"
                  step="1"
                />
                <br />
                <br />

                <label for="quantity">
                  Year when house was renovated(Type 0 if house was not
                  renovated):
                </label>
                <input
                  type="number"
                  name="quantity"
                  min="0"
                  max="2022"
                  step="1"
                />
                <br />
                <br />

                <label for="quantity">Square footage of the basement:</label>
                <input
                  type="number"
                  name="quantity"
                  min="0"
                  max="10000"
                  step="0.1"
                />
                <br />
                <br />
              </div>
            </span>

            <button>Submit Data</button>
          </form>
        </nav>
      </Main>
    </OutterBox>
  );
}

const OutterBox = styled.div`
  width: 100%;
  background-color: #e0dedb;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
`;

const Main = styled.main`
  width: 80%;
  background-color: #e0dedb;
  display: flex;
  flex-direction: column;
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
      font-size: 28px;
      font-weight: 700;
      font-family: "Oswald", sans-serif;
      color: #363636;
      line-height: 23px;
      padding: 10px 10px 10px 10px;
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

  nav {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 15px;
    border-radius: 20px;

    form {
      width: 80%;
      padding: 10px 20px;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      background-color: #faf9f7;
      //background-color: pink;
      flex-wrap: wrap;
      gap: 15px;
      box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
      border: 2px solid #d5d3d2;
      opacity: 0.9;
      align-items: center;
      justify-content: center;

      span {
        width: 100%;
        display: flex;
        background-color: #faf9f7;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 10px;

        @media screen and (max-width: 1270px) {
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
      }

      div {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 10px;
        //background-color: pink;
      }

      label {
        max-width: 300px;
        width: 100%;
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        font-weight: 400;
        color: #000000;
        line-height: 23px;
        padding-bottom: 5px;
      }

      input {
        height: 38px;
        max-width: 290px;
        width: 100%;
        border-radius: 4px;
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
        border: 1px solid #d5d3d2;
        background-color: white;
        padding-left: 10px;
      }

      select {
        height: 38px;
        max-width: 300px;
        width: 100%;
        border-radius: 4px;
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
        border: 1px solid #d5d3d2;
        background-color: white;
        padding-left: 10px;
      }

      button {
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
      }
    }
  }
`;
