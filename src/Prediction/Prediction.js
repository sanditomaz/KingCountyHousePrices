import { ThreeDots } from "react-loader-spinner";
import React from "react";
import styled from "styled-components";
import Result from "./Result";
import { useState } from "react";
import axios from "axios";

export default function Prediction({ goMain, setMain }) {
  const [form, setForm] = useState({});
  const [data, setData] = useState();
  const [disable, setDisable] = useState(false);
  let toSend;

  const handleSubmit = (e) => {
    setDisable(true);
    e.preventDefault();

    const promise = axios.post(
      "https://house-pricing-regression.onrender.com/predict",
      toSend
    );
    promise.then((res) => {
      setData(res.data);
      setMain(false);
      setDisable(false);
    });
    promise.catch((err) => {
      setDisable(false);
      console.log(err);
    });
  };

  const handleForm = (e) => {
    if (e.target.name === "date") {
      setForm({ ...form, [e.target.name]: e.target.value });
    } else {
      setForm({ ...form, [e.target.name]: Number(e.target.value) });
    }
  };

  toSend = { data: [form] };

  return (
    <OutterBox>
      <Main>
        {goMain ? (
          <>
            <div className="intro">
              <h1>House Information Form</h1>
              <p>
                Fill the form with the information of the house you wish to
                estimate the price using the GradientBoosting model with $65000
                of MAE and 0.9 of R2.
              </p>
            </div>

            <nav>
              <form onSubmit={handleSubmit}>
                <span>
                  <div>
                    <label htmlFor="date">Date house was last sold: </label>
                    <input
                      required
                      onChange={handleForm}
                      type="date"
                      name="date"
                      min="1900-01-01"
                    />
                    <br />
                    <br />

                    <label htmlFor="bedrooms">Number of Bedrooms: </label>
                    <input
                      type="number"
                      name="bedrooms"
                      min="0"
                      max="15"
                      step="1"
                      placeholder="Type value from 0 to 15"
                      required
                      onChange={handleForm}
                    />
                    <br />
                    <br />

                    <label htmlFor="bathrooms">
                      Number of bathrooms per bedrooms:
                    </label>
                    <input
                      type="number"
                      name="bathrooms"
                      min="0"
                      max="8"
                      step="0.1"
                      placeholder="Type value from 0 to 8"
                      required
                      onChange={handleForm}
                    />
                    <br />
                    <br />

                    <label htmlFor="sqft_living">
                      Square footage of the interior living space:
                    </label>
                    <input
                      type="number"
                      name="sqft_living"
                      min="0"
                      max="10000"
                      step="0.1"
                      placeholder="Type value from 0 to 10k"
                      required
                      onChange={handleForm}
                    />
                    <br />
                    <br />

                    <label htmlFor="floors">
                      Total floors (levels) in house:
                    </label>
                    <input
                      type="number"
                      name="floors"
                      min="1.0"
                      max="3.5"
                      step="0.1"
                      placeholder="Type value from 1.0 to 3.5"
                      required
                      onChange={handleForm}
                    />
                    <br />
                    <br />

                    <label htmlFor="sqft_lot15">
                      The square footage of the land lots of the nearest 15
                      neighbors :
                    </label>
                    <input
                      type="number"
                      name="sqft_lot15"
                      min="0"
                      max="10000"
                      step="0.1"
                      placeholder="Type value from 0 to 10k"
                      required
                      onChange={handleForm}
                    />
                    <br />
                    <br />

                    <label htmlFor="lat">Latitude coordinate:</label>
                    <input
                      type="number"
                      name="lat"
                      min="45.0"
                      max="50.0"
                      step="0.1"
                      placeholder="Type value from 45.0 to 50.0"
                      required
                      onChange={handleForm}
                    />
                    <br />
                    <br />

                    <label htmlFor="long">Longitude coordinate:</label>
                    <input
                      type="number"
                      name="long"
                      min="-123.0"
                      max="-121.0"
                      step="0.1"
                      placeholder="Type value from -123.0 to -121.0"
                      required
                      onChange={handleForm}
                    />
                    <br />
                    <br />

                    <label htmlFor="sqft_living15">
                      The square footage of interior housing living space for
                      the nearest 15 neighbors:
                    </label>
                    <input
                      type="number"
                      name="sqft_living15"
                      min="0"
                      max="10000"
                      step="0.1"
                      placeholder="Type value from 0 to 10k"
                      required
                      onChange={handleForm}
                    />
                    <br />
                    <br />
                  </div>

                  <div>
                    <label htmlFor="waterfront">
                      Does the house have a waterfront view?
                    </label>
                    <select name="waterfront" required onChange={handleForm}>
                      <option value=" "> </option>
                      <option value="1">yes</option>
                      <option value="0">no</option>
                    </select>

                    <br />
                    <br />

                    <label htmlFor="sqft_lot">Square footage of the lot:</label>
                    <input
                      type="number"
                      name="sqft_lot"
                      min="0"
                      max="10000"
                      step="0.1"
                      placeholder="Type value from 0 to 10k"
                      required
                      onChange={handleForm}
                    />
                    <br />
                    <br />

                    <label htmlFor="view">How good is the view ? </label>
                    <input
                      type="number"
                      name="view"
                      min="0"
                      max="4"
                      step="1"
                      placeholder="Type value from 0 to 4"
                      required
                      onChange={handleForm}
                    />
                    <br />
                    <br />

                    <label htmlFor="condition">
                      How good is the condition of the house ?
                    </label>
                    <input
                      type="number"
                      name="condition"
                      min="1"
                      max="5"
                      step="1"
                      placeholder="Type value from 1 to 5"
                      required
                      onChange={handleForm}
                    />
                    <br />
                    <br />

                    <label htmlFor="grade">
                      What is the overall grade given to the housing unit ?
                    </label>
                    <input
                      type="number"
                      name="grade"
                      min="1"
                      max="13"
                      step="1"
                      placeholder="Type value from 1 to 13"
                      required
                      onChange={handleForm}
                    />
                    <br />
                    <br />

                    <label htmlFor="sqft_above">
                      Square footage of house apart from basement :
                    </label>
                    <input
                      type="number"
                      name="sqft_above"
                      min="0"
                      max="10000"
                      step="0.1"
                      placeholder="Type value from 0 to 10k"
                      required
                      onChange={handleForm}
                    />
                    <br />
                    <br />

                    <label htmlFor="yr_built">Built Year: </label>
                    <input
                      type="number"
                      name="yr_built"
                      min="1900"
                      max="2022"
                      step="1"
                      placeholder="Year house was built"
                      required
                      onChange={handleForm}
                    />
                    <br />
                    <br />

                    <label htmlFor="yr_renovated">
                      Year when house was renovated(Type 0 if house was not
                      renovated):
                    </label>
                    <input
                      type="number"
                      name="yr_renovated"
                      min="0"
                      max="2022"
                      step="1"
                      placeholder="Year house has been renovated"
                      required
                      onChange={handleForm}
                    />
                    <br />
                    <br />

                    <label htmlFor="sqft_basement">
                      Square footage of the basement:
                    </label>
                    <input
                      type="number"
                      name="sqft_basement"
                      min="0"
                      max="10000"
                      step="0.1"
                      placeholder="Type value from 0 to 10k"
                      required
                      onChange={handleForm}
                    />
                    <br />
                    <br />
                  </div>
                </span>

                <button>
                  {!disable ? (
                    "Submit Data"
                  ) : (
                    <ThreeDots
                      height="40"
                      width="60"
                      radius="9"
                      color="#FFFFFF"
                      ariaLabel="three-dots-loading"
                      wrapperStyle
                      wrapperClass
                    />
                  )}
                </button>
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

  .intro {
    max-width: 600px;
    width: 100%;
  }

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
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
