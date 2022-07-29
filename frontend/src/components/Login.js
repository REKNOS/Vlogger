import { TextField, Button } from "@mui/material"
import { Formik } from "formik"
import React from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import * as Yup from "yup"

const Login = () => {
  const navigate = useNavigate();
  const handleFormSubmit = async (formdata) => {
    console.log("Form Submitted!!")
    
    const response = await fetch("http://localhost:5000/vlog/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      console.log("success");
      Swal.fire({
        icon: "success",
        title: "Well Done 👍",
        text: "You have done a wonderfull Job!!",
      });

      response.json().then((data) => {
        console.log(data);
        navigate("/Addvlog");
        sessionStorage.setItem("user", JSON.stringify(data));
      })

    } else {
      console.log(response.status);
      console.log("something went wrong");
    }

  }
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(4, "Password should be longer than 4 characters").required("Required"),
  })

  return (
    <div style={{ background: "#eee", height: "100vh" }}>
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h3 className="text-muted text-center">Login Form</h3>
              <hr />

              <Formik
                initialValues={{ email: "", password: "" }} // specifying initial value form form
                onSubmit={handleFormSubmit} // function to handle form submission
                validationSchema={SignupSchema}>
                {({ values, handleChange, handleSubmit, errors, touched }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      sx={{ mt: 3 }}
                      fullWidth
                      label="Email"
                      placeholder="Email Address"
                      id="email"
                      value={values.email}
                      onChange={handleChange}
                      error={Boolean(errors.email) && touched.email}
                      helperText={errors.email}
                    />
                    <TextField
                      sx={{ mt: 3 }}
                      fullWidth
                      type="password"
                      label="Password"
                      placeholder="Password"
                      id="password"
                      value={values.password}
                      onChange={handleChange}
                      error={Boolean(errors.password) && touched.password}
                      helperText={errors.password}
                    />
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 5 }}>
                      Login Now
                    </Button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
