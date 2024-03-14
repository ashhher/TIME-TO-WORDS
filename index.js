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

  const timeArray = time.split(":");
  const mins = parseInt(timeArray[0]);
  const hours = parseInt(timeArray[1]);

  console.log("time", mins, hours);

  let minsResult = "";
  let hoursResult = "";

  let result = "";

  // convert hours
  if (mins <= 30) {
    {
      hoursResult = convertNumber(hours);
    }
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

  console.log(result);

  if (result === "") return result;


  if (mins <= 30) {
    result = `${minsResult} past ${hoursResult}`
  } else {
    result = `${hoursResult} to ${minsResult}`
  }
  console.log(result);
  return result;
}

const convertNumber = (number) => {
  console.log(number);
  switch (number) {
    case 1:
      return "one";
    case 2:
      return "two";
    case 3:
      return "three";
    case 8:
      return "eight";
    default:
      return number;
  }
}

module.exports = {
  convertTimeToWords
};