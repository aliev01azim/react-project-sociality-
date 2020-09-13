import { profileApi } from "../Api/Api"

const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const USER_PROFILE = 'USER_PROFILE'

let initialState = {
    PostsData: [
        { id: 1, likesCount: 12, postsDesc: 'Hi,Bro My name is Azim and it is my first post!' },
        { id: 2, likesCount: 0, postsDesc: 'i love my future profession' },
        { id: 3, likesCount: 392, postsDesc: 'i am gonna be the best frontend developer' },
        { id: 4, likesCount: 2, postsDesc: 'Azim ,listen me, just keep up a good work!' }
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            {
                let newPost = {
                    id: 5,
                    likesCount: 0,
                    postsDesc: state.newPostText
                };
                return {
                    ...state,
                    PostsData: [...state.PostsData, newPost],
                    newPostText: ''
                };

            }
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case USER_PROFILE:
            return {
                ...state,
                profile: action.prof
            }
        default:
            return state;
    }
}

export const getOurProfile = (userId) => {
    return (dispatch) => {
        profileApi.getProfile(userId).then(data => {
            dispatch(setProfile(data))
        });
    }
}
export const addPost = () => ({ type: ADD_POST })
export const onPostChange = (text) => ({ type: UPDATE_POST_TEXT, newText: text });
export const setProfile = (prof) => ({ type: USER_PROFILE, prof });




export default profileReducer