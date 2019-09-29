export const newMeasurement = (measurement) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();

        firestore
            .collection('health')
            .add(measurement)
            .then(() => {
                dispatch({
                    type: 'NEW_MEASUREMENT',
                    measurement
                });
            })
            .catch();
    }
}