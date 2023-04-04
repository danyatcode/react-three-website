import React, { createContext, useContext, useLayoutEffect, useReducer, useState } from 'react'
import { renderReducer } from './Reducers';

const ModelsContext = createContext();

const Context = ({children}) => {

  const [state, dispatch] = useReducer(renderReducer, {
    isModelsExist: false,
    isFilled: false
  });

  const [pageArtState, setPageArt] = useState();

  return (
    <ModelsContext.Provider value={{state, dispatch, pageArtState, setPageArt }}>
        {children}
    </ModelsContext.Provider>
  )
}

export default Context

export const ModelsState = () => {
  return useContext(ModelsContext)
}