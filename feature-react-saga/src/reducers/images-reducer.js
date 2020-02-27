export const ImagesReducer = (state = {}, action) => {
    switch(action.type) {
        case 'LOAD_IMAGES':
        return {...state, isLoadImages: true}
        case 'HIDE_IMAGES':
        return {...state, isLoadImages: false}
        default:
        return {}
    }
}