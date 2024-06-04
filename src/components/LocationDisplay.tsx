import React, { useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const LocationDisplay: React.FC = () => {
  const { location, setLocation } = useAuth();

  useEffect(() => {
    const getCurrentLocation = async () => {
      try {
        if (!navigator.geolocation) {
          setLocation('Location not supported');
          return;
        }

        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            
            try {
              const response = await fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDr7hZhsJ7UM_5BJ9f6cl02Ypfp-iUPnd0`
              );
              
              const data = await response.json();
              
              if (data.results && data.results.length > 0) {
                const address = data.results[0];
                const city = address.address_components.find(
                  (component: any) => component.types.includes('locality')
                )?.long_name;
                const country = address.address_components.find(
                  (component: any) => component.types.includes('country')
                )?.short_name;
                
                setLocation(city ? `${city}, ${country || 'ET'}` : 'Ethiopia');
              } else {
                setLocation('Ethiopia');
              }
            } catch (error) {
              console.error('Geocoding error:', error);
              setLocation('Ethiopia');
            }
          },
          (error) => {
            console.error('Geolocation error:', error);
            setLocation('Ethiopia');
          },
          {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 300000
          }
        );
      } catch (error) {
        console.error('Location error:', error);
        setLocation('Ethiopia');
      }
    };

    getCurrentLocation();
  }, [setLocation]);

  return (
    <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-300">
      <MapPin className="h-4 w-4" />
      <span>Deliver to: {location}</span>
    </div>
  );
};

export default LocationDisplay;