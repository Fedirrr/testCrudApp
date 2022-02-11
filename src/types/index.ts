const DELETE_USER = "DELETE_USER";
const ADD_USER = "ADD_USER";
const SET_USERS = "SET_USERS"
const UPDATE_USER_ITEM = "UPDATE_USER_ITEM";
const EDITABLE_USER_ID = "EDITABLE_USER_ID"

export interface UsersFormProps {
    userName: string
    setUserName: (e: string) => void
    fullName: string
    setFullName: (e: string) => void
    userEmail: string
    setUserEmail: (e: string) => void
    userPhone: string
    setUserPhone: (e: any) => void

}

export interface InitialState {
    users: any
    loading: boolean
    editableUserId: null
}

export interface UsersReducerPayload{
    id: number
    name:string
    email:string
    phone: number
}

export interface UsersProps {
    users: [{
        id: number
        name: string
        phone: string
        email: string
        username: string
    }]
}

export interface SetUsers {
    type: typeof SET_USERS
    payload: any
}


export interface AddUser {
    type: typeof ADD_USER
    payload: any
}

export interface DeleteUsers {
    type: typeof DELETE_USER
    payload: any
}

export interface EditableUserId {
    type: typeof EDITABLE_USER_ID,
    payload: number
}
export interface UpdatedUserItem {
    type: typeof UPDATE_USER_ITEM
    payload: any
}