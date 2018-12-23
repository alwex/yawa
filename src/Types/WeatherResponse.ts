import WeatherData from './WeatherData'

interface WeatherResponse {
  cod: string
  message: number
  cnt: number
  list: WeatherData[]
  city: {
    id: number
    name: string
    coord: {
      lat: number
      lon: number
    }
    country: string
    population: number
  }
}

export default WeatherResponse

const sample = {
  cod: '200',
  message: 0.0041,
  cnt: 7,
  list: [
    {
      dt: 1545458400,
      main: {
        temp: 293.08,
        temp_min: 293.079,
        temp_max: 293.08,
        pressure: 1010.25,
        sea_level: 1020.63,
        grnd_level: 1010.25,
        humidity: 60,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 88,
      },
      wind: {
        speed: 2.97,
        deg: 270.008,
      },
      rain: {},
      sys: {
        pod: 'd',
      },
      dt_txt: '2018-12-22 06:00:00',
    },
    {
      dt: 1545469200,
      main: {
        temp: 288.79,
        temp_min: 288.786,
        temp_max: 288.79,
        pressure: 1011.01,
        sea_level: 1021.46,
        grnd_level: 1011.01,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      clouds: {
        all: 44,
      },
      wind: {
        speed: 1.68,
        deg: 227.5,
      },
      rain: {},
      sys: {
        pod: 'n',
      },
      dt_txt: '2018-12-22 09:00:00',
    },
    {
      dt: 1545480000,
      main: {
        temp: 287.95,
        temp_min: 287.947,
        temp_max: 287.95,
        pressure: 1011.35,
        sea_level: 1021.8,
        grnd_level: 1011.35,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 92,
      },
      wind: {
        speed: 1.73,
        deg: 209.002,
      },
      rain: {
        '3h': 0.26,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2018-12-22 12:00:00',
    },
    {
      dt: 1545490800,
      main: {
        temp: 287.23,
        temp_min: 287.226,
        temp_max: 287.23,
        pressure: 1010.72,
        sea_level: 1021.32,
        grnd_level: 1010.72,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 80,
      },
      wind: {
        speed: 1.86,
        deg: 174.003,
      },
      rain: {
        '3h': 0.78,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2018-12-22 15:00:00',
    },
    {
      dt: 1545501600,
      main: {
        temp: 287.247,
        temp_min: 287.247,
        temp_max: 287.247,
        pressure: 1012.22,
        sea_level: 1022.8,
        grnd_level: 1012.22,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 44,
      },
      wind: {
        speed: 1.69,
        deg: 177.001,
      },
      rain: {
        '3h': 0.12,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2018-12-22 18:00:00',
    },
    {
      dt: 1545512400,
      main: {
        temp: 293.058,
        temp_min: 293.058,
        temp_max: 293.058,
        pressure: 1013.82,
        sea_level: 1024.37,
        grnd_level: 1013.82,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 44,
      },
      wind: {
        speed: 1.96,
        deg: 163.5,
      },
      rain: {},
      sys: {
        pod: 'd',
      },
      dt_txt: '2018-12-22 21:00:00',
    },
    {
      dt: 1545523200,
      main: {
        temp: 297.117,
        temp_min: 297.117,
        temp_max: 297.117,
        pressure: 1014.22,
        sea_level: 1024.73,
        grnd_level: 1014.22,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 80,
      },
      wind: {
        speed: 1.87,
        deg: 1.00015,
      },
      rain: {},
      sys: {
        pod: 'd',
      },
      dt_txt: '2018-12-23 00:00:00',
    },
  ],
  city: {
    id: 2190324,
    name: 'Hamilton',
    coord: {
      lat: -37.7834,
      lon: 175.2833,
    },
    country: 'NZ',
    population: 152641,
  },
}
