import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	filters: [],
	filtersLoadingStatus: 'idle',
	activeFilter: 'all'
}

const heroesFiltersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		filtersFetching: state => { state.filtersLoadingStatus = 'loading' },
		filtersFetched: (state, action) => {
			state.filters = action.payload;
			state.filtersLoadingStatus = 'idle';
		},
		filtersFetchingError: state => {
			state.filtersLoadingStatus = 'error';
		},
		activeFilterChanged: (state, action) => {
			state.activeFilter = action.payload;
		}
	}
})

const { actions, reducer } = heroesFiltersSlice;

export default reducer;

export const {
	filtersFetching,
	filtersFetched,
	filtersFetchingError,
	activeFilterChanged
} = actions