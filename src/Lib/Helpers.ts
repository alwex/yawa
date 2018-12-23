export const translateIcon = (iconCode: string): string => {
  switch (iconCode) {
    // day
    case '01d': return 'weather-sunny'
    case '02d': return 'weather-partlycloudy'
    case '03d': return 'weather-cloudy'
    case '04d': return 'weather-cloudy'
    case '09d': return 'weather-pouring'
    case '10d': return 'weather-rainy'
    case '11d': return 'weather-lightning'
    case '13d': return 'weather-snowy'
    case '50d': return 'weather-fog'
    // night
    case '01n': return 'weather-night'
    case '02n': return 'weather-partlycloudy'
    case '03n': return 'weather-cloudy'
    case '04n': return 'weather-cloudy'
    case '09n': return 'weather-pouring'
    case '10n': return 'weather-rainy'
    case '11n': return 'weather-lightning'
    case '13n': return 'weather-snowy'
    case '50n': return 'weather-fog'
    default: return 'weather-sunny'
  }
}
