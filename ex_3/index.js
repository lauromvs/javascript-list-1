function readjustSalary() {
    const salaryNow = parseFloat(document.getElementById('salaryNow').value).toFixed(2);
    const increasePercent = getReadjustPercent(salaryNow);
    const increaseValue = salaryNow * increasePercent / 100;
    const salaryNew = parseFloat(salaryNow) + increaseValue;

    document.getElementById('salaryOld').value = `R$ ${salaryNow}`;
    document.getElementById('increasePercent').value = `${increasePercent}%`;
    document.getElementById('increaseValue').value = `R$ ${increaseValue.toFixed(2)}`;
    document.getElementById('salaryNew').value = `R$ ${salaryNew.toFixed(2)}`;
    console.log('henlo', salaryNow)
}

function getReadjustPercent(salary) {
    if (salary > 1500) return 5
    if (salary > 700) return 10
    if (salary > 280) return 15
    return 20
}