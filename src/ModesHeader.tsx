import { useCallback, useContext } from "react"
import { useMapContext, useMapContextData } from "./context/MapContext"

export const ModesHeader = () => {
  const {mode, setMode} = useMapContext()

  const setViewMode = useCallback(() => setMode('view'), [])
  const setPointMode = useCallback(() => setMode('point'), [])
  const setLineStringMode = useCallback(() => setMode('linestring'), [])
  const setPolygonMode = useCallback(() => setMode('polygon'), [])

  return <>
    <div className="mode-selector">
      <span>Current Mode: {mode} </span>
      <button onClick={setViewMode}>View Mode</button>
      <button onClick={setPointMode}>Point Mode</button>
      <button onClick={setLineStringMode}>LineString Mode</button>
      <button onClick={setPolygonMode}>Polygon Mode</button>
    </div>
  </>
}
