document.addEventListener("DOMContentLoaded", function() {
    // 5 ta inputlarni olish
    const inputs = [
        document.getElementById('input1'),
        document.getElementById('input2'),
        document.getElementById('input3'),
        document.getElementById('input4'),
        document.getElementById('input5')
    ];

    // Tugmalarni olish
    const buttons = document.querySelectorAll('.row button');

    // Faol input maydonini kuzatish uchun o'zgaruvchi
    let activeInputIndex = 0;

    // Har bir tugmaga click eventni biriktirish
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const number = button.textContent; // Tugmaning ichidagi raqamni olish

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
