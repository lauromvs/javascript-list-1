let tallest = 0;
let tallestSex = '';
let countMale = 0;
let countFemale = 0;
let countTotal = 0;


function countNewPerson() {
    // alert(`Contagem esgotada. Homens: ${countMale} Mulheres:${countFemale} Mais Alto:${tallestSex} ${tallest}`);
    if (countTotal < 5) {
        const sex = document.getElementById('gender').value;
        const height = document.getElementById('height').value;

        if (height > tallest) {
            tallest = height;
            tallestSex = sex;
        }
        switch (sex) {
            case 'M':
                countMale += 1;
                break;
            case 'F':
                countFemale += 1;
                break;
        }

        countTotal += 1;
        let elementP = document.createElement('span');
        elementP.innerHTML = `${sex}, ${height}m`
        document.getElementById('output').append(elementP);
        console.log(height, sex);
        console.log(countTotal);

        if (countTotal == 5) {
            let elementP;
            elementP = document.createElement('p');
            elementP.innerHTML = `CONTAGEM ESGOTADA. HOMENS: ${countMale} MULHERES:${countFemale}.`
            document.getElementById('main').append(elementP);
            elementP = document.createElement('p');
            elementP.innerHTML = `MAIS ALTO: ${tallestSex}, ${tallest}m`
            document.getElementById('main').append(elementP);
        }

    }
}