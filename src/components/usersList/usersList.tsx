import React, {useEffect} from 'react';
import UserListItem from "../userListItem/userListItem";
import {baseUsers} from "../../_mock/mock";
import "./usersList.css"

const UsersList = () => {
    useEffect(() => {
        if (localStorage.getItem("users")) return
        localStorage.setItem('users', JSON.stringify(baseUsers))
    }, [])
    return (
        <UserListItem/>
    )
};

export default UsersList;

