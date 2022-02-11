import {
    AddUser,
    DeleteUsers,
    EditableUserId,
    InitialState,
    SetUsers,
    UpdatedUserItem,
    UsersReducerPayload
} from "../../types";

const DELETE_USER = "DELETE_USER";
const ADD_USER = "ADD_USER";
const SET_USERS = "SET_USERS"
const UPDATE_USER_ITEM = "UPDATE_USER_ITEM";
const EDITABLE_USER_ID = "EDITABLE_USER_ID"

const initialState: InitialState = {
    users: JSON.parse(localStorage.getItem('users') || "[]"),
    loading: true,
    editableUserId: null
}


export const usersReducer = (state = initialState, action: { type: string, payload: any }):InitialState => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload,
            }
        case ADD_USER:
            const users = [...state.users, action.payload]
            localStorage.setItem('users', JSON.stringify(users))
            return {
                ...state,
                users: users
            }
        case DELETE_USER:
            const deletedUsers = state.users.filter(({id}: any) => id !== action.payload)
            localStorage.setItem('users', JSON.stringify(deletedUsers))

            return {
                ...state,
                users: deletedUsers
            }
        case EDITABLE_USER_ID:
            console.log(action.payload)
            return {
                ...state,
                editableUserId: action.payload
            }
        case UPDATE_USER_ITEM:
            const updatedUsers = state.users.map((el: UsersReducerPayload) => {
                console.log(el)
                return el.id === action.payload.id ? action.payload : el
            })
            localStorage.setItem('users', JSON.stringify(updatedUsers))
            return {
                ...state,
                users: updatedUsers,
            }

        default:
            return state
    }

}


export const setUsers = (users: any): SetUsers => ({type: SET_USERS, payload: users});


export const addUser = (user: any): AddUser => ({type: ADD_USER, payload: user})


export const deleteUser = (user: any): DeleteUsers => ({type: DELETE_USER, payload: user})


export const editableUserId = (id: number): EditableUserId => ({type: EDITABLE_USER_ID, payload: id})



export const updatedUserItem = (user: any): UpdatedUserItem => ({type: UPDATE_USER_ITEM, payload: user})