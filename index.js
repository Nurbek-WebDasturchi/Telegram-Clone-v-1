// Avvalgi JavaScript kodingiz
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
            const number = this.textContent.trim();

            if (number === "O'chirish") {
                // Agar O'chirish tugmasi bosilgan bo'lsa
                inputs.forEach(input => {
                    input.value = ''; // Barcha input maydonlarini tozalash
                });
                activeInputIndex = 0; // Birinchi inputga qaytish
                inputs[activeInputIndex].focus(); // Fokusni qayta o'rnatish
            } else {
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

// Ilgari kiritilgan avtomatizatsiya kodini saqlash uchun
document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll(
        ".verification-code-container .input"
    );

    inputs.forEach((input, index) => {
        input.addEventListener("input", function () {
            if (this.value.length === 1) {
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            } else if (this.value.length === 0 && index > 0) {
                inputs[index - 1].focus();
            }
        });

        input.addEventListener("keydown", function (e) {
            if (
                e.key === "Backspace" &&
                this.value.length === 0 &&
                index > 0
            ) {
                inputs[index - 1].focus();
            }
        });
    });
});
