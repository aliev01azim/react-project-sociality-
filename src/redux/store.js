import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import navbarReducer from './navbar-reducer'



let store = {
    subscribe(asd) {
        this._rerenderEntireTree = asd
    },
    _rerenderEntireTree() {
        console.log('a')
    },
    _state: {
        profilePage: {
            PostsData: [
                { id: 1, likesCount: 12, postsDesc: 'Hi,Bro My name is Azim and it is my first post!' },
                { id: 2, likesCount: 0, postsDesc: 'i love my future profession' },
                { id: 3, likesCount: 392, postsDesc: 'i am gonna be the best frontend developer' },
                { id: 4, likesCount: 2, postsDesc: 'Azim ,listen me, just keep up a good work!' }
            ],
            newPostText: ''
        },
        DialogPage: {
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
        },
        NavBarPage: {
            FriendsData: [
                { id: 1, name: 'Azim' },
                { id: 2, name: 'aluun' },
                { id: 3, name: 'Osmo' },
                { id: 4, name: 'Chika' },
                { id: 5, name: 'Eldi' },
                { id: 6, name: 'Akyl' },
                { id: 7, name: 'Bekza' },
                { id: 8, name: 'Janik' },
                { id: 9, name: 'Rus' }
            ]
        }

    },
    getState() {
        return this._state
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.DialogPage = dialogsReducer(this._state.DialogPage, action)
        this._state.NavBarPage = navbarReducer(this._state.NavBarPage, action)
        this._rerenderEntireTree(this._state)

    },

}



export default store