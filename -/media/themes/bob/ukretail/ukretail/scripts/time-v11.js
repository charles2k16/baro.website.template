var ukTime = document.getElementById('ukTime');
if (ukTime != null)
    setInterval(function () {
        ukTime.innerHTML= new Date().toLocaleTimeString('en-GB', { hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'Europe/London' });
}, 1000);

