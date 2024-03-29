export type themeIdStateType = {
    themeId: number,
}

const initState:themeIdStateType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: changeThemeIdType): themeIdStateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

type changeThemeIdType = {
    type: 'SET_THEME_ID', id: number
}
export const changeThemeId = (id: number): changeThemeIdType => ({ type: 'SET_THEME_ID', id }) as const// fix any
