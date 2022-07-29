import { TextField, Button, IconButton } from "@mui/material"
import { Formik } from "formik"
import React, { useState } from "react"
import Swal from "sweetalert2"
import * as Yup from "yup"

const AddVlog = () => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")));

  const [selFile, setSelFile] = useState("");
  const [selImage, setSelImage] = useState("");

  const handleFormSubmit = (formdata) => {
    formdata.file = selFile;
    formdata.thumbnail = selImage;
    console.log("Form Submitted!!")
    console.log(formdata)

    fetch("http://localhost:5000/vlog/add", {
      method: "POST",
      body: JSON.stringify(formdata), //convert javascript to json
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        console.log("data saved")
        Swal.fire({
          icon: "success",
          title: "Success",
          text: " File uploaded Successfully👍",
        })
      }
    })
  }

  const SignupSchema = Yup.object().shape({
    title: Yup.string().required("Please enter the Title"),
    description: Yup.string().max(100, "Enter the complete description of the title").required("Required"),
  })

  const uploadFile = async (e) => {
    const file = e.target.files[0]
    setSelFile(file.name);
    const fd = new FormData()
    fd.append("myfile", file)
    const res = await fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    })
    if (res.status === 200) {
      console.log("file upload success")
    }
  }

  const uploadThumbnail = async (e) => {
    const file = e.target.files[0]
    setSelImage(file.name);
    const fd = new FormData()
    fd.append("myfile", file)
    const res = await fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    })
    if (res.status === 200) {
      console.log("file upload success")
    }
  }

  return (
    <div style={{ background: "#eee", height: "100vh" }}>
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-3">
          <div className="container card">
            <div className="card-body">
              <h3 className="text-muted text-center">AddVlog</h3>
              <hr />

              <Formik
                initialValues={{ title: "", description: "", thumbnail: "" }}
                onSubmit={handleFormSubmit}
                validationSchema={SignupSchema}>
                {({ values, handleChange, handleSubmit, errors, touched }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      sx={{ mt: 3 }}
                      fullWidth
                      label="Title"
                      placeholder="Title"
                      id="title"
                      value={values.title}
                      onChange={handleChange}
                      error={Boolean(errors.title) && touched.title}
                      helperText={errors.title}
                    />
                    <TextField
                      sx={{ mt: 3 }}
                      fullWidth
                      label="Description"
                      placeholder="Description"
                      id="description"
                      value={values.description}
                      onChange={handleChange}
                      error={Boolean(errors.description) && touched.description}
                      helperText={errors.description}
                    />
                    

                    <Button variant="contained" component="label" sx={{ mt: 5 }}>
                      Upload Image
                      <input hidden accept="image/*" multiple type="file" onChange={uploadThumbnail} />
                    </Button>
                    <Button variant="contained" color="success" component="label" sx={{ mt: 5 }}>
                      <input hidden accept="video/*" multiple type="file" onChange={uploadFile} />
                      Upload File
                    </Button>
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 5 }}>
                      ADD Vlog
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

export default AddVlog

//
