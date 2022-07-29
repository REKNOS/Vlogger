import React, { useEffect, useState } from 'react';
import { TextField, Button } from "@mui/material";
import './Vlog.css';

const BrowseVlog = () => {

  const [userArray, setUserArray] = useState([])
  const [userLoading, setLoading] = useState(false)

  const getDataFromBackend = async () => {
    setLoading(true);

    const response = await fetch("http://localhost:5000/vlog/getall");
    const data = await response.json();

    console.log(data);
    setUserArray(data);
    setLoading(false);
  };

  useEffect(() => {
    getDataFromBackend();
  }, []);

  const showVlogs = () => {
    if(!userLoading){
      return userArray.map((vlog) => (
        <div class="col-md-3 mt-5">
          <div class="card ">
            <img
              class="card-img-top"
              src="https://a.cdn-hotels.com/gdcs/production143/d1112/c4fedab1-4041-4db5-9245-97439472cf2c.jpg"
              alt=""
            />
            <div class="card-body">
              <h4>BALI</h4>
              <p class="text-muted">BALI is a province of Indonesia and the westernmost of the Lesser Sunda Islands.</p>
            </div>
          </div>
        </div>
      ))
    }
  }

  return (
    <header class="bg-secondary text-white text-center">
    <div class="container">
      <h2>VLOGS</h2>

      <div class="input-group mt-4">
        <input
          type="text"
          class="form-control"
          placeholder="Enter Vlog titles to Search"
        />
        <button class="btn btn-success">Search</button>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row">
        {showVlogs()}
        <div class="col-md-3 mt-5">
          <div class="card mycard">
            <img
              class="card-img-top"
              src="https://images.adsttc.com/media/images/60b6/09d7/f91c/8199/fb00/00cd/large_jpg/shutterstock_1196821240.jpg?1622542766"
              alt=""
            />
            <div class="card-body">
        
              <h4 >DUBAI</h4>
              <p class="text-muted">DUBAI is the most populous city in the United Arab Emirates and the capital of the Emirate of Dubai</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 mt-5">
          <div class="card ">
            <img
              class="card-img-top"
              src="https://static.india.com/wp-content/uploads/2020/06/Maldives1.jpg"
              alt=""
            />
            <div class="card-body">
            <div class="form-outline">
            <input type="text" id="form12" class="form-control" />
            <label class="form-label" for="form12">Title</label>
             </div>
             <div class="form-outline">
             <textarea class="form-control" id="textAreaExample" rows="2"></textarea>
             <label class="form-label" for="textAreaExample">Description</label>
             </div>
             <div class="form-outline">
            <input type="text" id="form12" class="form-control" />
            <label class="form-label" for="form12">Thumbnail</label>
             </div>
             </div>
          </div>
        </div>
        <div class="col-md-3 mt-5">
          <div class="card mycard">
            <img
              class="card-img-top"
              src="https://static.india.com/wp-content/uploads/2020/06/Maldives1.jpg"
              alt=""
            />
            <div class="card-body">
              <h4>MALDIVES</h4>
              <p class="text-muted">MALDIVES is a nation of islands in the Indian Ocean, that spans across the equator.</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-3 mt-5">
          <div class="card mycard">
            <img
              class="card-img-top"
              src="https://upload.wikimedia.org/wikipedia/commons/8/82/Oia%2C_Santorini_HDR_sunset.jpg"
              alt=""
            />
            <div class="card-body">
              <h4>SANTORINI</h4>
              <p class="text-muted">SANTORINI officially Thira and classic Greek Thera is an island in the southern Aegean Sea</p>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </header>
   )
}


export default BrowseVlog;