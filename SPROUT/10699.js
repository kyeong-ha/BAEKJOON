// 오늘 날짜
const date = new Date();
const year = date.getFullYear();
const month = (date.getMonth()+1).toString().padStart(2, '0');
const day = date.getDate().toString().padStart(2, '0');

console.log(`${year}-${month}-${day}`);