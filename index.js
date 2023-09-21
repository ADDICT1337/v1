export default (content) => {
    const lines = content.split('\r\n').slice(1);
    const linesCount = lines.length;
    console.log(`Count: ${linesCount}`);

    const cities = lines.map(element => {
        const cityName = element.split(',')[7];
        return cityName;
    });

    const sortCity = [...new Set(cities)].sort().join(', ');
    console.log(`Cities: ${sortCity}`);

    let minHumidity = 100;
    let maxHumidity = 0;

    lines.forEach(element => {
        const humidity = element.split(',')[3];
            if (humidity < minHumidity) {
                minHumidity = humidity;
            };

            if (humidity > maxHumidity) {
                maxHumidity = humidity;
            };
    });
    console.log(`Humidity: Min: ${minHumidity}, Max: ${maxHumidity}`);

    let answer1 = '';
    let maxTemp = 0;

    lines.forEach(element => {
        const data = element.split(',');
        const temp = data[1];
            if(temp > maxTemp) {
                maxTemp = temp;
                const day = data[0];
                const city = data[7];
                answer1 = `${day} ${city}`;
            };
    });
    console.log(`HottestDay: ${answer1}`)
}