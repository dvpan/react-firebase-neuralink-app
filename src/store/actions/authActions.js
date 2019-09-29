import firebase from '../../config/fbConfig';

// 
export const signIn = (credentials) => (dispatch, getState) => {
    firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(() => {
            dispatch({ type: 'SIGNIN_SUCCESS' });
        })
        .catch((err) => {
            dispatch({ type: 'SIGNIN_FAILURE' });
        });
};

export const signUp = ({
    email, password, firstName, lastName, deviceId,
}) => (dispatch, getState, { getFirestore }) => {
    if (!(email && password && firstName && lastName && deviceId)) {
        dispatch({ type: 'SIGNUP_FAILURE' });
        return;
    }

    const firestore = getFirestore();
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((resp) => firestore.collection('users').doc(resp.user.uid).set({
            firstName,
            lastName,
            deviceId,
        }))
        .then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' });
        })
        .catch((err) => dispatch({ type: 'SIGNUP_FAILURE' }));
};

export const signOut = () => (dispatch, getState) => {
    firebase
        .auth()
        .signOut()
        .then(() => dispatch({ type: 'SIGNOUT_SUCCESS' }))
        .catch((err) => dispatch({ type: 'SIGNOUT_FAILURE' }));
};
