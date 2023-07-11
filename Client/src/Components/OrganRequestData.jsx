import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import HospitalDetails from "./HospitalDetails";
import HeaderOfDetail from "./HeaderOfDetail";

function HospitalData(props){
  const navigate = useNavigate();
  const params=useParams();
  const id=params.id;
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("/Hospital/"+id)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);

return (
<div>
<HeaderOfDetail name="Hospital"/><HospitalDetails
          id={data._id}
          full_name={data.full_name}
          email={data.email}
          phone_number={data.phone_number}
          address={data.address}
          age={data.age}
          blood_group={data.blood_group}
          organ_type={data.organ_type}
          status={data.status}
          ></HospitalDetails></div>);
}
export default HospitalData;