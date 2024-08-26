const moment = require('moment');

// Получаем текущую дату и время
const currentDate = moment();

// Форматирование даты и времени
console.log('Формат DD-MM-YYYY:', currentDate.format('DD-MM-YYYY'));
console.log('Формат MMM Do YY:', currentDate.format('MMM Do YY'));
console.log('День недели (dddd):', currentDate.format('dddd'));
