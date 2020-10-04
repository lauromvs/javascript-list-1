function writeDate() {
    const stringDate = document.getElementById('inpDate').value;

    const splitedString = stringDate.split('-')
    const year = splitedString[0];
    const month = splitedString[1];
    const day = splitedString[2];

    const monthName = getMonthName(month);

    const fullDate = `${day} de ${monthName} de ${year}`;

    if (day && monthName && year) {
        document.getElementById('fullDate').innerHTML = fullDate;
        //console.log(fullDate);
    }

}

function getMonthName(month) {
    if (month == 1) return 'Janeiro';
    if (month == 2) return 'Fevereiro';
    if (month == 3) return 'Março';
    if (month == 4) return 'Abril';
    if (month == 5) return 'Maio';
    if (month == 6) return 'Junho';
    if (month == 7) return 'Julho';
    if (month == 8) return 'Agosto';
    if (month == 9) return 'Setembro';
    if (month == 10) return 'Outubro';
    if (month == 11) return 'Novembro';
    if (month == 12) return 'Dezembro';
    return false;
}