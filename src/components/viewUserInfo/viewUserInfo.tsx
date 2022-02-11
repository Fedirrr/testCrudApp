import React, {useState} from "react";

import {Button, Form, Input} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {updatedUserItem} from "../redux/usersReducer";
import { UsersProps } from "../../types";



const ViewUserInfo = () => {
    const editableUserIdSelector = useSelector(
        ({editableUserId}: any) => editableUserId)

    const editableUserItemSelector = useSelector((state: UsersProps) => {
        console.log(state)
        return state.users.find((el: any) => el.id === editableUserIdSelector)
    });

    const dispatch = useDispatch();

    const [fullName, setFullName] = useState(editableUserItemSelector?.name)
    const [userName, setUserName] = useState(editableUserItemSelector?.username)
    const [userPhone, setUserPhone] = useState(editableUserItemSelector?.phone)
    const [userEmail, setUserEmail] = useState(editableUserItemSelector?.email)

    return (
        <div>
            <Form>
                <Form.Item
                    label="Full Name">
                    <Input
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}/>
                </Form.Item>

                <Form.Item
                    label="User Name">
                    <Input
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}/>
                </Form.Item>

                <Form.Item
                    label="User Email">
                    <Input
                        defaultValue={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}/>
                </Form.Item>

                <Form.Item
                    label="User Phone">
                    <Input
                        defaultValue={userPhone}
                        onChange={(e) => setUserPhone(e.target.value)}/>
                </Form.Item>

                <Form.Item>
                    <Button
                        onClick={() =>
                            dispatch(updatedUserItem(
                                {
                                    ...editableUserItemSelector,
                                    name: fullName,
                                    username: userName,
                                    phone: userPhone,
                                    email: userEmail
                                })
                            )}>
                        Edit User
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ViewUserInfo;

