function attachEvents() {
    const baseURL = 'http://localhost:3030/jsonstore/forecaster';

    // Getting Elements
    const inputLocation = document.getElementById('location');
    const inputSubmit = document.getElementById('submit');
    const forecastDiv = document.getElementById('forecast');
    const currentDiv = document.getElementById('current');
    const upcomingDiv = document.getElementById('upcoming');

    inputSubmit.addEventListener('click', function() {
        forecastDiv.style.display = 'block';

        fetch(`${baseURL}/locations`)
            .then(response => response.json())
            .then(resultJSON => {
                const locationObject = resultJSON.find(({code, name}) => name === inputLocation.value);
                
                return (Promise.all([fetch(`${baseURL}/today/${locationObject.code}`)
                .then(response => response.json()),
                fetch(`${baseURL}/upcoming/${locationObject.code}`)
                .then(response => response.json())]));
            })
            .then(result => {
                 // Creating Elememnts
                const todayForecast = result[0];
                let upcomingForecast = result[1];
                upcomingForecast = Object.values(upcomingForecast)[0];

                console.log(todayForecast);
                const forecastsCurrentDiv = document.createElement('div');
                forecastsCurrentDiv.className = 'forecasts';
                    
                const conditionSymbolSpan = document.createElement('span');
                conditionSymbolSpan.className = 'condition symbol';
                conditionSymbolSpan.textContent = '☀';

                switch (todayForecast.forecast.condition) {
                    case 'Sunny':
                        conditionSymbolSpan.textContent = '☀';
                        break;
                    case 'Partly sunny':
                        conditionSymbolSpan.textContent = '⛅';
                        break;
                    case 'Overcast':
                        conditionSymbolSpan.textContent = '☁';
                        break;
                    case 'Rain':
                        conditionSymbolSpan.textContent = '☂';
                        break;
                }

                forecastsCurrentDiv.appendChild(conditionSymbolSpan);
                    
                // Current fiv condition span children
                const conditionSpan = document.createElement('span');
                conditionSpan.className = 'condition';
                    
                const forecastDataSpanLocation = document.createElement('span');
                forecastDataSpanLocation.className = 'forecast-data';
                forecastDataSpanLocation.textContent = todayForecast.name;
                    
                const forecastDataSpanTemperatures = document.createElement('span');
                forecastDataSpanTemperatures.className = 'forecast-data';
                forecastDataSpanTemperatures.textContent = `${todayForecast.forecast.low}°/${todayForecast.forecast.high}°`;
                    
                const forecastDataSpanCondition = document.createElement('span');
                forecastDataSpanCondition.className = 'forecast-data';
                forecastDataSpanCondition.textContent = todayForecast.forecast.condition;
                    
                conditionSpan.appendChild(forecastDataSpanLocation);
                conditionSpan.appendChild(forecastDataSpanTemperatures);
                conditionSpan.appendChild(forecastDataSpanCondition);
                    
                forecastsCurrentDiv.appendChild(conditionSpan);
                    
                currentDiv.appendChild(forecastsCurrentDiv);

                // Forecast Upcoming Div
                const forecastInfoDiv = document.createElement('div');
                forecastInfoDiv.className = 'forecast-info';

                // Creating upcoming span children
                for (const day of upcomingForecast) {
                    const upcomingSpan = document.createElement('span');
                    upcomingSpan.className = 'upcoming';
                
                    const spanSymbol = document.createElement('span');
                    spanSymbol.className = 'symbol';
                    
                    switch (day.condition) {
                        case 'Sunny':
                            spanSymbol.textContent = '☀';
                            break;
                        case 'Partly sunny':
                            spanSymbol.textContent = '⛅';
                            break;
                        case 'Overcast':
                            spanSymbol.textContent = '☁';
                            break;
                        case 'Rain':
                            spanSymbol.textContent = '☂';
                            break;
                    }

                    const spanForecastTemperatures = document.createElement('span');
                    spanForecastTemperatures.className = 'forecast-data';
                    spanForecastTemperatures.textContent = `${day.low}°/${day.high}°`;

                    const spanForecastCondition = document.createElement('span');
                    spanForecastCondition.className = 'forecast-data';
                    spanForecastCondition.textContent = day.condition;

                    upcomingSpan.appendChild(spanSymbol);
                    upcomingSpan.appendChild(spanForecastTemperatures);
                    upcomingSpan.appendChild(spanForecastCondition);

                    forecastInfoDiv.appendChild(upcomingSpan);
                }

                upcomingDiv.appendChild(forecastInfoDiv);

            })
            .catch(error => {
                forecastDiv.textContent = 'Error';
            });

    });
}

attachEvents();