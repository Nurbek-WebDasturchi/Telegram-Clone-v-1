document.addEventListener("DOMContentLoaded", function () {
    const inputs = [
        document.getElementById('input1'),
        document.getElementById('input2'),
        document.getElementById('input3'),
        document.getElementById('input4'),
        document.getElementById('input5')
    ];

    const buttons = document.querySelectorAll('.row button');
    let activeInputIndex = 0;

    if (window.innerWidth <= 767) {
        inputs.forEach(input => {
            input.setAttribute('readonly', true);
        });
    }

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // O'chirish tugmasini aniqlash uchun 'bi-backspace' klassini tekshiradi
            if (this.querySelector('svg.bi-backspace')) {
                inputs.forEach(input => {
                    input.value = ''; // Barcha input maydonlarini tozalash
                });
                activeInputIndex = 0; // Birinchi inputga qaytish
                inputs[activeInputIndex].focus(); // Fokusni qayta o'rnatish
            } else {
                const number = this.textContent.trim();
                if (activeInputIndex < inputs.length) {
                    inputs[activeInputIndex].value = number;
                    activeInputIndex++;
                    if (activeInputIndex < inputs.length) {
                        inputs[activeInputIndex].focus();
                    }
                }
            }
        });
    });
});
