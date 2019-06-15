import { useState } from 'react'

const useDynamicState = initialState => {
  const [state, setState] = useState(initialState)
  const setDynamicState = key => value => {
    setState({
      ...state,
      [key]: value
    })
  }
  return [state, setDynamicState]
}

export default useDynamicState
