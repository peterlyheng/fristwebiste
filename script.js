document.addEventListener('DOMContentLoaded', function() {
    // Retrieve stored data
    const storedUsers = JSON.parse(localStorage.getItem('registeredUsers')) || {};
    let userCount = localStorage.getItem('userCount') || 0;

    // Initialize user count display
    document.getElementById('userCount').textContent = userCount;

    // Event listener for form submission
    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const responseMessage = document.getElementById('responseMessage');

        responseMessage.textContent = '';

        if (phone !== "" && password !== "" && confirmPassword !== "") {
            if (storedUsers[phone]) {
                responseMessage.textContent = 'Phone number already registered!';
                responseMessage.style.color = 'red';
                return;
            }

            if (password !== confirmPassword) {
                responseMessage.textContent = 'Passwords do not match!';
                responseMessage.style.color = 'red';
                return;
            }

            // Update stored users and user count
            storedUsers[phone] = true;
            userCount++;
            localStorage.setItem('registeredUsers', JSON.stringify(storedUsers));
            localStorage.setItem('userCount', userCount);
            // localStorage.removeItem('registeredUsers');
            // localStorage.removeItem('userCount');
            // userCount = 0;
            // Update the displayed user count
            document.getElementById('userCount').textContent = userCount;
            responseMessage.textContent = 'Successfully registered with completes';
            responseMessage.style.color = 'green';
            return;
        }

        responseMessage.textContent = 'Please input phone and password';
        responseMessage.style.color = 'red';
    });

    // Translations object
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
        },
        es: {
            signInText: "Iniciar sesión",
            registerTitle: "Registrar",
            phoneLabel: "Número de teléfono",
            passwordLabel: "Contraseña",
            confirmPasswordLabel: "Confirmar contraseña",
            submitButton: "Registrar e Iniciar sesión"
        },
        bn: {
            signInText: "সাইন ইন",
            registerTitle: "নিবন্ধন করুন",
            phoneLabel: "ফোন নম্বর",
            passwordLabel: "পাসওয়ার্ড",
            confirmPasswordLabel: "পাসওয়ার্ড নিশ্চিত করুন",
            submitButton: "নিবন্ধন করুন এবং সাইন ইন করুন"
        },
        zh: {
            signInText: "登录",
            registerTitle: "注册",
            phoneLabel: "电话号码",
            passwordLabel: "密码",
            confirmPasswordLabel: "确认密码",
            submitButton: "注册并登录"
        }
    };

    // Event listener for language selector
    document.getElementById("languageSelector").addEventListener("change", function() {
        const language = this.value;
        document.getElementById("signInText").innerText = translations[language].signInText;
        document.getElementById("registerTitle").innerText = translations[language].registerTitle;
        document.getElementById("phoneLabel").innerText = translations[language].phoneLabel;
        document.getElementById("passwordLabel").innerText = translations[language].passwordLabel;
        document.getElementById("confirmPasswordLabel").innerText = translations[language].confirmPasswordLabel;
        document.getElementById("submitButton").innerText = translations[language].submitButton;
    });
});
