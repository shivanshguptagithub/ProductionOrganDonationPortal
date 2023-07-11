import React from "react";
import {BrowserRouter,Routes, Route} from "react-router-dom";

import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import DonorList from "./Components/DonorList";
import DonorAdd from "./Components/DonorAdd";
import RecipientList from "./Components/RecipientList";
import RecipientAdd from "./Components/RecipientAdd";
import Profile from "./Components/Profile";
import ProfilePage from "./Components/ProfilePage";
import HospitalList from "./Components/HospitalList";
import HospitalAdd from "./Components/HospitalAdd";
import DonorData from "./Components/DonorData";
import RecipientData from "./Components/RecipientData";
import HospitalData from "./Components/HospitalData";
import DonorEdit from "./Components/DonorEdit";
import RecipientEdit from "./Components/RecipientEdit";
import HospitalEdit from "./Components/HospitalEdit";
import DonorDelete from "./Components/DonorDelete";
import RecipientDelete from "./Components/RecipientDelete";
import HospitalDelete from "./Components/HospitalDelete";
import OrganRequestAdd from "./Components/OrganRequestAdd";
import OrganRequestSearch from "./Components/OrganRequestSearch";
import OrganRequestDetails from "./Components/OrganRequestDetails"


function AppRouter(){

    return(
        <BrowserRouter>
            <Routes>
            <Route element={<Layout/>}>
                <Route extact path="/" Component={Home} />
                <Route extact path="/login" Component={Login} />
                <Route path="/register" Component={Register}/>
                <Route path="/donorList" Component={DonorList}/>
                <Route path="/donorAdd" Component={DonorAdd}/>
                <Route path="/recipientList" Component={RecipientList}/>
                <Route path="/recipientAdd" Component={RecipientAdd}/>
                <Route path="/profile" Component={ProfilePage}/>
                <Route path="/ProfilePage" Component={ProfilePage}/>
                <Route path="/HospitalList" Component={HospitalList}/>
                <Route path="/HospitalAdd" Component={HospitalAdd}/>
                <Route path="/donorData/:id" element={<DonorData />} />
                <Route path="/recipientData/:id" element={<RecipientData />} />
                <Route path="/hospitalData/:id" element={<HospitalData />} />                
                <Route path="/donorEdit/:id"  element={<DonorEdit />} />
                <Route path="/recipientEdit/:id"  element={<RecipientEdit />} />
                <Route path="/HospitalEdit/:id"  element={<HospitalEdit />} />
                <Route path="/donorDelete/:id"  element={<DonorDelete />} />
                <Route path="/recipientDelete/:id"  element={<RecipientDelete />} />
                <Route path="/hospitalDelete/:id"  element={<HospitalDelete />} />
                <Route path="/OrganRequest/:id" element={<OrganRequestDetails />} />
                <Route path="/OrganRequestAdd" Component={OrganRequestAdd}/>
                <Route path="/OrganRequestSearch" Component={OrganRequestSearch}/>
            </Route>    
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;