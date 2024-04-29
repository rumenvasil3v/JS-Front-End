function getInfo() {
    const baseUrl = 'http://localhost:3030/jsonstore/bus/businfo';
    const inputElementStopId = document.getElementById('stopId');
    const divStopName = document.getElementById('stopName');
    const ulList = document.getElementById('buses');
    ulList.textContent = '';
    const busId = inputElementStopId.value;

    if (!busId) {
        return;
    }

    fetch(`${baseUrl}/${busId}`)
        .then(response => response.json())
        .then(data => {
            const stopName = data.name;
            divStopName.textContent = stopName;

            for (const key in data.buses) {
                const text = `Bus ${key} arrives in ${data.buses[key]} minutes`;

                const li = document.createElement('li');
                li.textContent = text;
                ulList.appendChild(li);
            }
        })
        .catch(err => {
            divStopName.textContent = 'Error';
        });
}