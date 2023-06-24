import "./App.css";
import { useFormik } from "formik";
import signupSchemaValidation from "./Validation/signupSchemaValidation";
import { useAlert } from "react-alert";
const initialValues = {
  name: "",
  email: "",
  password: "",
};
function App() {
  const alert = useAlert();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signupSchemaValidation,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
        //here you can performs any necessary actions, such as sending the data to an API or displaying a success message.
        alert.show("Successfully submitted");
      },
    });
  return (
    <div>
      <div className="sign-up"></div>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <h1 style={{ margin: "0px 0px 12px 0px" }}>Sign Up</h1>
          <div className="input-block">
            <label htmlFor="name" className="input-label">
              Name
            </label>
            <input
              type="name"
              autoComplete="off"
              name="name"
              id="name"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (
              <p className="form-error">{errors.name}</p>
            ) : null}
          </div>
          <div className="input-block">
            <label htmlFor="email" className="input-label">
              Email
            </label>
            <input
              type="email"
              autoComplete="off"
              name="email"
              id="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="form-error">{errors.email}</p>
            ) : null}
          </div>
          <div className="input-block">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <input
              type="password"
              autoComplete="off"
              name="password"
              id="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p className="form-error">{errors.password}</p>
            ) : null}
          </div>
          <div className="modal-buttons">
            <button className="input-button" type="submit">
              Sign Up
            </button>
          </div>
        </form>
        <p className="log-in">
          Already have an account?{" "}
          <a href="http://localhost:3000">Log In now</a>
        </p>
      </div>
    </div>
  );
}

export default App;
