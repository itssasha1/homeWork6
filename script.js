//Task 1
//Напишите функцию JavaScript, чтобы получить текущую дату. Передайте разделитель в качестве аргумента.

const firstBtn = document.getElementsByClassName('buttonTask1');
firstBtn[0].addEventListener('click', function(){
    const today = new Date();
    let day = today.getDate();
    let month = today.getMonth()+1;
    let year = today.getFullYear();

    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + month;

    alert(`${day}-${month}-${year}`);
});



//Task 2
//Напишите функцию JavaScript, чтобы получить название месяца с определенной даты.

const secondBtn = document.getElementsByClassName('buttonTask2');
secondBtn[0].addEventListener('click', function(){
    const today = new Date().toLocaleString('en', {       
        month: 'long'       
        });
    alert(today);
});



//Task 3
//Напишите функцию JavaScript для сравнения дат (т.е. больше, меньше или равно).

const thirdBtn = document.getElementsByClassName('buttonTask3');
thirdBtn[0].addEventListener('click', function(){
    const compareDates = function(date1, date2){
        if (date1 < date2) alert(`${date1} < ${date2}`);
        else if (date1 > date2) alert(`${date1} > ${date2}`);
        else alert(`${date1} = ${date2}`);
    }

    compareDates('18/12/1990', '18/12/1996');
});



//Task 4
//Напишите функцию JavaScript, чтобы проверить, является ли день выходным.

const fourthBtn = document.getElementsByClassName('buttonTask4');
fourthBtn[0].addEventListener('click', function(){
    const checkIsWeekend = function(date1){
        let today = new Date(date1);
        if(today.getDay() == 6 || today.getDay() == 0)
       {
        return('weekend');
        }
     else {
        return('not a weekend');
        }
    }
    alert(checkIsWeekend('Nov 27, 2022'));
});