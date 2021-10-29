import axios from "axios";
import React, { useContext, useReducer, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { PrimaryButton } from "../components/Button";
import AuthContext from "../contexts/authContext";

const UPDATE_username = "UPDATE_username";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";

const loginFormReducer = (state, action) => {
  if (action.type === UPDATE_username) {
    return {
      ...state,
      username: action.payload,
    };
  }
  if (action.type === UPDATE_PASSWORD) {
    return {
      ...state,
      password: action.payload,
    };
  }

  return {
    username: "",
    password: "",
    password2: "",
  };
};

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const history = useHistory();
  const store = useContext(AuthContext);

  const [state, dispatch] = useReducer(loginFormReducer, {
    username: "velvetround",
    password: "123456789",
  });

  const dispatchusername = (e) => {
    dispatch({ type: UPDATE_username, payload: e.target.value });
  };

  const dispatchPassword = (e) => {
    dispatch({
      type: UPDATE_PASSWORD,
      payload: e.target.value,
    });
  };

  async function submitForm() {
    const response = await axios({
      method: "post",
      url: "https://product-feedback-app-api.herokuapp.com/api/v1/auth/login",
      data: {
        username: state.username,
        password: state.password,
      },
    });
    if (response.data.status === "success") {
      history.push("/");
      store.onLogin(response.data.token, response.data.user);
    }

    if (!(state.username || state.password)) {
      return;
    }
  }

  return (
    <FormContainer>
      <h3>Login</h3>
      <div className="form-input">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="Enter Username"
          value={state.username}
          onChange={dispatchusername}
        />
      </div>
      <div className="form-input">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter password"
          value={state.password}
          onChange={dispatchPassword}
        />
      </div>
      {isLogin && (
        <div className="form-input">
          <label htmlFor="password-confirm">Confirm your password</label>
          <input
            id="password-confirm"
            type="password"
            placeholder="Confirm password"
            value={state.password}
            onChange={dispatchPassword}
          />
        </div>
      )}
      <PrimaryButton
        disabled={!(state.username && state.password)}
        w100
        type="submit"
        onClick={submitForm}
      >
        Login
      </PrimaryButton>
      <button onClick={submitForm} className="register-btn">
        {!isLogin ? (
          <p>
            Don't have acoount? <span>Register</span>
          </p>
        ) : (
          <p>Already have account? Login</p>
        )}
      </button>
    </FormContainer>
  );
};

export default Login;

export const FormContainer = styled.div`
  max-width: 540px;
  margin: 0 auto;
  margin-top: 10rem;
  padding: 5.2rem 4rem;
  background: #ffffff;
  border-radius: 10px;
  h3 {
    font-weight: bold;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: -0.333333px;
    color: #3a4374;
    margin-bottom: 5rem;
  }
  input {
    width: 100%;
    height: 100%;
    padding: 1.3rem 2.4rem;
    background: #f7f8fd;
    border-radius: 5px;
    border: none;
    outline: none;
    margin-bottom: 2rem;
  }
  label {
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.194444px;
    margin-bottom: 0.9rem;
    color: #3a4374;
    display: inline-block;
  }
  .register-btn {
    background-color: transparent;
    border: none;
    text-decoration: underline;
    text-align: center;
    margin-top: 10px;
    cursor: pointer;
    span {
      color: #ad1fea;
      font-weight: bold;
    }
  }
`;
