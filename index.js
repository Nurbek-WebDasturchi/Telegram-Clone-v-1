// Raqamni kiritishda avtomatizatsiya
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
// Click qilganda raqamni inputga kiritish
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

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const number = this.textContent.trim(); // Tugmaning matnini olish va ortiqcha bo'shliqlarni olib tashlash

            if (activeInputIndex < inputs.length) {
                inputs[activeInputIndex].value = number; // Faol input maydoniga raqamni yozish
                activeInputIndex++; // Keyingi input maydoniga o'tish
                if (activeInputIndex < inputs.length) {
                    inputs[activeInputIndex].focus(); // Keyingi inputga fokus o'tkazish
                }
            }
        });
    });
});

