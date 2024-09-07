import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../../actions/AuthAction"

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #ff00a8, #3f51b5);
`;

const LoginBox = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: 400px;
  padding: 40px;
  text-align: center;
  color: white;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border-radius: 10px;
  border: none;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  border: none;
  background-color: #ff9900;
  color: white;
  font-size: 18px;
  cursor: pointer;
  margin-top: 20px;
`;

const Link = styled.a`
  display: block;
  margin-top: 10px;
  color: white;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(username, password, navigate));
  }


  return (
    <Container>
      <LoginBox>
        <Title>Login</Title>
        <form onSubmit={handleLogin}>
          <div>
            <label>Username:</label>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </LoginBox>
    </Container>
  );
};

export default Login;