let topicsArray = [
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性",
    "條件判斷"
];

let startDate = new Date();

function setMonthAndDay(startMonth,startDay){
    
    startDate.setMonth(startMonth-1,startDay);

    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

// 指定社團課程
setMonthAndDay(2,21);
