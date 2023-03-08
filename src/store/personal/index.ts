type State = {
    username: string,
    email: string,
    address: string
}

const states: State = {
    username: '',
    email: '',
    address: ''
}

export const postReducer = (state = states, action: any) => {
    switch(action.type) {
        case "add_post":
            return {...state, username: action.payload.username, email: action.payload.email, address: action.payload.address}
        default:
            return state
    }
}

