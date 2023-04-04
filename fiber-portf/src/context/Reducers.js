export const renderReducer = (state, action) => {
    switch (action.type) {
        case "NO_MODELS":
            return {...state, isModelsExist: false, isFilled: true}
        case "WITH_MODELS":
            return {...state, isModelsExist: true, isFilled: true}
        default: 
            return state;
    }
}
