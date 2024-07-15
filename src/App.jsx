import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Main } from "./components/index";

function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onSubmit = (data) => {
    if (
      data.email === "asfan.coder@gmail.com" &&
      data.password === "asfan2005"
    ) {
      setIsAuthenticated(true);
      <Main />;
    } else {
      alert("Invalid email or password");
    }
    reset();
  };

  return (
    <div className="app-container">
      {isAuthenticated ? (
        <Main />
      ) : (
        <div className="form-container">
          <Form onSubmit={handleSubmit(onSubmit)} className="custom-form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="error-text">Email is required</span>
              )}
              <Form.Text className="text-muted mx-1">
                Admin emailni kiriting
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Admin Parolni kiriting"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="error-text">Password kiritilmagan</span>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Men admin man"
                {...register("check", { required: true })}
              />
              {errors.check && (
                <span className="error-text">Checkboxni tanlash majburiy</span>
              )}
            </Form.Group>

            <Button variant="primary" type="submit">
              Saqlash
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
}

export default App;
