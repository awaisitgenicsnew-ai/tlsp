"use client";

import { useEffect, useRef } from 'react';

export default function MapSection() {
  const mapRef = useRef(null);

  useEffect(() => {
    // Load Google Maps script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCsseyra7gHANxarhvKrT6V8echfynO77w&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Define the callback function globally
    window.initMap = () => {
      if (!mapRef.current) return;

      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 15,
        center: { lat: 25.185, lng: 55.274 },
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        styles: [
          {
            "elementType": "geometry",
            "stylers": [{ "color": "#f5f0e0" }]
          },
          {
            "elementType": "labels.icon",
            "stylers": [{ "visibility": "off" }]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#616161" }]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [{ "color": "#f5f0e0" }]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#bdbdbd" }]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{ "color": "#f5f0e0" }]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [{ "visibility": "off" }]
          },
          {
            "featureType": "poi.attraction",
            "elementType": "labels.text",
            "stylers": [{ "visibility": "on" }]
          },
          {
            "featureType": "poi.attraction",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#757575" }]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{ "color": "#e8f4e8" }]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text",
            "stylers": [{ "visibility": "on" }]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#9e9e9e" }]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{ "color": "#d5e0eb" }]
          },
          {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [{ "color": "#c8d5e3" }, { "weight": 1 }]
          },
          {
            "featureType": "road",
            "elementType": "labels.text",
            "stylers": [{ "visibility": "off" }]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{ "color": "#d5e0eb" }]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [{ "color": "#c8d5e3" }]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.text",
            "stylers": [{ "visibility": "on" }]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#9e9e9e" }]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{ "color": "#8fa8c0" }]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{ "color": "#7a95ad" }]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text",
            "stylers": [{ "visibility": "on" }]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#616161" }]
          },
          {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{ "color": "#d5e0eb" }]
          },
          {
            "featureType": "road.local",
            "elementType": "geometry.stroke",
            "stylers": [{ "color": "#c8d5e3" }]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text",
            "stylers": [{ "visibility": "off" }]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [{ "color": "#d1dbe7" }]
          },
          {
            "featureType": "transit.line",
            "elementType": "labels.text",
            "stylers": [{ "visibility": "on" }]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [{ "color": "#d1dbe7" }]
          },
          {
            "featureType": "transit.station",
            "elementType": "labels.text",
            "stylers": [{ "visibility": "on" }]
          },
          {
            "featureType": "transit.station",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#616161" }]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{ "color": "#9dd9e5" }]
          },
          {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [{ "color": "#9dd9e5" }]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#757575" }]
          }
        ]
      });

      const marker = new window.google.maps.Marker({
        position: { lat: 25.185, lng: 55.274 },
        map: map,
        title: 'PLT Tower - 57QC+C6C – Marasi Drive, Business Bay, Dubai'
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: '<div style="color: #000;"><strong>PLT TOWER</strong><br>57QC+C6C – Marasi Drive, Business Bay, Dubai</div>'
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col">
      <div className="absolute top-[40%] left-[90px] z-10 text-white text-left">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-wider">
          PROJECT<br />LOCATION
        </h2>
      </div>
      <div ref={mapRef} className="w-full h-full" />
    </section>
  );
}
