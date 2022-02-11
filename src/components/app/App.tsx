import React, {useState} from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import "./App.css"
import Header from "../header/header";
import UsersForm from "../usersForm/usersForm";
import UsersList from "../usersList/usersList";
import ViewUserInfo from "../viewUserInfo/viewUserInfo";

const App = () => {
    const [userName, setUserName] = useState("");
    const [fullName, setFullName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPhone, setUserPhone] = useState("");

    return (
        <div>
            <Header/>
            <Routes>
                <Route path="add"
                       element={<UsersForm
                           userName={userName} setUserName={setUserName}
                           fullName={fullName} setFullName={setFullName}
                           userEmail={userEmail} setUserEmail={setUserEmail}
                           userPhone={userPhone} setUserPhone={setUserPhone}
                       />}
                />
                <Route path="/"
                       element={<UsersList/>}
                />
                <Route path="/view"
                       element={<ViewUserInfo/>}
                />
            </Routes>
        </div>
    );
};

export default App;

