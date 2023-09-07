import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import axios from 'axios';

function DeliveryLocation() {
  const [userLocation, setUserLocation] = useState(null);
  const [streetAddress, setStreetAddress] = useState('');

  useEffect(() => {
    // Use the Geolocation API to get the user's location
    console.log('useEffect is called');
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error('Error getting user location:', error);
      }
    );
  }, []);

  const reverseGeocode = async (lat, lng) => {
    try {
      const response = await axios.get('https://api.opencagedata.com/geocode/v1/json', {
        params: {
          q: `${lat},${lng}`,
          key: 'aa8c97b3838b4e31860cbcd400f66b2d',
        },
      });
      console.log('Geocoding Response:', response.data);
      if (response.data.results && response.data.results.length > 0) {
        const address = response.data.results[0].formatted;
        console.log('Street Address:', address);
        setStreetAddress(address);
      } else {
        console.error('No results found for reverse geocoding.');
      }
    } catch (error) {
      console.error('Error during reverse geocoding:', error);
    }
  };

  const handleMarkerDragEnd = (event) => {
    const { lat, lng } = event.target.getLatLng();
    setUserLocation({ lat, lng });
    reverseGeocode(lat, lng);
  };

  return (
    <div className='DeliveryTab'>
      {userLocation ? (
        <div className='MapContainer'>
          <MapContainer
            center={userLocation}
            zoom={20}
            style={{ width: '100%', height: '400px' }}
          >
            <TileLayer
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              attribution='© OpenStreetMap contributors'
            />
            <Marker
              position={userLocation}
              draggable={true}
              onDragend={handleMarkerDragEnd}
            />
          </MapContainer>
          <p>Drag and drop the pin to confirm your location.</p>
          <h2>Street Address: {streetAddress} (not working)</h2>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default DeliveryLocation;
