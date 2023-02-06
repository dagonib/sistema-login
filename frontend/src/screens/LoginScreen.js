import React from 'react';
import Form from 'react-bootstrap/Form';

import bgImage from '../assets/images/img_about.jpg';

const LoginScreen = () => {
  return (
    <section className="login section" id="login">
      {/** Contenedor Formulario */}
      <div className="login__content-form">
        <div>
          <h1>Sistema Login</h1>
          <p>Log in to your account</p>
          <Form className="login__form">
            {/** Input 1 */}
            <Form.Group className="login__group">
              <Form.Label className="login__label">Username</Form.Label>
              <Form.Control
                type="text"
                name="name"
                className="login__input"
                placeholder="Email"
              />
            </Form.Group>

            {/** Input 2 */}
            <Form.Group className="login__group">
              <Form.Label className="login__label">Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="password"
                className="login__input"
                placeholder="Password"
              />
            </Form.Group>

            {/** Input 3 */}
            <Form.Group className="login__group">
              <Form.Label className="login__label">Remember me</Form.Label>
              <Form.Check
                type="checkbox"
                name="remember"
                className="login__checkbox"
              />
            </Form.Group>

            {/** Button */}
            <button className="button">Log In</button>
            <p>
              Don't have any accout?<a href="#">Sign up</a>
            </p>
          </Form>
        </div>
      </div>

      {/** Contenedor Imagen */}
      <div className="login__content-img">
        <img
          className="login__image"
          src={bgImage}
          alt="Imagen de fondo del login"
        />
      </div>
    </section>
  );
};

export default LoginScreen;
