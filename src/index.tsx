import ReactDOM from "react-dom";
import "./index.css";

import { Map } from "./Map";
import { MapContextProvider, useMapContextData } from "./context/MapContext";
import { ModesHeader } from "./ModesHeader";


export const App = () => {
  const mapContextData = useMapContextData()

  return <>
    <MapContextProvider value={mapContextData}>
      <div className="flex-down">
        <ModesHeader />
        <Map />
      </div>
    </MapContextProvider>
  </>
};

export default ReactDOM.render(<App />, document.getElementById("root"));
