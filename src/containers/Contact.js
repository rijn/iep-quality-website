import React, { Component } from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import styles from '../styles/Contact.scss';
import { Row, Col } from 'antd';
import SubpageHeader from './SubpageHeader';

const MapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.30&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    center: { lat: 40.0911271, lng: -88.2402295 },
    zoom: 17
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={props.zoom}
    defaultCenter={props.center}
  >
    <Marker
      position={props.center}
    />
  </GoogleMap>
);

class Contact extends Component {
  render() {
    return (
      <div>
        <SubpageHeader
          title="Contact Us"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
        />
        <div class={styles.sectionB}>
          <Row>
            <Col span={8}>
              <h1>IEP Quality Inc.</h1>
              <br />
              <p>60 Hazelwood Dr.</p>
              <p>Champaign, IL 61820</p>
              <br />
              <p>p: (217) 840-0570</p>
              <p>e: gdf@iepquality.com</p>
            </Col>
            <Col span={16}>
              <MapComponent />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Contact;
