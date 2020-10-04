console.log('hello')
function calculation() {
    const v1 = document.getElementById('value1').value;
    const v2 = document.getElementById('value2').value;
    document.getElementById('op1').innerHTML = `${v1} + ${v2}`;
    document.getElementById('op2').innerHTML = `${v1} * ${v2}`;
    document.getElementById('op3').innerHTML = `${v1} / ${v2}`;
    document.getElementById('op4').innerHTML = `${v1} % ${v2}`;

    const n1 = parseInt(v1);
    const n2 = parseInt(v2);

    document.getElementById('res1').innerHTML = n1 + n2;
    document.getElementById('res2').innerHTML = n1 * n2;
    document.getElementById('res3').innerHTML = n1 / n2;
    document.getElementById('res4').innerHTML = n1 % n2;
    console.log(n1, n2);
}