function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="/" id="link">All cities</a>
  `;
}
function updateTime() {
  let addisAbabaElement = document.querySelector("#addis");
  if (addisAbabaElement) {
    let addisDateElement = document.querySelector(".date");
    let addisTimeElement = document.querySelector(".time");
    let addisAbaTime = moment().tz("Africa/Addis_Ababa");

    addisDateElement.innerHTML = addisAbaTime.format("MMMM	Do YYYY");
    addisTimeElement.innerHTML = addisAbaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let newYorkElement = document.querySelector("#newYork");
  if (newYorkElement) {
    let newYorkDateElement = document.querySelector(".date2");
    let newYorkTimeElement = document.querySelector(".time2");
    let newYorkTime = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format(
      "h:mm:ss [<small>]A[<small>]"
    );
  }
}

let chooseCityElement = document.querySelector("#chooseCity");
chooseCityElement.addEventListener("change", updateCity);

updateTime();
setInterval(updateTime, 1000);

updateTime2();
setInterval(updateTime, 1000);
