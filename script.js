document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const responseMessage = document.getElementById('responseMessage');

    responseMessage.textContent = '';

    if (password !== confirmPassword) {
        responseMessage.textContent = 'Passwords do not match!';
        responseMessage.style.color = 'red';
        return;
    }

    responseMessage.textContent = `Successfully registered with completes`;
    responseMessage.style.color = 'green';
});
const translations = {
    en: {
        signInText: "Sign In",
        registerTitle: "Register",
        phoneLabel: "Phone Number",
        passwordLabel: "Password",
        confirmPasswordLabel: "Confirm Password",
        submitButton: "Register and Sign In"
    },
    tl: {
        signInText: "Mag-sign In",
        registerTitle: "Magrehistro",
        phoneLabel: "Numero ng Telepono",
        passwordLabel: "Password",
        confirmPasswordLabel: "I-enter muli ang password",
        submitButton: "Magrehistro at Mag-sign In"
    },
    vi: {
        signInText: "Đăng nhập",
        registerTitle: "Đăng ký",
        phoneLabel: "Số điện thoại",
        passwordLabel: "Mật khẩu",
        confirmPasswordLabel: "Xác nhận mật khẩu",
        submitButton: "Đăng ký và Đăng nhập"
    },
    ar: {
        signInText: "تسجيل الدخول",
        registerTitle: "تسجيل",
        phoneLabel: "رقم الهاتف",
        passwordLabel: "كلمة المرور",
        confirmPasswordLabel: "تأكيد كلمة المرور",
        submitButton: "سجل و تسجيل الدخول"
    },
    pt: {
        signInText: "Entrar",
        registerTitle: "Registrar",
        phoneLabel: "Número de telefone",
        passwordLabel: "Senha",
        confirmPasswordLabel: "Confirmar senha",
        submitButton: "Registrar e Entrar"
    }
};

document.getElementById("languageSelector").addEventListener("change", function() {
    const language = this.value;
    document.getElementById("signInText").innerText = translations[language].signInText;
    document.getElementById("registerTitle").innerText = translations[language].registerTitle;
    document.getElementById("phoneLabel").innerText = translations[language].phoneLabel;
    document.getElementById("passwordLabel").innerText = translations[language].passwordLabel;
    document.getElementById("confirmPasswordLabel").innerText = translations[language].confirmPasswordLabel;
    document.getElementById("submitButton").innerText = translations[language].submitButton;
});
