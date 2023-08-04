const minusButton = document.querySelector('.minus');
const plusButton = document.querySelector('.plus');
const quantityInput = document.querySelector('#quantas-pessoas');

minusButton.addEventListener('click', function () {
    if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
});

plusButton.addEventListener('click', function () {
    quantityInput.value = parseInt(quantityInput.value) + 1;
});