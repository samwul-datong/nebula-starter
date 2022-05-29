import { useReducer } from "react"

type mode = 'edit' | 'create' | 'select'
type obmode = 'select' | 'wall' | 'entrance' | 'desk'
type Action = {
  type: string,
  data?: any
}

type stateData = {
  selectedObjectId?: string | null
  objectSelected: boolean
  mode: mode
  objectMode: obmode
  objects: any[]
  features: any[]
}

const initialData: stateData = {
  selectedObjectId: null,
  objectSelected: false,
  mode: 'select',
  objectMode: 'select',
  objects: [],
  features: []
}

const reducer = (state: stateData, action: Action): stateData => {
    // actions
    // Create Wall, Create Entrance, Create Desk
    // Select Wall, Select Entrance, Select Desk
    // Delete Wall, Delete Entrance, Delete Desk
    // Move Wall, Move Entrance, Move Desk
    // Resize Wall, Resize Entrance, Resize Desk
  return initialData
}

// Maybe pass controllers here
// We can use type switch to determine which controller to call
export const useStore = () => {
  const [state, dispatch] = useReducer(reducer, initialData)
  return [state, dispatch]
}