const initState = {
    signInErr: null,
    signUpErr: null,
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SIGNIN_SUCCESS': {
            return {
                ...state,
                signInErr: null,
            };
        }
        case 'SIGNIN_FAILURE': {
            return {
                ...state,
                signInErr: 'Ошибка входа. Проверьте имя email и пароль',
            };
        }
        case 'SIGNUP_SUCCESS': {
            return {
                ...state,
                signUpErr: null,
            };
        }
        case 'SIGNUP_FAILURE': {
            return {
                ...state,
                signUpErr: 'Введенные данные некорректны',
            };
        }
        case 'SIGNUP_CLEAR_ERROR': {
            return {
                ...state,
                signUpErr: null,
            };
        }
        case 'SIGNIN_CLEAR_ERROR': {
            return {
                ...state,
                signInErr: null,
            };
        }
        case 'SIGNOUT_SUCCESS': {
            return {
                ...state,
                signOut: true,
            };
        }
        case 'SIGNOUT_FAILURE': {
            return {
                ...state,
                signOut: false,
            };
        }
        default: return state;
    }
};

export default authReducer;
