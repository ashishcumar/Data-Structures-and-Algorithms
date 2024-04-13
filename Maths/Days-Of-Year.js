// RUN SCRIPT :- node Days-Of-Year.js

const totalDays = (date) => {
  let dayArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let dateSplit = date.split("-");
  let year = Number(dateSplit[0]);
  let month = Number(dateSplit[1]);
  let day = Number(dateSplit[2]);
  let days = 0;

  for (let i = 0; i < month - 1; i++) {
    days += dayArr[i];
  }
  days += day;

  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) && month > 2) {
    days++;
  }
  return days;
};
