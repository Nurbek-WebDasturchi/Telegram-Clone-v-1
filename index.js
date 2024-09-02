document.addEventListener("DOMContentLoaded", function () {
    const inputs = [
        document.getElementById('input1'),
        document.getElementById('input2'),
        document.getElementById('input3'),
        document.getElementById('input4'),
        document.getElementById('input5')
    ];

    const buttons = document.querySelectorAll('.row button');
    const nextButton = document.querySelector('.button-container button');
    const validationMessageContainer = document.getElementById('validation-message-container'); // Validatsiya xabari uchun konteyner
    let activeInputIndex = 0;

    function updateInputReadonly() {
        if (window.innerWidth <= 767) {
            inputs.forEach(input => {
                input.setAttribute('readonly', true);
            });
        } else {
            inputs.forEach(input => {
                input.removeAttribute('readonly');
            });
        }
    }

    updateInputReadonly();
    window.addEventListener('resize', updateInputReadonly);

    function showValidationMessage(message, isValid) {
        validationMessageContainer.textContent = message;
        validationMessageContainer.style.color = isValid ? 'green' : 'red';
        validationMessageContainer.style.fontSize = '16px';
    }

    function hideValidationMessage() {
        validationMessageContainer.textContent = '';
    }

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            if (this.querySelector('svg.bi-backspace')) {
                if (window.innerWidth >= 768) {
                    if (activeInputIndex >= 0) {
                        inputs[activeInputIndex].value = '';
                        inputs[activeInputIndex].style.borderColor = ''; // Rangni tiklash
                        hideValidationMessage(); // Validatsiya xabarini yashirish
                        if (activeInputIndex > 0) {
                            activeInputIndex--;
                            inputs[activeInputIndex].focus();
                        }
                    }
                } else {
                    inputs.forEach(input => {
                        input.value = '';
                        input.style.borderColor = ''; // Rangni tiklash
                    });
                    hideValidationMessage(); // Validatsiya xabarini yashirish
                    activeInputIndex = 0;
                    inputs[activeInputIndex].focus();
                }
            } else {
                const number = this.textContent.trim();
                if (activeInputIndex < inputs.length) {
                    inputs[activeInputIndex].value = number;
                    inputs[activeInputIndex].style.borderColor = ''; // Rangni tiklash
                    if (activeInputIndex < inputs.length - 1) {
                        activeInputIndex++;
                        inputs[activeInputIndex].focus();
                    } else {
                        checkCodeAndRedirect();
                    }
                }
            }
        });
    });

    inputs.forEach((input, index) => {
        input.addEventListener('input', function () {
            if (this.value.length >= this.maxLength) {
                this.style.borderColor = ''; // Rangni tiklash
                if (index < inputs.length - 1) {
                    activeInputIndex = index + 1;
                    inputs[activeInputIndex].focus();
                } else {
                    checkCodeAndRedirect();
                }
            } else if (this.value === '') {
                this.style.borderColor = ''; // Bo'sh bo'lganda rangni tiklash
                hideValidationMessage(); // Validatsiya xabarini yashirish
            }
        });

        input.addEventListener('keydown', function (e) {
            if (e.key === "Backspace" && this.value === '' && index > 0) {
                activeInputIndex = index - 1;
                inputs[activeInputIndex].value = '';
                inputs[activeInputIndex].style.borderColor = ''; // Rangni tiklash
                hideValidationMessage(); // Validatsiya xabarini yashirish
                inputs[activeInputIndex].focus();
            }
        });
    });

    function checkCodeAndRedirect() {
        const code = inputs.map(input => input.value).join('');
        if (code === "12345") {
            inputs.forEach(input => {
                input.setAttribute('readonly', true);
                input.style.borderColor = 'green'; // To'g'ri qiymat kiritilganda yashil rang
            });
            showValidationMessage('Kod to\'g\'ri kiritildi!', true);
            setTimeout(function () {
                window.location.href = './start.html';
            }, 1200); // Yashil rang ko'rinishi uchun 1.2 soniya kutish
        } else {
            inputs.forEach(input => {
                input.style.borderColor = 'red'; // Noto'g'ri kiritilganda qizil rangga o'tkazish
            });
            showValidationMessage('Kod noto\'g\'ri kiritildi, qayta urinib ko\'ring.', false);
        }
    }

    // Agar Next tugmasi HTMLda bo'lsa, ushbu kodni olib tashlash mumkin
    if (nextButton) {
        nextButton.addEventListener('click', checkCodeAndRedirect);
    }
});
