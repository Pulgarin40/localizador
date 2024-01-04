document.addEventListener('DOMContentLoaded', function () {
    updateTime();
    updateLocation();
  
    // Actualizar la hora cada segundo
    setInterval(updateTime, 1000);
  });
  
  function updateTime() {
    const timeElement = document.getElementById('time');
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString();
    timeElement.textContent = `Hora actual: ${formattedTime}`;
  }
  
  function updateLocation() {
    const locationElement = document.getElementById('location');
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          locationElement.textContent = `Ubicación: Latitud ${latitude}, Longitud ${longitude}`;
        },
        function (error) {
          locationElement.textContent = 'No se pudo obtener la ubicación.';
        }
      );
    } else {
      locationElement.textContent = 'La geolocalización no está soportada en este navegador.';
    }
  }
  