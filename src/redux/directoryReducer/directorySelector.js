import { createSelector } from 'reselect'
import directoryReducer from './directoryReducer'

const selectDirectory = state => state.directory

export const selectDirectorySections = createSelector(
    [selectDirectory],
    (directory=>directory.sections)
);