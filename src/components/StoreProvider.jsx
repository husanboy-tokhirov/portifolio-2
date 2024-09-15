"use client"
import {Provider} from 'react-redux'


const StoreProvider = ({children}) => {
  return (
    <Provider >
      {children}
    </Provider>
  )
}

export default StoreProvider