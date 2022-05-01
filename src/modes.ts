import { DrawLineStringMode, DrawPointMode, DrawPolygonByDraggingMode, DrawPolygonMode, ViewMode } from "nebula.gl";

export type MapMode = 'view' | 'point' | 'linestring' | 'polygon' | 'polygon-dragging'

export const MapModes = {
  POINT: DrawPointMode,
  LINE_STRING: DrawLineStringMode,
  VIEW: ViewMode,
  POLYGON: DrawPolygonMode,
  POLYGON_GRAGGING: DrawPolygonByDraggingMode
}

export type RETURN_MODES = DrawPointMode | DrawLineStringMode | ViewMode | DrawPolygonMode | DrawPolygonByDraggingMode

export const getMode = (mode: MapMode) => {
  switch (mode) {
    case 'view': return MapModes.VIEW
    case 'point': return MapModes.POINT
    case 'linestring': return MapModes.LINE_STRING
    case 'polygon': return MapModes.POLYGON
    case 'polygon-dragging': return MapModes.POLYGON_GRAGGING
  }
}