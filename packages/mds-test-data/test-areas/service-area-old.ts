import { FeatureCollection } from 'geojson'

export default {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-118.29144716262816, 34.01810937962584],
            [-118.29142570495605, 34.01101269922709],
            [-118.28724145889282, 34.01120835500923],
            [-118.28279972076417, 34.011279502454606],
            [-118.28294992446898, 34.01809159420095],
            [-118.29144716262816, 34.01810937962584]
          ]
        ]
      }
    }
  ]
} as FeatureCollection
