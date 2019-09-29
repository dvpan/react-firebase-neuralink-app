const initState = {
    health: [
    ],
};

const healthReducer = (state = initState, action) => {
    switch (action.type) {
        case 'NEW_MEASUREMENT': {
            return { health: [action.measurement, ...state.health] };
        }

        default: {
            return state;
        }
    }
};

export default healthReducer;
