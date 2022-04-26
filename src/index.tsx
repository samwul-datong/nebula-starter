import ReactDOM from "react-dom";
import "./index.css";

import DeckGL from 'deck.gl';
import { DrawLineStringMode, EditableGeoJsonLayer, ViewMode } from 'nebula.gl';
import { useState } from "react";

const initialViewState = {
  longitude: -122.43,
  latitude: 37.775,
  zoom: 12,
};

const myFeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-122.46212548792364, 37.79026033616934],
            [-122.48435831844807, 37.77160302698496],
            [-122.45884849905971, 37.74414218845571],
            [-122.42863676726826, 37.76266965836386],
            [-122.46212548792364, 37.79026033616934],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-122.4136573004723, 37.78826678755718],
            [-122.44875601708893, 37.782670574261324],
            [-122.43793598592286, 37.74322062447909],
            [-122.40836932539945, 37.75125290412125],
            [-122.4136573004723, 37.78826678755718],
          ],
        ],
      },
    },
  ],
}

const selectedFeatureIndexes: any[] = [];

export const App = () => {
  const [coll, setColl] = useState(myFeatureCollection)


  const layer = new EditableGeoJsonLayer({
    id: 'geojson-layer',
    data: coll,
    mode: DrawLineStringMode,
    selectedFeatureIndexes,

    onEdit: ({ updatedData }) => {
      setColl(updatedData);
    }
  });

  return <DeckGL initialViewState={initialViewState} layers={[layer]} />;
};

export default ReactDOM.render(<App />, document.getElementById("root"));
