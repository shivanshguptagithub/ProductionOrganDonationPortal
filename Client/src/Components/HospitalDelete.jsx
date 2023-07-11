import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
//import HospitalDetails from "./HospitalDetails";

function HospitalData(props){
  const navigate = useNavigate();
  const params=useParams();
  const id=params.id;
  //const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("/Hospitaldelete/"+id)
      .then((response) => {
        window.alert("Hospital data delete.");
        navigate("/HospitalList");
      })
      .catch((error) => {
        console.log(error);
      });
  });

return (<></>);
}
export default HospitalData;