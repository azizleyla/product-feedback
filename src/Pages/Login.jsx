import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { PrimaryButton } from "../components/Button";
import { useForm } from "react-hook-form";
// import { login } from "../redux/reducers/user.actions";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/slices/authSlice";
// const UPDATE_username = "UPDATE_username";
// const UPDATE_PASSWORD = "UPDATE_PASSWORD";

// const loginFormReducer = (state, action) => {
//   if (action.type === UPDATE_username) {
//     return {
//       ...state,
//       username: action.payload,
//     };
//   }
//   if (action.type === UPDATE_PASSWORD) {
//     return {
//       ...state,
//       password: action.payload,
//     };
//   }

//   return {
//     username: "",
//     password: "",
//     password2: "",
//   };
// };

const Login = () => {
  const { register, handleSubmit } = useForm();

  const [isLogin, setIsLogin] = useState(false);
  const history = useHistory();

  const dispatch = useDispatch();

  async function onSubmit(data) {
    const response = await axios({
      method: "post",
      url: `${process.env.REACT_APP_BACKEND_URL}/api/v1/auth/login`,
      data: {
        username: data.username,
        password: data.password,
      },
    });

    if (response.data.status === "success") {
      dispatch(
        loginUser({
          user: response.data.user,
          token: response.data.token,
        }),
      );
      history.push("/");
      // store.onLogin(response.data.token, response.data.user);
    }

    // if (!(data.username || data.password)) {
    //   return;
    // }
  }

  return (
    <FormContainer handleSubmit={handleSubmit(onSubmit)}>
      <h3>Login</h3>
      <div className="form-input">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="Enter Username"
          defaultValue="velvetround"
          {...register("username")}
        />
      </div>
      <div className="form-input">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter password"
          defaultValue="123456789"
          {...register("password")}
        />
      </div>
      {isLogin && (
        <div className="form-input">
          <label htmlFor="password-confirm">Confirm your password</label>
          <input
            id="password-confirm"
            type="password"
            placeholder="Confirm password"
            {...register("password")}
          />
        </div>
      )}
      <PrimaryButton
        // disabled={!(state.username && state.password)}
        w100
        type="submit"
        onClick={handleSubmit(onSubmit)}
      >
        Login
      </PrimaryButton>
      <button onClick={onSubmit} className="register-btn">
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

export const FormContainer = styled.form`
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
