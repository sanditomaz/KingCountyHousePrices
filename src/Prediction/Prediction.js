import React from "react";
import styled from "styled-components";
import Result from "./Result";
import { useState } from "react";
import axios from "axios";

export default function Prediction({ goMain, setMain }) {
  const [form, setForm] = useState({});
  const [data, setData] = useState();
  let toSend;

  const handleSubmit = (e) => {
    e.preventDefault();

    const promise = axios.post(
      "https://house-regression.herokuapp.com/predict",
      toSend
    );
    promise.then((res) => {
      setData(res.data);
      setMain(false);
    });
    promise.catch((err) => console.log(err));
  };

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    console.log(form);
  };
  toSend = { data: [form] };
  console.log(form);
  console.log(toSend);

  console.log(data);
  return (
    <OutterBox>
      <Main>
        {goMain ? (
          <>
            <div>
              <h1>Prediction Interactive Form</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            <nav>
              <form onSubmit={handleSubmit}>
                <span>
                  <div>
                    <label for="date">Date house was last sold: </label>
                    <input
                      required
                      onChange={handleForm}
                      type="date"
                      name="date"
                      min="1900-01-01"
                    />
                    <br />
                    <br />

                    <label for="bedrooms">Number of Bedrooms: </label>
                    <input
                      type="number"
                      name="bedrooms"
                      min="0"
                      max="15"
                      step="1"
                      required
                      onChange={handleForm}
                    />
                    <br />
                    <br />

                    <label for="bathrooms">Number of bathrooms/bedrooms:</label>
                    <input
                      type="number"
                      name="bathrooms"
                      min="0"
                      max="8"
                      step="0.1"
                      required
                      onChange={handleForm}
                    />
                    <br />
                    <br />

                    <label for="sqft_living">Interior living space:</label>
                    <input
                      type="number"
                      name="sqft_living"
                      min="0"
                      max="10000"
                      step="0.1"
                      required
                      onChange={handleForm}
                    />
                    <br />
                    <br />

                    <label for="floors">Total floors (levels) in house:</label>
                    <input
                      type="number"
                      name="floors"
                      min="1.0"
                      max="3.5"
                      step="0.1"
                      required
                      onChange={handleForm}
                    />
                    <br />
                    <br />

                    <label for="sqft_lot">
                      The square footage of the land lots of the nearest 15
                      neighbors :
                    </label>
                    <input
                      type="number"
                      name="sqft_lot"
                      min="0"
                      max="10000"
                      step="0.1"
                      required
                      onChange={handleForm}
                    />
                    <br />
                    <br />

                    <label for="lat">Latitude coordinate:</label>
                    <input
                      type="number"
                      name="lat"
                      min="45.0"
                      max="50.0"
                      step="0.1"
                      required
                      onChange={handleForm}
                    />
                    <br />
                    <br />

                    <label for="long">Longitude coordinate:</label>
                    <input
                      type="number"
                      name="long"
                      min="-123.0"
                      max="-121.0"
                      step="0.1"
                      required
                      onChange={handleForm}
                    />
                    <br />
                    <br />

                    <label for="sqft_living15">
                      The square footage of interior housing living space for
                      the nearest 15 neighbors:
                    </label>
                    <input
                      type="number"
                      name="sqft_living15"
                      min="0"
                      max="10000"
                      step="0.1"
                      required
                      onChange={handleForm}
                    />
                    <br />
                    <br />
                  </div>

                  <div>
                    <label for="waterfront">
                      Does the house have a waterfront view?
                    </label>
                    <select name="waterfront" required onChange={handleForm}>
                      <option value="1">yes</option>
                      <option value="0">no</option>
                    </select>

                    <br />
                    <br />

                    <label for="sqft_lot">Square footage of the lot:</label>
                    <input
                      type="number"
                      name="sqft_lot"
                      min="0"
                      max="10000"
                      step="0.1"
                      required
                      onChange={handleForm}
                    />
                    <br />
                    <br />

                    <label for="view">How good the view is: </label>
                    <input
                      type="number"
                      name="view"
                      min="0"
                      max="4"
                      step="1"
                      required
                      onChange={handleForm}
                    />
                    <br />
                    <br />

                    <label for="condition">How good the condition is:</label>
                    <input
                      type="number"
                      name="condition"
                      min="1"
                      max="5"
                      step="1"
                      required
                      onChange={handleForm}
                    />
                    <br />
                    <br />

                    <label for="grade">
                      Overall grade given to the housing unit:
                    </label>
                    <input
                      type="number"
                      name="grade"
                      min="1"
                      max="13"
                      step="1"
                      required
                      onChange={handleForm}
                    />
                    <br />
                    <br />

                    <label for="sqft_basement">
                      Square footage of house apart from basement :
                    </label>
                    <input
                      type="number"
                      name="sqft_basement"
                      min="0"
                      max="10000"
                      step="0.1"
                      required
                      onChange={handleForm}
                    />
                    <br />
                    <br />

                    <label for="yr_built">Built Year: </label>
                    <input
                      type="number"
                      name="yr_built"
                      min="1900"
                      max="2022"
                      step="1"
                      required
                      onChange={handleForm}
                    />
                    <br />
                    <br />

                    <label for="yr_renovated">
                      Year when house was renovated(Type 0 if house was not
                      renovated):
                    </label>
                    <input
                      type="number"
                      name="yr_renovated"
                      min="0"
                      max="2022"
                      step="1"
                      required
                      onChange={handleForm}
                    />
                    <br />
                    <br />

                    <label for="sqft_basement">
                      Square footage of the basement:
                    </label>
                    <input
                      type="number"
                      name="sqft_basement"
                      min="0"
                      max="10000"
                      step="0.1"
                      required
                      onChange={handleForm}
                    />
                    <br />
                    <br />
                  </div>
                </span>

                <button>Submit Data</button>
              </form>
            </nav>
          </>
        ) : (
          <Result goMain={goMain} setMain={setMain} data={data} />
        )}
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
  padding-bottom: 80px;

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
      line-height: 28px;
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
        margin-bottom: 5px;
      }
    }
  }
`;
