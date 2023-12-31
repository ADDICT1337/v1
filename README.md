## 1 шаг

Выведите количество записей с данными в переданном файле. Учтите, что первая строчка в CVS файле является заголовочной, она не содержит данных и не должна учитываться. Вывод утилиты будет таким:

```bash
bin/weather.js __fixtures__/weather1.csv
Count: 20
```

## 2 шаг

Выведите список городов, для которых есть информация о погоде в переданном файле. Города в этом списке отсортированы в алфавитном порядке.

```bash
bin/weather.js __fixtures__/weather1.csv
Count: 20 # Не забывайте что предыдущее решение остается работать
Cities: Chicago, Denver, Los Angeles, Miami, Seattle
```

## 3 шаг

Выведите минимальную и максимальную влажность, которая встречается в данных переданного файла.

```bash
bin/weather.js __fixtures__/weather1.csv
Count: 20
Cities: Chicago, Denver, Los Angeles, Miami, Seattle
Humidity: Min: 58, Max: 80
```

## 4 шаг

Выведите дату самой жаркой погоды и город, в котором была зафиксирована эта температура

```bash
bin/weather.js __fixtures__/weather1.csv
Count: 20
Cities: Chicago, Denver, Los Angeles, Miami, Seattle
Humidity: Min: 58, Max: 80
HottestDay: 2023-04-18 Los Angeles
```

## 5 шаг

Выведите самый жаркий город, основываясь на средней температуре в городе за дни указанные в файле. Средняя температура считается относительно значения `Max Temperature`.

С технической точки зрения, вам нужно посчитать среднюю температуру по каждому городу за указанную дату. Затем нужно определить в каком городе эта температура выше.

```bash
bin/weather.js __fixtures__/weather1.csv
Count: 20
Cities: Chicago, Denver, Los Angeles, Miami, Seattle
Humidity: Min: 58, Max: 80
HottestDay: 2023-04-18 Los Angeles
HottestCity: Miami
```