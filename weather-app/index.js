window.addEventListener("load", () => {
    //Runs After Page Is Loaded

    let longitude;
    let latitiute;

    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    let temperatureSection = document.querySelector(".temperature");
    const temperatureSpan = document.querySelector(".temperature span");
    //Only runs if User allows Location
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(position => {
            longitude = position.coords.longitude;
            latitiute = position.coords.latitude;

            //Handling Cors Error on front end
            const proxy = "https://cors-anywhere.herokuapp.com/"
            const api = `${proxy}https://api.darksky.net/forecast/c2d96d702176ce683de66cbcca35493f/${latitiute},${longitude}`;
            
            fetch(api)
            .then(response => response.json())
            .then(data => {
                const { temperature, summary, icon } = data.currently;

                temperatureDegree.textContent = temperature;
                temperatureDescription.textContent = summary;
                locationTimezone.textContent = data.timezone;

                let celsius = (temperature - 32) * (5 / 9);

                setIcon(icon, document.querySelector(".icon"));
                
                temperatureSection.addEventListener("click", () => {
                    if(temperatureSpan.textContent === "F")
                    {
                        temperatureSpan.textContent = "C";
                        temperatureDegree.textContent = Math.floor(celsius);
                    }
                    else 
                    {
                        temperatureSpan.textContent = "F";
                        temperatureDegree.textContent = temperature;
                    }
                });

            });
        });
    }

    function setIcon(icon, iconID) {
        const skycons = new Skycons({ color: "white"});
        const currentIcon = icon.replace("-", "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
});