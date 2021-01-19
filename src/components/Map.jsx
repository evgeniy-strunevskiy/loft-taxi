import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl'
import PropTypes from "prop-types"

export class Map extends Component {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken = 
    'pk.eyJ1Ijoic21vZ3N0YXJ0IiwiYSI6ImNranY3N3JzZjA1dDMyd2w3Y2Z2Z2IyaGYifQ.VEcgQa8K1Ce5_ioSCS_gZg'

    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [30.3056504, 59.9429126],
      zoom: 10,
    })

  }

  componentWillUnmount() {
    this.map.remove()
  }

  render() {
    return <div className='map-wrapper'>
      <div data-testid='map' className='map' ref={this.mapContainer} />
    </div>
  }
}

Map.propTypes = {
  navigate: PropTypes.func.isRequired,
}