import { usersApi } from "../Api/Api";

const FALLOW = "FALLOW";
const UNFALLOW = "UNFALLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const BUTTON_IS_FETCHING = 'BUTTON_IS_FETCHING'

let initialState = {
    Users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    btnToggle: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FALLOW:
            return {
                ...state,
                Users: state.Users.map((u) => {
                    if (u.id === action.u) {
                        return {
                            ...u,
                            followed: true,
                        };
                    }
                    return u;
                }),
            };
        case UNFALLOW:
            return {
                ...state,
                Users: state.Users.map((u) => {
                    if (u.id === action.u) {
                        return {
                            ...u,
                            followed: false,
                        };
                    }
                    return u;
                }),
            };
        case SET_USERS:
            return {
                ...state,
                Users: action.users,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUserCount: action.totalUsCount,
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.fetching,
            };
        case BUTTON_IS_FETCHING:
            return {
                ...state,
                btnToggle: action.btn ? [...state.btnToggle, action.userId] : state.btnToggle.filter((id) => id != action.userId),
            };
        default:
            return state;
    }
};


export const getAllUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        usersApi.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount));
            dispatch(toggleIsFetching(false))
        });
    }
}
export const onUsersPageChanged = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(pageNumber));
        usersApi.onUsersChanged(pageNumber, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
        });
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(buttonToggleIsFetching(true, userId));
        usersApi.follow(userId).then((data) => {
            dispatch(buttonToggleIsFetching(false, userId));
            if (data.resultCode === 0) {
                {
                    dispatch(followSuccess(userId));
                }
            }
        });
    };
};

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(buttonToggleIsFetching(true, userId));
        usersApi.unfollow(userId).then((data) => {
            dispatch(buttonToggleIsFetching(false, userId));
            if (data.resultCode === 0) {
                {
                    dispatch(unfollowSuccess(userId));
                }
            }
        });
    };
};


export const followSuccess = (u) => ({ type: FALLOW, u });
export const unfollowSuccess = (u) => ({ type: UNFALLOW, u });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setUsersTotalCount = (totalUsCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsCount });
export const toggleIsFetching = (fetching) => ({ type: TOGGLE_IS_FETCHING, fetching });
export const buttonToggleIsFetching = (btn, userId) => ({ type: BUTTON_IS_FETCHING, btn, userId });
export default usersReducer;