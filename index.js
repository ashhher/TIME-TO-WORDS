const convertNumber = (number) => {
  switch (number) {
    case 1:
      return 'one';
    case 2:
      return 'two';
    case 3:
      return 'three';
    case 4:
      return 'four';
    case 5:
      return 'five';
    case 6:
      return 'six';
    case 7:
      return 'seven';
    case 8:
      return 'eight';
    case 9:
      return 'nine';
    case 10:
      return 'ten';
    case 11:
      return 'eleven';
    case 12:
      return 'twelve';
    case 13:
      return 'thirteen';
    case 14:
      return 'fourteen';
    case 15:
      return 'fifteen';
    case 16:
      return 'sisteen';
    case 17:
      return 'seventeen';
    case 18:
      return 'eighteen';
    case 19:
      return 'nintineen';
    case 20:
      return 'twenty';
    case 21:
      return 'twenty one';
    case 22:
      return 'twenty two';
    case 23:
      return 'twenty three';
    case 24:
      return 'twenty four';
    case 25:
      return 'twenty five';
    case 26:
      return 'twenty six';
    case 27:
      return 'twenty seven';
    case 28:
      return 'twenty eight';
    case 29:
      return 'twenty nine';
    default:
      return number;
  }
}

// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!

  // 1 edge cases
  // 1.1 midnight
  if (time === '0:00') {
    return 'midnight';
  }

  // 1.2 midday
  if (time === '12:00') {
    return 'midday';
  }

  const timeArray = time.split(':');

  if (Number.isNaN(timeArray[0]) || Number.isNaN(timeArray[1])) return false;

  const hours = parseInt(timeArray[0]);
  const mins = parseInt(timeArray[1]);

  let minsResult = '';
  let hoursResult = '';

  let result = '';

  // convert hours
  if (mins <= 30) {
    hoursResult = convertNumber(hours);
  } else {
    hoursResult = convertNumber(hours + 1);
  }

  // convert mins
  if (mins === 0) {
    // 2. [hour] o'clock'
    hoursResult = convertNumber(hours);
    result = hoursResult + " o'clock'";
  } else if (mins === 30) {
    // 3. half past [hour]
    result = `half past ${hoursResult}`;
  } else if (mins === 15 || mins === 45) {
    // 4. quater past/to [hour]
    if (mins === 15) result = `quarter past ${hoursResult}`;
    else result = `quarter to ${hoursResult}`;
  } else {
    // 5. [mins] past/to [hour]
    if (mins < 30) {
      minsResult = convertNumber(mins);
    } else {
      minsResult = convertNumber(60 - mins);
    }
  }

  if (result !== "") return result;

  if (mins <= 30) {
    result = `${minsResult} past ${hoursResult}`;
  } else {
    result = `${minsResult} to ${hoursResult}`;
  }

  return result;
}

module.exports = {
  convertTimeToWords
};