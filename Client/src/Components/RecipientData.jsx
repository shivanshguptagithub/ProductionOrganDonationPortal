import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import RecipientDetails from "./RecipientDetails";
import HeaderOfDetail from "./HeaderOfDetail";
import DetailsPageEditButton from "./DetailsPageEditButton";

function RecipientData(props){
  const navigate = useNavigate();
  const params=useParams();
  const id=params.id;
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("/Recipient/"+id)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);

return (
<div>
<HeaderOfDetail name="Recipient"/><RecipientDetails
          id={data._id}
          full_name={data.full_name}
          email={data.email}
          phone_number={data.phone_number}
          address={data.address}
          age={data.age}
          blood_group={data.blood_group}
          organ_type={data.organ_type}
          status={data.status}
          ></RecipientDetails>
      <DetailsPageEditButton
        id={id}
        name="recipient"
      />
          </div>);
}
export default RecipientData;