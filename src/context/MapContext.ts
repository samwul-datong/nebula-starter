import { createContext, useContext, useState } from "react";
import { MapMode } from "../modes";

const defaultData = {
  mode: 'view' as MapMode, 
  setMode: () => null, 
  featureCollection: {
    type: 'FeatureCollection',
    features: []
  }, 
  setFeatureCollection: () => null,
  selectedFeatureIndexes: [], 
  setSelectedFeatureIndexes: () => null
}

type IFeature = {
  type: string
  features: any[]
}

export type IMapContext = {
  mode: MapMode
  setMode: any
  featureCollection: IFeature
  setFeatureCollection: any
  selectedFeatureIndexes: any[]
  setSelectedFeatureIndexes: any
}

export const MapContext = createContext<IMapContext>(defaultData)

export const useMapContext = () => useContext(MapContext)

export const useMapContextData = () => {
  const [mode, setMode] = useState<MapMode>('view')
  const [featureCollection, setFeatureCollection] = useState({
    type: 'FeatureCollection',
    features: []
  })
  const [selectedFeatureIndexes, setSelectedFeatureIndexes] = useState([])

  return {
    mode, setMode, featureCollection, setFeatureCollection,
    selectedFeatureIndexes, setSelectedFeatureIndexes
  }
}

type Provider<T> = (props:{ value:T, children?:any })=>any
export const MapContextProvider = MapContext.Provider as unknown as Provider<any>