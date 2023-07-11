import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
//import RecipientDetails from "./RecipientDetails";

function RecipientData(props){
  const navigate = useNavigate();
  const params=useParams();
  const id=params.id;
  //const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("/Recipientdelete/"+id)
      .then((response) => {
        window.alert("Recipient data delete.");
        navigate("/RecipientList")
      })
      .catch((error) => {
        console.log(error);
      });
  });

return (<></>);
}
export default RecipientData;