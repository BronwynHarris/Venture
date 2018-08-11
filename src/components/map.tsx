import * as React from 'react';
import MapPopup from './mapPopup';
import ReactMapboxGl from 'react-mapbox-gl';
import { MonumentDict } from '../reducers/index';
import { MapEvent } from 'react-mapbox-gl/lib/map-events';
import MonumentLayer from './monumentLayer';
import { MonumentLayout } from './monumentLayer';


const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoiYnJvbnd5bmgiLCJhIjoiY2ppbjliM3RoMDF2cTNwbHhhYWpxaDA4aSJ9.Ck-5IjFlQeo_sEhv1g70vA'
});

const mapStyle = 'mapbox://styles/bronwynh/cjkfy25eb18d62rnkpxbow3y6';

const styles = {
  map: {
    position: 'absolute',
    left: 500,
    right: 0,
    bottom: 0,
    top: 0
  } as React.CSSProperties
};

export interface Props {
  monuments: MonumentDict;
  BoundsChanged: MapEvent;
  mapInit: MapEvent;
  center: number[];
  zoom: [number];
  hoveredItem: string;
  onMonumentClick: (k: string) => void;
  onMouseEnter: (key: string) => void;
  onMouseLeave: () => void;
}

const cultureLayout: MonumentLayout = {
  'icon-image': 'monument'
};

const natureLayout: MonumentLayout = {
  'icon-image': 'nature'
};

class NationalParkMap extends React.Component<Props> {
  private markerHover = (key: string, { map }: any) => {
      map.getCanvas().style.cursor = 'pointer';
      this.props.onMouseEnter(key);
  };

  private markerEndHover = (key: string, { map }: any) => {
      map.getCanvas().style.cursor = '';
      this.props.onMouseLeave();
  };

  public render() {
    const { monuments, BoundsChanged, mapInit, center, zoom, hoveredItem, onMonumentClick } = this.props;

    const cultural = Object.keys(monuments).filter(k => monuments[k].category !== 'Natural');
    const natural = Object.keys(monuments).filter(k => monuments[k].category === 'Cultural');

    return (
      <Map
        zoom={zoom}
        center={center}
        style={mapStyle}
        containerStyle={styles.map}
        onZoom={BoundsChanged}
        onStyleLoad={mapInit}
        onMove={BoundsChanged}>
          {
            !!hoveredItem ? (
              <MapPopup monument={monuments[hoveredItem]}/>
            ) : undefined
          }
          <MonumentLayer
            onMonumentClick={onMonumentClick}
            monuments={monuments}
            monumentIds={cultural}
            layout={cultureLayout}
            markerHover={this.markerHover}
            markerEndHover={this.markerEndHover}
          />
          <MonumentLayer
            onMonumentClick={onMonumentClick}
            monuments={monuments}
            layout={natureLayout}
            monumentIds={natural}
            markerHover={this.markerHover}
            markerEndHover={this.markerEndHover}
          />
      </Map>
    );
  }
};

export default NationalParkMap;
