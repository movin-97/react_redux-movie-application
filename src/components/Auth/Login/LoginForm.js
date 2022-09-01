import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from 'react-redux';
// import { addUser } from "../../../features/Movies/MovieSlice";


const myValidateFormYup = yup.object().shape({
  email:yup.string().email("Email must be a valid email").required("Email is a required field"),
  password: yup.string()
    .required("Password is not Match")
    .min(8)
    // .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
});  

const LoginForm = () => {
  // const [userName, setUserName] = useState("");
  // const [userPassword, setUserPassword] = useState("");

  // const disapatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    // disapatch(addUser({ name: userName, password: userPassword }));
    localStorage.setItem("auth", true);
    navigate("/home", { replace: true });
     console.log(event);
  };
  return (
    <div className="row">
      <div className="col-3"></div>
      <div className="col-6 mt-5 mb-5 p-5 rounded bg-success">
        <h1 className="text-center">LOGIN</h1>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={myValidateFormYup}
          onSubmit={handleSubmit}
        >
          {(formikProps) => {
            const {errors, touched,isValid } = formikProps;
            return (
              <Form>
                <div className="mt-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email..."
                    className={`${
                      errors.email && touched.email
                        ? "form-control  border-danger "
                        : ""
                    }form-control`}
                  />
                  <ErrorMessage
                    component={"div"}
                    name="email"
                    className="text-danger"
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter Your Password..."
                    className={`${
                      errors.password && touched.password
                        ? "form-control  border-danger "
                        : ""
                    }form-control`}
                  />
                  <ErrorMessage
                    component={"div"}
                    name="password"
                    className="text-danger"
                  />
                </div>
                <div className="mt-3 d-flex justify-content-between">
                  <button type="submit" className="btn btn-info mr-5" disabled={!isValid}>
                    Submit
                  </button>
                  <button type="button" onClick={()=>navigate("/register")} className="btn btn-danger">
                    Register
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
      <div className="col-3"></div>
    </div>
  );
};

export default LoginForm;
