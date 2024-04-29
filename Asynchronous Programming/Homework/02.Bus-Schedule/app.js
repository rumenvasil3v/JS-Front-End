function solve() {
    let stopId = 'depot';
    let currentStopName = '';
    const baseURL = 'http://localhost:3030/jsonstore/bus/schedule';

    // Getting html elements
    const departButton = document.getElementById('depart');
    const arriveButton = document.getElementById('arrive');
    const infoBox = document.querySelector('div#info span.info');

    function depart() {

        // Having clicked depart, we make HTTP GET request to the server
        fetch(`${baseURL}/${stopId}`)
            .then(response => response.json())
            .then(result => {
                const stopName = result.name;
                currentStopName = stopName;

                const nextStopId = result.next;

                departButton.setAttribute('disabled', 'true');
                arriveButton.removeAttribute('disabled');

                stopId = nextStopId;
                infoBox.textContent = `Next stop ${stopName}`;
            })
            .catch(error => {
                departButton.setAttribute('disabled', 'true');
                arriveButton.setAttribute('disabled', 'true');

                infoBox.textContent = 'Error';
            });

    }

    // Having clicked arrive, we make HTTP GET request to the server
    async function arrive() {
        arriveButton.setAttribute('disabled', 'true');
        departButton.removeAttribute('disabled');
        
        infoBox.textContent = `Arriving at ${currentStopName}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
console.log(result);