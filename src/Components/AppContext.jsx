import React, { createContext, useReducer, useContext, useEffect } from 'react';

const AppContext = createContext();

const initialState = {
  theme: 'light',
  dentists: [],
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  loading: true,
};

const appReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'SET_DENTISTS':
      return { ...state, dentists: action.payload, loading: false };
    case 'ADD_TO_FAVORITES':
      return { ...state, favorites: [...state.favorites, action.payload] };
    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        favorites: state.favorites.filter(
          (dentist) => dentist.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'SET_DENTISTS', payload: data }))
      .catch((error) => console.error('Error fetching dentists:', error));
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(state.favorites));
  }, [state.favorites]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};