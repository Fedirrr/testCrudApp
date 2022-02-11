import React, {FC, useState} from 'react';
import {Button, Form, Input, Radio} from "antd";
import {Link} from "react-router-dom";
import {UsersFormProps, UsersProps} from "../../types";
import {useSelector, useDispatch} from "react-redux";
import "./usersForm.css"
import {addUser} from "../redux/usersReducer";

const UsersForm: FC<UsersFormProps> = (props) => {
    const {
        userName, setUserName,
        fullName, setFullName,
        userEmail, setUserEmail,
        userPhone, setUserPhone,
    } = props

    const dispatch = useDispatch()
    const user = useSelector(({users}: UsersProps) => users)

    const onAddHandlerUser = () => {
        let userId = new Date().getTime()
        if (user.length && user[user.length - 1].id) {
            userId = user[user.length - 1].id + 1
        }

        dispatch(addUser({
            name: fullName,
            id: userId,
            username: userName,
            email: userEmail,
            phone: userPhone
        }))
        setUserName("")
        setFullName("")
        setUserEmail("")
        setUserPhone("")
    }

    return (
        <div className="usersFormWrapper">
            <form action="#">
                <label htmlFor="fullName"> Full Name</label>
                <Input
                    name="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />

                <label htmlFor="userName"> User Name</label>
                <Input
                    name="userName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <label htmlFor="email"> Email</label>
                <Input
                    name="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}

                />
                <label htmlFor="phoneNumber">Phone Number</label>
                <Input
                    name="phoneNumber"
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                />


                <Button style={{marginRight: "15px", marginTop:"15px"}}
                        onClick={onAddHandlerUser}
                        disabled={!userName || !fullName || !userPhone || !userEmail}
                >
                    Add new user
                </Button>
                <Button>
                    <Link to="/">
                        Back to users list
                    </Link>
                </Button>
            </form>

        </div>
    );
};

export default UsersForm;
