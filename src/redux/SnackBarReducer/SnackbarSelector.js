import { createSelector } from 'reselect'

const selectSnackbar = state => state.snackbar;

export const selectSnackbarShow = createSelector(
    [selectSnackbar],
    (snackbar=>snackbar.snackbarShow)
)

export const selectSnackbarMessage = createSelector(
    [selectSnackbar],
    (snackbar=>snackbar.snackbarMessage)
)
