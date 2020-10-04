function getMedia() {

    const n1 = (document.getElementById('n1').value);
    const n2 = (document.getElementById('n2').value);
    const n3 = (document.getElementById('n3').value);
    const n4 = (document.getElementById('n4').value);
    const n5 = (document.getElementById('n5').value);

    const media = calcAvarege(n1, n2, n3, n4, n5);

    document.getElementById('media').value = media;

}

function calcAvarege(n1, n2, n3, n4, n5) {
    if (n5) {
        const media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4) + parseFloat(n5)) / 5;
        console.log(media);
        return media;

    } else {
        const media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4)) / 4;
        console.log(media);
        return media;
    }
}