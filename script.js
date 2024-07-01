function currentTime() {
    const now = new Date();
    const hours = now.getUTCHours().toString().padStart(2, '0');
    const minutes = now.getUTCMinutes().toString().padStart(2, '0');
    const seconds = now.getUTCSeconds().toString().padStart(2, '0');
    const utcTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('current-time').innerText = utcTime;
}
setInterval(currentTime, 1000);
currentTime();

function currentDay() {
    const now = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const utcDay = days[now.getUTCDay()];
    document.getElementById('current-day').innerText = utcDay;
}
currentDay();