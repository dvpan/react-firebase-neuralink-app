const hour = 60 * 60 * 1000;
const day = hour * 24;

const initState = {
    type: 'hour',
    start: new Date().getTime() - hour,
    end: new Date().getTime() + hour,
    mask: 'hh/mm/ss',
};

const healthFilterReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_FILTER': {
            switch (action.filter) {
                case 'hour': {
                    return {
                        type: action.filter,
                        start: new Date().getTime() - hour,
                        end: new Date().getTime() + hour,
                    };
                }
                case 'today': {
                    return {
                        type: action.filter,
                        start: new Date().getTime() - day,
                        end: new Date().getTime() + hour,
                    };
                }
                case 'yesterday': {
                    const start = new Date();
                    start.setDate(new Date().getDate() - 1);
                    start.setHours(0, 0, 0, 0);

                    return {
                        type: action.filter,
                        start: start.getTime(),
                        end: start.getTime() + day,
                    };
                }
                case 'week': {
                    const start = new Date();
                    start.setDate(new Date().getDate() - 7);
                    start.setHours(0, 0, 0, 0);

                    return {
                        type: action.filter,
                        start: start.getTime(),
                        end: new Date().getTime() + hour,
                    };
                }
                default: break;
            }
            break;
        }
        default: return state;
    }
};

export default healthFilterReducer;
