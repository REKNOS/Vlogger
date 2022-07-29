import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ViewVlog = () => {
  const { id } = useParams()

  console.log(id);

  const url = "http://localhost:5000";
  const [podcastData, setPodcastData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getPodcastById = () => {
    setLoading(true);
    fetch(url + "/vlog/getbyid/" + id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPodcastData(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    getPodcastById();
  }, []);

  const displayPodcastData = () => {
    console.log(loading);
    if(!loading && podcastData){
      return <div className="card">
      <div className="row">
        <div className="col">
          <img src={url+'/'+podcastData.thumbnail} alt="" />
        </div>
        <div className="col">
          <div className="card-body">
            <h5 className="card-title">Title: {podcastData.title}</h5>
            <p className="card-text">Description:</p>
            <p className="card-text">File:</p>
            <p className="card-text">
              <small className="text-muted">Uploaded By:</small>
            </p>
            <video src={url+'/'+podcastData.file} autoPlay controls></video>
          </div>
          </div>
          </div>
          </div>
    }
    }

  return <div>ViewVlog</div>
}

export default ViewVlog
