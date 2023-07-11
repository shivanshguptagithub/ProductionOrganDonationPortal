import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
//import DonorDetails from "./DonorDetails";

function DonorData(props){
  const navigate = useNavigate();
  const params=useParams();
  const id=params.id;
  //const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("/donordelete/"+id)
      .then((response) => {
        window.alert("Donor data deleted.");
        navigate("/DonorList")
      })
      .catch((error) => {
        console.log(error);
      });
  });

return (<></>);
}
export default DonorData;