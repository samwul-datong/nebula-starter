import { DeckGL } from 'deck.gl';
import { EditableGeoJsonLayer } from 'nebula.gl';
import { useMemo } from 'react';
import { useMapContext } from './context/MapContext';
import { getMode, MapModes } from './modes';

const initialViewState = {
  width: 500,
  height: 500,
  longitude: 0,
  latitude: 0,
  zoom: 3
};

export const Map: React.FC = () => {
  const mapContext = useMapContext()
  const mapMode = useMemo(() => getMode(mapContext.mode), [mapContext.mode])
  
  const layer = new EditableGeoJsonLayer({
    id: 'geojson-layer',
    data: mapContext.featureCollection,
    mode: mapMode,
    selectedFeatureIndexes: mapContext.selectedFeatureIndexes,

    onEdit: ({ updatedData, editType, ...props }) => {
      console.log(updatedData)
      console.log(props)
      if(editType === 'addFeature') mapContext.setFeatureCollection(updatedData);
    }
  });

  return (
    <div className='map'>
      <DeckGL 
        initialViewState={initialViewState} 
        layers={[layer]} 
        onClick={(evt, aa) => console.log(mapContext.mode, evt, aa)}
      />
    </div>
  )
}