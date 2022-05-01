import { ModeProps, FeatureCollection, Feature, Point, FeatureOf, LineString } from "@nebula.gl/edit-modes";
import { BasePointerEvent, GuideFeatureCollection, PointerMoveEvent } from "@nebula.gl/edit-modes/dist-types/types";
import { GeoJsonEditMode } from "nebula.gl";

export class DrawWallMode extends GeoJsonEditMode{
  currentPoint: FeatureOf<Point> | null = null

  handleClick(event: BasePointerEvent, props: ModeProps<FeatureCollection>): void {
    const { mapCoords, picks } = event
    const { onEdit, data, lastPointerMoveEvent } = props

    const point = this.getPointFromEvent(lastPointerMoveEvent);
    if(this.currentPoint !== null){
      const lineString = this.LineStringFromPoints(this.currentPoint, point)
      onEdit(this.getAddFeatureAction(point, data))
      onEdit(this.getAddFeatureAction(lineString, data))
      this.currentPoint = point
      return
    }
    this.currentPoint = point
    onEdit(this.getAddFeatureAction(point, data))
  }

  getGuides(props: ModeProps<FeatureCollection>): GuideFeatureCollection {
      const defaultGuide: GuideFeatureCollection = {
        type: 'FeatureCollection',
        features: []
      }

      const { lastPointerMoveEvent } = props
      if(this.currentPoint !== null) {
        return this.getGuideLineFromEvent(lastPointerMoveEvent)
      }

      return defaultGuide
  }

  getPointFromEvent(event: PointerMoveEvent): FeatureOf<Point>{
    return {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: event.mapCoords
      }
    }
  }

  getGuideLineFromEvent(event: PointerMoveEvent): GuideFeatureCollection {
    return {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            guideType: "tentative"
          },
          geometry: {
            type: "LineString",

            coordinates: [
              this.currentPoint?.geometry.coordinates ?? [0, 0],
              event.mapCoords
            ]
          }
        }
      ]
    };
  }

  LineStringFromPoints(p1: FeatureOf<Point>, p2: FeatureOf<Point>): FeatureOf<LineString>{
    return {
      type: "Feature",
      properties: {
        guideType: "tentative"
      },
      geometry: {
        type: "LineString",

        coordinates: [
          p1.geometry.coordinates,
          p2.geometry.coordinates
        ]
      }
    }
  }
}