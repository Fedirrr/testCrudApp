import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteUser, editableUserId} from "../redux/usersReducer";
import {Link} from "react-router-dom";
import {UsersProps} from "../../types";

const UserListItem = () => {
    const dispatch = useDispatch()
    const onDeleteHandlerUser = (id: number) => {
        dispatch(deleteUser(id))
    };
    const users = useSelector(({users}:UsersProps) => users)

    return (
        <div>
            {
                users.map(({id, name, username, email, phone}: any) => (
                    <div key={id} className="tableWrapper">
                        <table className="table">
                            <tbody key={id}>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                            <tr>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{username}</td>
                                <td>{email}</td>
                                <td>{phone}</td>
                                <td colSpan={3} style={{
                                    display: "flex",
                                    border: "none",
                                    justifyContent: "center"
                                }}>
                                    <button
                                        onClick={() => onDeleteHandlerUser(id)}>delete
                                    </button>
                                    <button

                                    onClick={() => {
                                        dispatch(editableUserId(id))
                                    }}>
                                        <Link to="/view"
                                              style={{color:"black"}}>
                                            edit
                                        </Link>
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                ))
            }
        </div>
    );
};

export default UserListItem;

