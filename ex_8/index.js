function alertAiAs() {
    let num = document.getElementById('number_field').value;
    for (let i = 0; i < num; i++) {
        alert(`AIA${i + 1}`);
    }
}