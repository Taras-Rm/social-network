import React from "react";
import dialogsReducer, {addMessage} from "./dialogs-reducer";

let state = {
    messages: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'How are you ?' },
        { id: 3, message: 'How are you ?' },
        { id: 4, message: 'How are you ?' }
    ]
};

it('count of messages should be incremented', () => {
    let action = addMessage('Hi everyone !');

    let newState = dialogsReducer(state, action);

    expect(newState.messages.length).toBe(5);
})