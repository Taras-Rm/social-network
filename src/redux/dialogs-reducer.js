const ADD_MESSAGE = 'dialogs/ADD-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Tom' },
        { id: 2, name: 'Sergy' },
        { id: 3, name: 'Andre' },
        { id: 4, name: 'Ric' },
        { id: 5, name: 'Sofa' },
        { id: 6, name: 'Sofa' },
        { id: 7, name: 'Sof' },
        { id: 8, name: 'Sofic' }
    ],

    messages: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'How are you ?' },
        { id: 3, message: 'How are you ?' },
        { id: 4, message: 'How are you ?' }
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
      
        case ADD_MESSAGE: {
            let newMessage = {
                id: 5,
                message: action.newMessageText
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            }
        }
        default : return state;
    } 
}

export const addMessage = (messageBody) => {
    return {type: ADD_MESSAGE, newMessageText: messageBody};
}


export default dialogsReducer;