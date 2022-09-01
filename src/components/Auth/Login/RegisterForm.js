import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import React from "react";
import { useNavigate } from "react-router-dom";

const myValidateForm = yup.object().shape({
  name: yup.string().min(4).max(16).required("User Name is Required"),
  password: yup.string()
    .required("Password is Required")
    .min(4, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null],"Passwords Must Match")
    .required("Confirm Password is Required"),
});  

const RegisterForm = () => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log(`User Data\nUser Name :${e.name}\nPassword: ${e.password}`);
    localStorage.setItem("Token", "ABCD");
    navigate("/home");
    // navigate("/users", { replace: true });
  };
  return (
    <div className="row">
      <div className="col-3"></div>
      <div className="col-6 mt-5 mb-5 p-5 rounded bg-success">
        <h1 className="text-center">REGISTER FORM</h1>
        <Formik
          initialValues={{
            name: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={myValidateForm}
          onSubmit={handleSubmit}
        >
          {(formikProps) => {
            const {errors, touched } = formikProps;
            return (
              <Form>
                <div className="mt-3">
                  <label htmlFor="username" className="form-label">
                    User Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    id="username"
                    placeholder="User Name"
                    className={`${
                      errors.name && touched.name
                        ? "form-control  border-danger "
                        : ""
                    }form-control`}
                  />
                  <ErrorMessage
                    component={"div"}
                    name="name"
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
                    placeholder="Password"
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
                <div className="mt-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    className={`${
                      errors.confirmPassword && touched.confirmPassword
                        ? "form-control  border-danger "
                        : ""
                    }form-control`}
                  />
                  <ErrorMessage
                    component={"div"}
                    name="confirmPassword"
                    className="text-danger"
                  />
                </div>
                <div className="mt-3 d-flex justify-content-between">
                  <button type="submit" className="btn btn-info mr-5">
                    Submit
                  </button>
                  <button type="reset" className="btn btn-danger">
                    Clear
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

export default RegisterForm;
