import React from "react"
import { useParams } from "react-router-dom"

const ViewVlog = () => {
  const { id } = useParams()

  console.log(id)
  return <div>ViewVlog</div>
}

export default ViewVlog
