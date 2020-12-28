export const weatherIcon = icon => {
    if (icon === '01d') {
      return 'clear-sky-day';
    } else if (icon === '01n') {
      return 'clear-sky-night';
    } else if (icon === '02d') {
      return 'few-clouds-day';
    } else if (icon === '02n') {
      return 'few-clouds-night';
    } else if (icon === '03d' || icon === '03n') {
      return 'scattered-clouds';
    } else if (icon === '04d' || icon === '04n') {
      return 'broken-clouds';
    } else if (icon === '09d' || icon === '09n' || icon === '10d' || icon === '10n') {
      return 'rain';
    } else if (icon === '11d' || icon === '11n') {
      return 'thunderstorm';
    } else if (icon === '13d' || icon === '13n') {
      return 'snow';
    } else if (icon === '50d' || icon === '50n') {
      return 'fog';
    }
  };