import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import DonorDetails from "./DonorDetails";
import HeaderOfDetail from "./HeaderOfDetail";
import DetailsPageEditButton from "./DetailsPageEditButton"

function DonorData(props){
  const navigate = useNavigate();
  const params=useParams();
  const id=params.id;
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("/donor/"+id)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);

return (
<div>
<HeaderOfDetail
  name="donor"
/>
<DonorDetails
    key={data._id}
    id={data._id}
    full_name={data.full_name}
    email={data.email}
    phone_number={data.phone_number}
    address={data.address}
    age={data.age}
    blood_group={data.blood_group}
    organ_type={data.organ_type}
    status={data.status}
    ></DonorDetails>
<DetailsPageEditButton
  id={id}
  name="donor"
/>
    </div>);
}
export default DonorData;