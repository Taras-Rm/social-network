import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
    _state: {

        profilePage: {
            posts: [
                { id: 1, message: 'Hello everyone!', likeCount: 15 },
                { id: 2, message: 'I can swimming!!!', likeCount: 20 },
                { id: 3, message: 'I am happy!!!', likeCount: 18 },
                { id: 4, message: 'I like travelling!!!', likeCount: 35 },
                { id: 5, message: 'I like travelling!!!!!!!!!!!!!!!!!', likeCount: 30 },
                { id: 5, message: 'I like travelling!!!!!!!!!!!!!!!!!', likeCount: 31 },
                { id: 10, message: 'I likkkk kkkkkkk', likeCount: 1 }
            ],

            newPostText: "hello Bob"
        },

        dialogsPage: {
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

            newMessageText: "New"
        },

        sidebar: {
            friends: [
                { id: 1, name: 'Mot' },
                { id: 2, name: 'Tic' },
                { id: 3, name: 'Dartonian' }
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);
       
        this._callSubscriber(this._state);
    }
}

export default store;