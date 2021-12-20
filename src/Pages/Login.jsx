import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useMutation } from "react-query";
import axios from "axios";

import { loginUser } from "../redux/slices/authSlice";
import { PrimaryButton } from "../components/Button";

const Login = () => {
  const dispatch = useDispatch();
  const { mutate, isLoading } = useMutation(
    (data) => {
      return axios({
        method: "post",
        url: `${process.env.REACT_APP_BACKEND_URL}/api/v1/auth/login`,
        data: {
          username: data.username,
          password: data.password,
        },
      });
    },
    {
      onSuccess: (data) => {
        console.log("onSuccess", data);
        if (data.data.status === "success") {
          dispatch(
            loginUser({
              user: data.data.user,
              token: data.data.token,
            })
          );
        }
      },
    }
  );
  const { register, handleSubmit } = useForm();
  const [isLogin] = useState(false);

  function onSubmit(data) {
    mutate(data);
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
        disabled={isLoading}
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
