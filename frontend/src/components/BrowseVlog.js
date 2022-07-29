import React, { useEffect, useState } from "react"
import { TextField, Button } from "@mui/material"
import "./Vlog.css"
import { Link } from "react-router-dom"

const BrowseVlog = () => {
  const [userArray, setUserArray] = useState([])
  const [userLoading, setLoading] = useState(false)

  const url = "http://localhost:5000"

  const getDataFromBackend = async () => {
    setLoading(true)

    const response = await fetch("http://localhost:5000/vlog/getall")
    const data = await response.json()

    console.log(data)
    setUserArray(data)
    setLoading(false)
  }

  useEffect(() => {
    getDataFromBackend()
  }, [])

  const showVlogs = () => {
    if (!userLoading) {
      return userArray.map(({ _id, title, description, thumbnail }) => (
        <div class="col-md-3 mt-5">
          <div class="card ">
            <img class="card-img-top" src={url + "/" + thumbnail} alt="" />
            <div class="card-body">
              <h3>{title}</h3>
            </div>

            <Link class="btn btn-danger" to={"/view/" + _id}>
              View
            </Link>
          </div>
        </div>
      ))
    }
  }

  return (
    <header class="bg-secondary">
      <div class="container">
        <h2>VLOGS</h2>

        <div class="input-group mt-4">
          <input type="text" class="form-control" placeholder="Enter Vlog titles to Search" />
          <button class="btn btn-success">Search</button>
        </div>
      </div>
      <div class="container mt-5">
        <div class="row">{showVlogs()}</div>
      </div>
    </header>
  )
}

export default BrowseVlog
