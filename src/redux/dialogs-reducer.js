const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

let initialState = {
    DialogsData: [
        { id: 1, name: 'Azim' },
        { id: 2, name: 'aluun' },
        { id: 3, name: 'Osmo' },
        { id: 4, name: 'Chika' },
        { id: 5, name: 'Eldi' },
        { id: 6, name: 'Akyl' },
        { id: 7, name: 'Bekza' },
        { id: 8, name: 'Janik' },
        { id: 9, name: 'Rus' }
    ],

    MessageData: [
        { id: 1, text: "asdad asdswdai sdak asfksf ask akkkk    s a asd  sadada " },
        { id: 2, text: "asdad asdswdai sdak asfksf ask akkkk    s a asd  sadada " },
        { id: 3, text: "asdad asdswdai sdak asfksf ask akkkk    s a asd  sadada " },
        { id: 4, text: "asdad asdswdai sdak asfksf ask akkkk    s a asd  sadada " },
        { id: 5, text: "asdad asdswdai sdak asfksf ask akkkk    s a asd  sadada " },
        { id: 6, text: "asdad asdswdai sdak asfksf ask akkkk    s a asd  sadada " }
    ],

    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            {
                let newMessage = {
                    id: 6,
                    text: state.newMessageText
                }
                return {
                    ...state,
                    MessageData: [...state.MessageData, newMessage],
                    newMessageText: ''
                }

            }

        case UPDATE_MESSAGE_TEXT:
            {
                return {
                    ...state,
                    newMessageText: action.newMessage
                }
            }

        default:
            return state
    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const onMessageChangeActionCreator = (text) => ({ type: UPDATE_MESSAGE_TEXT, newMessage: text })

export default dialogsReducer