interface WeatherData {
  dt: number
  main: {
    temp: number
    temp_min: number
    temp_max: number
    pressure: number
    sea_level: number
    grnd_level: number
    humidity: number
    temp_kf: number
  }
  weather: {
    id: number
    main: string
    description: string
    icon: string
  }
  clouds: {
    all: number
  }
  wind: {
    speed: number
    deg: number
  }
  rain: {}
  sys: {
    pod: string
  }
  dt_txt: string
}

export default WeatherData

const sample = {
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
}
