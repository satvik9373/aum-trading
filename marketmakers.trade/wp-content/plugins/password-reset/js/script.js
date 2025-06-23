jQuery(document).ready(function($) {
    resetPasswordAdminPanel()
    closeResetPopup()
    openResetPopup()
    getCodeForRecover()
});

function resetPasswordAdminPanel() {
    $('form[name="custom_reset_password_form"]').submit(function(e) {
        const password1 = $('#pass1').val();
        const password2 = $('#pass2').val();
        const message = document.querySelector('.error-message');
        const fields = document.querySelectorAll('.field');

        message.innerHTML = '';

        if (password1 === '' || password2 === '') {
            e.preventDefault();
            message.innerHTML = 'Password cannot be empty.';

            fields.forEach((field) => {
                field.style.border = '1px solid rgb(244 67 54 / 53%)'
            })

            return;
        }

        if (password1 !== password2) {
            e.preventDefault();
            message.innerHTML = 'Passwords do not match.';

            fields.forEach((field) => {
                field.style.border = '1px solid rgb(244 67 54 / 53%)'
            })

            return;
        }
    });
}

function closeResetPopup() {
    if (document.querySelector('.popup__password-reset') && document.querySelector('.reset__close')) {
        const closes = document.querySelectorAll('.popup__password-reset .reset__close'),
            block = document.querySelector('.popup__password-reset');

        closes.forEach((close) => {
            close.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('body').style.overflowY = 'auto';
                block.style.display = 'none';
            })
        })
    }
}

function openResetPopup() {
    if (document.querySelector('.popup__password-reset') && document.querySelector('.reset__open-popup')) {
        const btns = document.querySelectorAll('.reset__open-popup'),
            block = document.querySelector('.popup__password-reset');

        btns.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('body').style.overflowY = 'hidden';
                block.style.display = 'flex';
            })
        })
    }
}

function sendRecoverCodeToMail(email) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            type: 'POST',
            url: mm_ajax.ajaxurl,
            data: {
                action: 'send_recover_code_to_mail',
                email: email,
                mmRecoverCode: mm_ajax.security
            },
            success: function(response) {
                resolve(response);
            },
            error: function(errorThrown) {
                reject(errorThrown);
            }
        });
    });
}

function checkNewCode(code, email) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            type: 'POST',
            url: mm_ajax.ajaxurl,
            data: {
                action: 'check_new_recovery_code',
                email: email,
                code: code,
                mmRecoverCodeCheck: mm_ajax.security
            },
            success: function(response) {
                resolve(response);
            },
            error: function(errorThrown) {
                reject(errorThrown);
            }
        });
    });
}

function setNewPasswordAfterRecover(password, email) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            type: 'POST',
            url: mm_ajax.ajaxurl,
            data: {
                action: 'set_new_password_after_recover',
                email: email,
                value: password,
                mmSaveNewPass: mm_ajax.security
            },
            success: function(response) {
                resolve(response);
            },
            error: function(errorThrown) {
                reject(errorThrown);
            }
        });
    });
}

function authorizationPlugin(username, password) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            type: 'POST',
            url: mm_ajax.ajaxurl,
            data: {
                action: 'checkout_user_login',
                username: username,
                password: password,
                lmmCheck: mm_ajax.security
            },
            success: function(response) {
                resolve(response);
            },
            error: function(errorThrown) {
                reject(errorThrown);
            }
        });
    });
}

function validEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
}

function validPassword(password) {
    const passwordRegex = /^[A-Za-z0-9]+$/;
    return passwordRegex.test(password);
}

function errorInput(inputName, errorName, information) {
    const input = document.querySelector(inputName);
    const error = document.querySelector(errorName);

    if (input) {
        input.style.border = '1px solid rgb(134 38 38)';
    }

    if (error) {
        error.innerHTML = information;
    }
}

function defaultInput(inputName, errorName) {
    const input = document.querySelector(inputName);
    const error = document.querySelector(errorName);

    if (input) {
        input.style.border = '1px solid rgba(167, 197, 231, 0.16)';
    }

    if (error) {
        error.innerHTML = '';
    }
}

function doneInput(inputName, errorName) {
    const input = document.querySelector(inputName);
    const error = document.querySelector(errorName);

    if (input) {
        input.style.border = '1px solid rgb(79 210 152)';
    }

    if (error) {
        error.innerHTML = '';
    }
}

function informationPluginInput(inputName, errorName, information) {
    const input = document.querySelector(inputName);
    const error = document.querySelector(errorName);

    if (input) {
        input.style.border = '1px solid rgb(79, 210, 152)';
    }

    if (error) {
        error.innerHTML = information;
    }
}

function getCodeForRecover() {
    if (document.querySelector('.popup__password-reset')) {
        const btn = document.querySelector('.popup__password-reset .reset__button_recover-password'),
            email = document.querySelector('.popup__password-reset .email-recover input'),
            formBox = document.querySelector('.popup__password-reset .form__box'),
            preloader = document.querySelector('.popup__password-reset .reset__process');

        if (email) {
            email.addEventListener('blur', () => {
                try {
                    defaultInput('.popup__password-reset .email-recover input', '.popup__password-reset .email-recover .error')
                } catch (error) {}

                if (!email.value == '') {
                    if (!validEmail(email.value)) {
                        try {
                            errorInput('.popup__password-reset .email-recover input', '.popup__password-reset .email-recover .error', 'Incorrect email')
                        } catch (error) {}
                    } else {
                        try {
                            doneInput('.popup__password-reset .email-recover input', '.popup__password-reset .email-recover .error', '')
                        } catch (error) {}
                    }
                } else {
                    try {
                        errorInput('.popup__password-reset .email-recover input', '.popup__password-reset .email-recover .error', 'Field required')
                    } catch (error) {}
                }
            })
        }

        if (email) {
            email.addEventListener('input', () => {
                if (!email.value == '') {
                    try {
                        doneInput('.popup__password-reset .email-recover input', '.popup__password-reset .email-recover .error', '')
                    } catch (error) {}
                }
            })
        }

        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();

                if (!email.value == '') {
                    if (!validEmail(email.value)) {
                        try {
                            errorInput('.popup__password-reset .email-recover input', '.popup__password-reset .email-recover .error', 'Incorrect email')
                        } catch (error) {}
                    } else {
                        try {
                            doneInput('.popup__password-reset .email-recover input', '.popup__password-reset .email-recover .error', '')
                        } catch (error) {}

                        try {
                            btn.innerHTML = '';
                            btn.style.background = 'rgba(79, 210, 152, 0.5)';
                        } catch (error) {}

                        try {
                            preloader.style.display = 'flex';
                        } catch (error) {}

                        try {
                            sendRecoverCodeToMail(email.value)
                                .then(function(response) {
                                    if (response.success === false) {
                                        try {
                                            errorInput('.popup__password-reset .email-recover input', '.popup__password-reset .email-recover .error', response.data)
                                        } catch (error) {}

                                        try {
                                            btn.innerHTML = 'Send';
                                            btn.style.background = '#4FD298';
                                        } catch (error) {}

                                        try {
                                            preloader.style.display = 'none';
                                        } catch (error) {}

                                    } else {
                                        try {
                                            informationPluginInput('.popup__password-reset .email-recover input', '.popup__password-reset .email-recover .information', 'The code has been sent')
                                        } catch (error) {}

                                        try {
                                            preloader.style.display = 'none';
                                        } catch (error) {}

                                        try {
                                            email.style.pointerEvents = 'none';
                                        } catch (error) {}

                                        try {
                                            btn.style.display = 'none';
                                        } catch (error) {}

                                        try {
                                            const recoveryCodeInput = generateNewInput('Code', 'code-recover', 'recoveryCode');
                                            formBox.appendChild(recoveryCodeInput);
                                        } catch (error) {}

                                        try {
                                            const sendButton = generateSendButton("Send", "reset__button reset__button_g-code");
                                            formBox.appendChild(sendButton);
                                        } catch (error) {}

                                        try {
                                            recoverCodeField()
                                        } catch (error) {}
                                    }
                                })
                                .catch(function(error) {});
                        } catch (error) {}
                    }
                } else {
                    try {
                        errorInput('.popup__password-reset .email-recover input', '.popup__password-reset .email-recover .error', 'Field required')
                    } catch (error) {}
                }
            })
        }
    }
}

function recoverCodeField() {
    if (document.querySelector('.popup__password-reset')) {
        const btn = document.querySelector('.popup__password-reset .reset__button_g-code'),
            field = document.querySelector('.popup__password-reset .code-recover input'),
            email = document.querySelector('.popup__password-reset .email-recover input'),
            formBox = document.querySelector('.popup__password-reset .form__box'),
            fieldCode = document.querySelector('.popup__password-reset .code-recover'),
            preloader = document.querySelector('.popup__password-reset .reset__process');


        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();

                if (field.value == '') {
                    try {
                        errorInput('.popup__password-reset .code-recover input', '.popup__password-reset .code-recover .error', 'Field required')
                    } catch (error) {}
                } else {
                    try {
                        doneInput('.popup__password-reset .code-recover input', '.popup__password-reset .code-recover .error', '')
                    } catch (error) {}

                    try {
                        preloader.style.display = 'flex';
                    } catch (error) {}

                    try {
                        btn.innerHTML = '';
                    } catch (error) {}

                    try {
                        btn.style.background = 'rgba(79, 210, 152, 0.5)';
                    } catch (error) {}

                    checkNewCode(field.value, email.value)
                        .then(function(response) {
                            if (response.success === false) {
                                try {
                                    preloader.style.display = 'none';
                                } catch (error) {}

                                try {
                                    errorInput('.popup__password-reset .code-recover input', '.popup__password-reset .code-recover .error', response.data)
                                } catch (error) {}

                                try {
                                    btn.style.background = '#4FD298';
                                    btn.innerHTML = 'Send';
                                } catch (error) {}

                            } else {
                                try {
                                    btn.innerHTML = 'Send';
                                    btn.style.background = '#4FD298';
                                    btn.style.display = 'none';
                                } catch (error) {}

                                try {
                                    const recoveryCodeInput = generateNewInput('New password', 'new-password-recover', 'newPasswordRecover');
                                    formBox.appendChild(recoveryCodeInput);
                                } catch (error) {}

                                try {
                                    const sendButton = generateSendButton("Send", "reset__button reset__button_sn-password");
                                    formBox.appendChild(sendButton);
                                } catch (error) {}

                                try {
                                    saveNewPassword()
                                } catch (error) {}

                                try {
                                    preloader.style.display = 'none';
                                } catch (error) {}

                                try {
                                    fieldCode.style.pointerEvents = 'none';
                                } catch (error) {}
                            }
                        })
                        .catch(function(error) {});
                }
            })
        }
    }
}

function saveNewPassword() {
    if (document.querySelector('.popup__password-reset')) {
        const btn = document.querySelector('.popup__password-reset .reset__button_sn-password'),
            email = document.querySelector('.popup__password-reset .email-recover input'),
            fieldNewPassword = document.querySelector('.popup__password-reset .new-password-recover'),
            fieldNewPasswordInput = document.querySelector('.popup__password-reset .new-password-recover input'),
            preloader = document.querySelector('.popup__password-reset .reset__process');


        fieldNewPasswordInput.addEventListener('input', () => {
            try {
                defaultInput('.popup__password-reset .new-password-recover input', '.popup__password-reset .new-password-recover .error', '')
            } catch (error) {}

            if (!fieldNewPasswordInput.value == '') {
                try {
                    doneInput('.popup__password-reset .new-password-recover input', '.popup__password-reset .new-password-recover .error', '')
                } catch (error) {}
            }
        })

        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();

                if (fieldNewPasswordInput.value == '') {
                    try {
                        errorInput('.popup__password-reset .new-password-recover input', '.popup__password-reset .new-password-recover .error', 'Field required')
                    } catch (error) {}

                } else {
                    if (validPassword(fieldNewPasswordInput.value)) {
                        try {
                            doneInput('.popup__password-reset .new-password-recover input', '.popup__password-reset .new-password-recover .error', '')
                        } catch (error) {}

                        try {
                            preloader.style.display = 'flex';
                        } catch (error) {}

                        try {
                            btn.innerHTML = '';
                            btn.style.background = 'rgba(79, 210, 152, 0.5)';
                        } catch (error) {}

                        try {
                            setNewPasswordAfterRecover(fieldNewPasswordInput.value, email.value)
                                .then(function(response) {
                                    if (response.success === false) {
                                        try {
                                            errorInput('.popup__password-reset .new-password-recover input', '.popup__password-reset .new-password-recover .error', response.data)
                                        } catch (error) {}

                                        try {
                                            preloader.style.display = 'none';
                                        } catch (error) {}

                                        try {
                                            btn.style.background = '#4FD298';
                                            btn.innerHTML = 'Send';
                                        } catch (error) {}

                                    } else {
                                        try {
                                            fieldNewPasswordInput.style.pointerEvents = 'none';
                                        } catch (error) {}

                                        try {
                                            preloader.style.display = 'none';
                                        } catch (error) {}

                                        try {
                                            fieldNewPassword.style.pointerEvents = 'none';
                                        } catch (error) {}

                                        if (document.querySelector('.page-template-page-checkout')) {
                                            try {
                                                authorizationPlugin(email.value, fieldNewPasswordInput.value)
                                                    .then(function(response) {
                                                        if (response.success === false) {
                                                            try {
                                                                errorInput('.new-password-recover input', '.new-password-recover .error', 'Error')
                                                            } catch (error) {}
                                                        } else {
                                                            location.reload();
                                                        }
                                                    })
                                                    .catch(function(error) {});
                                            } catch (error) {}
                                        } else {
                                            const currentDomain = window.location.origin;
                                            window.location.href = currentDomain + "/userprofile/";
                                        }
                                    }
                                })
                                .catch(function(error) {});
                        } catch (error) {}

                    } else {
                        try {
                            errorInput('.popup__password-reset .new-password-recover input', '.popup__password-reset .new-password-recover .error', 'Not correct password')
                        } catch (error) {}
                    }
                }
            })
        }
    }
}

function generateNewInput(name, className, nameForInput) {
    const label = document.createElement("label");
    label.setAttribute("for", nameForInput);
    label.setAttribute("class", className);
    label.style.display = "block";

    const spanName = document.createElement("span");
    spanName.setAttribute("class", 'reset__name');
    spanName.textContent = name;
    label.appendChild(spanName);

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", nameForInput);
    input.setAttribute("id", nameForInput);
    input.setAttribute("placeholder", name);
    label.appendChild(input);

    const spanError = document.createElement("span");
    spanError.setAttribute("class", "error");
    label.appendChild(spanError);

    return label;
}

function generateSendButton(textContent, className) {
    const button = document.createElement("button");
    button.setAttribute("class", className);
    button.textContent = textContent;

    return button;
}