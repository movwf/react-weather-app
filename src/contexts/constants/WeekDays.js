const weekDaysList = [
	"Mon",
	"Tue",
	"Wed",
	"Thu",
	"Fri",
	"Sat",
	"Sun"
];

const weekDaysLongList = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday"
];

export const WeekDaysShort = (abbrDay) => {
  const index = weekDaysList.indexOf(abbrDay);
  var newList = [];

   for(var i = 0; i < 7; i++){
     newList.push(weekDaysList[(index+i)%6]);
   }

  return newList;
  //const weekDaysLink = Object.assign();
}

export const WeekDaysLong = (abbrDay) => {
  const index = weekDaysList.indexOf(abbrDay);
  var newList = [];

   for(var i = 0; i < 7; i++){
     newList.push(weekDaysLongList[(index+i)%6]);
   }

  return newList;
}

