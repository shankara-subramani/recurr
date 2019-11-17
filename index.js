//* Follow Unix Philosophy for APIs → Do one thing. Do it well.
// conforms to RFC5545 https://tools.ietf.org/html/rfc5545

const { RRule, RRuleSet, rrulestr } = require("rrule");

// Utils
const returnFreq = inputFreq => {
  let freq;
  switch (inputFreq) {
    case "YEARLY":
      return 0;
      break;
    case "MONTHLY":
      return 1;
      break;
    case "WEEKLY":
      return 2;
      break;
    case "DAILY":
      return 3;
      break;
    case "HOURLY":
      return 4;
      break;
    default:
  }
  return freq;
};

// ***************
// APIs
// ***************
// https://github.com/jakubroztocil/rrule#api
const getUTC = (date) => {
  let year = new Date(date).getFullYear()
  let month = new Date(date).getMonth()
  let dt = new Date(date).getDate()
  return [year, month, dt]
}
const recurr = (
  frequency = 1,
  interval = 1,
  startDate = new Date(),
  endDate = new Date(),
  onWeekDays = [0, 1, 2, 3, 4, 5, 6]
) => {
  let stUTC = getUTC(startDate)
  let endUTC = getUTC(endDate)
  const rule = new RRule({
    freq: returnFreq(frequency),
    interval: interval,
    byweekday: onWeekDays,
    dtstart: new Date(Date.UTC(stUTC[0], stUTC[1], stUTC[2], 0, 0, 0)),
    until: new Date(Date.UTC(endUTC[0], endUTC[1], endUTC[2], 0, 0, 0))
  });
  return [rule.all(), rule.toText(), rule.toString()];
};
// ***************
// Usage
// ***************
// fn(frequency, interval, startDate, endDate, daysOfWeek)
module.exports = {
  recurr
};
