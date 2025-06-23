jQuery(document).ready(function($) {
    try {
        typeRegistration()
    } catch (error) {
        console.log(error)
    }

    try {
        checkSocialLogin()
    } catch (error) {
        console.log(error)
    }

    try {
        checkAuthorization()
    } catch (error) {
        console.log(error)
    }

    try {
        checkConnectDiscord()
    } catch (error) {
        console.log(error)
    }

    try {
        registration()
    } catch (error) {
        console.log(error)
    }

    try {
        login()
    } catch (error) {
        console.log(error)
    }

    try {
        animationLogin()
    } catch (error) {
        console.log(error)
    }

    try {
        checkEmail()
    } catch (error) {
        console.log(error)
    }

    try {
        checkUserName()
    } catch (error) {
        console.log(error)
    }

    try {
        password()
    } catch (error) {
        console.log(error)
    }

    try {
        initCountrySelect()
    } catch (error) {
        console.log(error)
    }

    try {
        setActualPrice()
    } catch (error) {
        console.log(error)
    }

    try {
        deleteProfile()
    } catch (error) {
        console.log(error)
    }

    try {
        closePopupBox()
    } catch (error) {
        console.log(error)
    }

    try {
        cancelMySubscribe()
    } catch (error) {
        console.log(error)
    }

    try {
        videoPage()
    } catch (error) {
        console.log(error)
    }

    try {
        analyticsPage()
    } catch (error) {
        console.log(error)
    }

    try {
        setAnalyticCategory()
    } catch (error) {
        console.log(error)
    }

    try {
        createActualLink()
    } catch (error) {
        console.log(error)
    }

    try {
        showHidePassword()
    } catch (error) {
        console.log(error)
    }

    try {
        popupDiscordConnected()
    } catch (error) {
        console.log(error)
    }

    try {
        shareArticle()
    } catch (error) {
        console.log(error)
    }

    try {
        getCanceledSubscriptionsForUser()
    } catch (error) {
        console.log(error)
    }
});

let dateUser = {
    email: '',
    username: '',
    password: '',
}

let payArray = {
    email: '',
    country: '',
    promoCode: '',
    package: '',
    price: '',
    interval: '',
}

function typeRegistration() {
    if (document.querySelector('.checkout')) {
        const page = document.querySelector('.checkout'),
            authorizationBlock = document.querySelector('.checkout .checkout__authorization'),
            payBlock = document.querySelector('.checkout .checkout__pay'),
            background = document.querySelector('.checkout .checkout__step_background'),
            close = document.querySelector('.checkout .checkout__close'),
            pagePreloader = document.querySelector('.checkout .checkout__check-type');

        const mmPlan = localStorage.getItem('mmPlan');

        if (mmPlan == 'Free') {
            try {
                if (page) {
                    page.classList.add('checkout-default');
                }
            } catch (error) {}

            try {
                if (authorizationBlock) {
                    authorizationBlock.style.display = 'block';
                }
            } catch (error) {}

            try {
                if (background) {
                    background.style.display = 'block';
                }
            } catch (error) {}

            try {
                if (close) {
                    close.style.display = 'block';
                }
            } catch (error) {}

            try {
                if (pagePreloader) {
                    pagePreloader.style.display = 'none';
                }
            } catch (error) {}

        } else {
            try {
                if (authorizationBlock) {
                    authorizationBlock.style.display = 'block';
                }
            } catch (error) {}

            try {
                if (close) {
                    close.style.display = 'block';
                }
            } catch (error) {}

            try {
                if (payBlock) {
                    payBlock.style.display = 'block';
                }
            } catch (error) {}

            try {
                if (document.documentElement.clientWidth < 650 && !document.querySelector('.logged-in')) {
                    if (payBlock) {
                        payBlock.style.display = 'none';
                        payBlock.classList.add('checkout__hide');
                    }
                }
            } catch (error) {}

            try {
                if (background) {
                    background.style.display = 'block';
                }
            } catch (error) {}

            try {
                if (pagePreloader) {
                    pagePreloader.style.display = 'none';
                }
            } catch (error) {}
        }
    }

    if (document.querySelector('.pricing-list .item__button')) {
        const btns = document.querySelectorAll('.pricing-list .item__button');

        btns.forEach((btn) => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-p-id');
                localStorage.setItem('mmPlan', id);
            })
        })
    }

    if (document.querySelector('.authorization .form__block .swpm-login-form-register-link')) {
        const btn = document.querySelector('.authorization .form__block .swpm-login-form-register-link');
        if (btn) {
            btn.addEventListener('click', () => {
                localStorage.setItem('mmPlan', 'Free');
            })
        }
    }
}

function checkEmail() {
    if (document.querySelector('.checkout .authorization__registration')) {
        const inputEmail = document.querySelector('.checkout .email input');

        if (inputEmail) {
            inputEmail.addEventListener('blur', () => {
                let email = document.querySelector('.checkout .email input').value;
                let checking = document.querySelector('.checkout .email .checking__process');

                if (email) {
                    if (isValidEmail(email)) {

                        if (checking) {
                            checking.style.display = 'flex';
                        }

                        try {
                            defaultInput('.checkout .email input', '.checkout .email .error', '')
                        } catch (error) {}

                        try {
                            let btnForgotPassword = document.querySelector('.checkout .authorization__links');
                            if (btnForgotPassword) {
                                btnForgotPassword.style.display = 'none';
                            }
                        } catch (error) {}

                        try {
                            let informationBlock = document.querySelector('.checkout .email .information');
                            if (informationBlock) {
                                informationBlock.style.display = 'none';
                            }
                        } catch (error) {}

                        try {
                            $.ajax({
                                type: 'POST',
                                url: mm_ajax.ajaxurl,
                                data: {
                                    action: 'checkout_check_email',
                                    email: email,
                                    emailCheck: mm_ajax.security
                                },
                                success: function(response) {
                                    try {
                                        checking.style.display = 'none';
                                    } catch (error) {}

                                    if (response.success == true) {
                                        try {
                                            doneInput('.checkout .email input', '.checkout .email .error')
                                        } catch (error) {}

                                        try {
                                            dateUser.email = email;
                                        } catch (error) {}

                                        try {
                                            createUserName()
                                        } catch (error) {}
                                    } else {
                                        try {
                                            dateUser.email = '';
                                        } catch (error) {}

                                        try {
                                            informationInput('.checkout .email input', '.checkout .email .information', 'You are already registered')
                                        } catch (error) {}

                                        try {
                                            createLinks('.checkout .authorization__form form .email', 'Restore password', 'authorization__forgot_password reset__open-popup', 'Sign In', 'authorization__signin');
                                        } catch (error) {}

                                        try {
                                            openResetPopupBlock()
                                        } catch (error) {}

                                        try {
                                            animationLogin()
                                        } catch (error) {}

                                        try {
                                            let btnForgotPassword = document.querySelector('.checkout .authorization__links');
                                            if (btnForgotPassword) {
                                                btnForgotPassword.style.display = 'flex';
                                            }
                                        } catch (error) {}

                                        try {
                                            let informationBlock = document.querySelector('.checkout .email .information');
                                            if (informationBlock) {
                                                informationBlock.style.display = 'block';
                                            }
                                        } catch (error) {}
                                    }
                                },
                                error: function(errorThrown) {}
                            });
                        } catch (error) {}

                        try {
                            defaultInput('.checkout .email input', '.checkout .email .error')
                        } catch (error) {}

                    } else {
                        try {
                            errorInput('.checkout .email input', '.checkout .email .error', 'Incorrect email')
                        } catch (error) {}

                        try {
                            let btnForgotPassword = document.querySelector('.checkout .authorization__links');
                            if (btnForgotPassword) {
                                btnForgotPassword.style.display = 'none';
                            }
                        } catch (error) {}

                        try {
                            let informationBlock = document.querySelector('.checkout .email .information');
                            if (informationBlock) {
                                informationBlock.style.display = 'none';
                            }
                        } catch (error) {}
                    }

                    if (email == '') {
                        try {
                            errorInput('.checkout .email input', '.checkout .email .error', 'Incorrect email')
                        } catch (error) {}

                        try {
                            let btnForgotPassword = document.querySelector('.checkout .authorization__links');
                            if (btnForgotPassword) {
                                btnForgotPassword.style.display = 'none';
                            }
                        } catch (error) {}

                        try {
                            let informationBlock = document.querySelector('.checkout .email .information');
                            if (informationBlock) {
                                informationBlock.style.display = 'none';
                            }
                        } catch (error) {}
                    }
                }
            })
        }
    }
}

function checkUserName() {
    if (document.querySelector('.checkout .authorization__registration')) {
        const inputName = document.querySelector('.checkout .username input');

        if (inputName) {
            inputName.addEventListener('blur', () => {
                let name = document.querySelector('.checkout .username input').value;
                let email = document.querySelector('.checkout .email input').value;
                let checking = document.querySelector('.checkout .username .checking__process');

                if (name) {
                    if (isValidUserName(name)) {
                        try {
                            if (checking) {
                                checking.style.display = 'flex';
                            }
                        } catch (error) {}

                        try {
                            defaultInput('.checkout .username input', '.checkout .username .error', '');
                        } catch (error) {}

                        try {
                            checkUser(name, email, checking);
                        } catch (error) {}
                    } else {
                        try {
                            errorInput('.checkout .username input', '.checkout .username .error', 'Incorrect username')
                        } catch (error) {}
                    }

                    if (name == '') {
                        try {
                            errorInput('.checkout .username input', '.checkout .username .error', 'Incorrect username')
                        } catch (error) {}
                    }
                }
            })
        }
    }
}

function checkUser(name, email, checking) {
    $.ajax({
        type: 'POST',
        url: mm_ajax.ajaxurl,
        data: {
            action: 'checkout_check_username',
            name: name,
            email: email,
            nameCheck: mm_ajax.security
        },
        success: function(response) {
            try {
                checking.style.display = 'none';
            } catch (error) {}
            if (response.success == true) {
                try {
                    doneInput('.checkout .username input', '.checkout .username .error')
                } catch (error) {}

                try {
                    dateUser.username = name;
                } catch (error) {}
            } else {
                try {
                    dateUser.username = '';
                } catch (error) {}

                try {
                    errorInput('.checkout .username input', '.checkout .username .error', 'Incorrect username')
                } catch (error) {}
            }
        },
        error: function(errorThrown) {}
    });
}

function checkPromoCode(value) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            type: 'POST',
            url: mm_ajax.ajaxurl,
            data: {
                action: 'checkout_check_promoCode',
                value: value,
                promoCodeCheck: mm_ajax.security
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

function checkStatusDiscord(email) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            type: 'POST',
            url: mm_ajax.ajaxurl,
            data: {
                action: 'checkout_status_discord',
                email: email,
                discordCheck: mm_ajax.security
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

function authorization(username, password) {
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

function getProductPrice() {
    return new Promise(function(resolve, reject) {
        $.ajax({
            type: 'POST',
            url: mm_ajax.ajaxurl,
            data: {
                action: 'get_product_price',
                getPriceCheck: mm_ajax.security
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

function actualK() {
    return new Promise(function(resolve, reject) {
        $.ajax({
            type: 'POST',
            url: mm_ajax.ajaxurl,
            data: {
                action: 'checkout_get_k',
                kCheck: mm_ajax.security
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

function getSubscribeForUser(email) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            type: 'POST',
            url: mm_ajax.ajaxurl,
            data: {
                action: 'get_check_subscribe',
                email: email,
                checkSubscribe: mm_ajax.security
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

function deleteSubscribe(email) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            type: 'POST',
            url: mm_ajax.ajaxurl,
            data: {
                action: 'delete_subscribe',
                email: email,
                deleteSubscribe: mm_ajax.security
            },
            success: function(response) {
                resolve(response);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                let errorMessage = '';

                try {
                    if (jqXHR.responseText) {
                        errorMessage = jqXHR.responseText;
                    } else if (errorThrown) {
                        errorMessage = errorThrown;
                    } else {
                        errorMessage = textStatus;
                    }
                } catch (e) {
                    errorMessage = 'Unknown error occurred';
                }

                window.globalSLHandler(
                    'delete-subscribe',
                    'Delete Subscribe',
                    `Client: ${email}. Error: ${errorMessage}`,
                    'high',
                    'subscription'
                );

                reject(errorMessage);
            }
        });
    });
}

function deleteSelectedSubscriptionHandler(subscription, email) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            type: 'POST',
            url: mm_ajax.ajaxurl,
            data: {
                action: 'delete_selected_subscription',
                subscription: subscription,
                email: email,
                deleteSubscribe: mm_ajax.security
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

function getCanceledSubscriptions(email) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            type: 'POST',
            url: mm_ajax.ajaxurl,
            data: {
                action: 'get_canceled_subscriptions',
                email: email,
                getCanceledSubscriptions: mm_ajax.security
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

function addingAdditionalUserEmail(email, newEmail) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            type: 'POST',
            url: mm_ajax.ajaxurl,
            data: {
                action: 'adding_additional_user_email',
                new_email: newEmail,
                email: email,
                addingAdditionalUserEmail: mm_ajax.security
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

function getAdditionalUserEmail(email) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            type: 'POST',
            url: mm_ajax.ajaxurl,
            data: {
                action: 'get_additional_user_email',
                email: email,
                getAdditionalUserEmail: mm_ajax.security
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

function rDeleteProfile() {
    return new Promise(function(resolve, reject) {
        $.ajax({
            type: 'POST',
            url: mm_ajax.ajaxurl,
            data: {
                action: 'delete_user_account',
                requestDeleteProfile: mm_ajax.security
            },
            success: function(response) {
                resolve(response);
            },
            error: function(errorThrown) {
                window.globalSLHandler('delete-profile', 'Delete Profile', `${errorThrown}`, 'medium', 'all');
                reject(errorThrown);
            }
        });
    });
}

function hUpdateCancelStatus(email) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            type: 'POST',
            url: mm_ajax.ajaxurl,
            data: {
                action: 'update_cancel_status',
                email: email,
                checkCancelStatus: mm_ajax.security
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

function hCancelCommunityMemberDiscord(email) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            type: 'POST',
            url: mm_ajax.ajaxurl,
            data: {
                action: 'cancel_community_member_discord',
                email: email,
                cancelCommunityMember: mm_ajax.security
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

function sendNotificationTelegram(title, description, secondDescription) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            type: 'POST',
            url: mm_ajax.ajaxurl,
            data: {
                action: 'send_notification_telegram',
                title,
                description,
                secondDescription,
                notificationTelegram: mm_ajax.security
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

function createMarketLog(event, status, message) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            type: 'POST',
            url: mm_ajax.ajaxurl,
            data: {
                action: 'create_market_log',
                event,
                status,
                message,
                createLog: mm_ajax.security
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

function verifyEmailCode(email, code) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            type: 'POST',
            url: mm_ajax.ajaxurl,
            data: {
                action: 'verify_email_code',
                email: email,
                code: code,
                checkingCode: mm_ajax.security
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

function sendCheckingCodeToUserMail(email) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            type: 'POST',
            url: mm_ajax.ajaxurl,
            data: {
                action: 'send_checking_code_to_user_mail',
                email: email,
                checkingCode: mm_ajax.security
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

function password() {
    if (document.querySelector('.checkout .authorization__registration')) {
        const inputPassword = document.querySelector('.checkout .password input'),
            inputPasswordRepeat = document.querySelector('.checkout .repeat-password input');

        if (inputPassword) {
            inputPassword.addEventListener('blur', () => {
                if (inputPassword.value == '') {
                    try {
                        errorInput('.checkout .password input', '.checkout .password .error', 'Field required')
                    } catch (error) {}
                }

                if (inputPassword.value == inputPasswordRepeat.value && !inputPassword.value == '' && !inputPasswordRepeat.value == '') {
                    try {
                        doneInput('.checkout .password input', '.checkout .password .error')
                        doneInput('.checkout .repeat-password input', '.checkout .repeat-password .error')
                    } catch (error) {}
                }

                try {
                    inputPasswordRepeat.value = '';
                } catch (error) {}

                try {
                    errorInput('.checkout .repeat-password input', '.checkout .repeat-password .error', 'Password mismatch')
                } catch (error) {}
            })
        }

        if (inputPasswordRepeat) {
            inputPasswordRepeat.addEventListener('blur', () => {
                if (inputPassword.value == inputPasswordRepeat.value && !inputPassword.value == '' && !inputPasswordRepeat.value == '') {
                    try {
                        doneInput('.checkout .password input', '.checkout .password .error')
                        doneInput('.checkout .repeat-password input', '.checkout .repeat-password .error')
                    } catch (error) {}

                    try {
                        dateUser.password = inputPasswordRepeat.value;
                    } catch (error) {}
                } else {
                    try {
                        errorInput('.checkout .password input', '.checkout .password .error', 'Password mismatch')
                        errorInput('.checkout .repeat-password input', '.checkout .repeat-password .error', 'Password mismatch')
                    } catch (error) {}
                }

                if (inputPasswordRepeat.value == '') {
                    try {
                        errorInput('.checkout .repeat-password input', '.checkout .repeat-password .error', 'Field required')
                    } catch (error) {}
                }

                if (inputPassword.value == '') {
                    try {
                        errorInput('.checkout .password input', '.checkout .password .error', 'Field required')
                    } catch (error) {}
                }
            })
        }
    }
}

function animationLogin() {
    if (document.querySelector('.checkout .authorization__login')) {
        const btnLogin = document.querySelector('.checkout .authorization__registration a'),
            btnLoginSecond = document.querySelector('.checkout .authorization__signin'),
            btnRegistration = document.querySelector('.checkout .authorization__login a'),
            registrationForm = document.querySelector('.checkout .authorization__registration'),
            boxLogin = document.querySelector('.checkout .authorization__login'),
            title = document.querySelector('.checkout .authorization__title');

        if (document.documentElement.clientWidth < 650) {
            if (btnLoginSecond && registrationForm) {
                btnLoginSecond.addEventListener('click', (e) => {
                    e.preventDefault();
                    registrationForm.style.display = 'none';
                    boxLogin.style.display = 'block';
                    title.innerHTML = '';
                    typeText('Login', title, function(success) {});
                })
            }

            if (btnLogin && registrationForm) {
                btnLogin.addEventListener('click', (e) => {
                    e.preventDefault();
                    registrationForm.style.display = 'none';
                    boxLogin.style.display = 'block';
                    title.innerHTML = '';
                    typeText('Login', title, function(success) {});
                })
            }

            if (btnRegistration && registrationForm) {
                btnRegistration.addEventListener('click', (e) => {
                    e.preventDefault();
                    registrationForm.style.display = 'block';
                    boxLogin.style.display = 'none';
                    title.innerHTML = '';
                    typeText('Registration', title, function(success) {});
                })
            }
        } else {
            if (btnLoginSecond && registrationForm) {
                btnLoginSecond.addEventListener('click', (e) => {
                    e.preventDefault();
                    registrationForm.style.marginLeft = '-430px';
                    title.innerHTML = '';
                    typeText('Login', title, function(success) {});
                })
            }

            if (btnLogin && registrationForm) {
                btnLogin.addEventListener('click', (e) => {
                    e.preventDefault();
                    registrationForm.style.marginLeft = '-430px';
                    title.innerHTML = '';
                    typeText('Login', title, function(success) {});
                })
            }

            if (btnRegistration && registrationForm) {
                btnRegistration.addEventListener('click', (e) => {
                    e.preventDefault();
                    registrationForm.style.marginLeft = '0px';
                    title.innerHTML = '';
                    typeText('Registration', title, function(success) {});
                })
            }
        }
    }
}

function typeText(text, container, callback) {
    let currentText = '';
    let index = 0;
    const textToType = text;

    function animate() {
        currentText += textToType[index];
        container.textContent = currentText;

        index++;

        if (index < textToType.length) {
            setTimeout(animate, 70);
        } else {
            callback(true);
        }
    }

    animate();
}

function createLinks(nameClassForBlock, textForgotPassword, classForgotPassword, textSignIn, classSignIn) {
    const parentElement = document.createElement('div');
    parentElement.className = 'authorization__links';

    const forgotPasswordLink = document.createElement('a');
    forgotPasswordLink.href = '#';
    forgotPasswordLink.textContent = textForgotPassword;
    forgotPasswordLink.className = classForgotPassword;

    const signInLink = document.createElement('a');
    signInLink.href = '#';
    signInLink.textContent = textSignIn;
    signInLink.className = classSignIn;

    parentElement.appendChild(signInLink);
    parentElement.appendChild(forgotPasswordLink);

    const input = document.querySelector(nameClassForBlock);
    if (input) {
        input.parentNode.insertBefore(parentElement, input.nextSibling);
    }
}

function openResetPopupBlock() {
    if (document.querySelector('.checkout')) {
        const buttons = document.querySelectorAll('.reset__open-popup'),
            block = document.querySelector('.popup__password-reset'),
            emailInputForm = document.querySelector('.checkout .authorization__form form .email input'),
            emailInputPopup = document.querySelector('.popup__password-reset .reset__form input');

        if (buttons) {
            buttons.forEach((button) => {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    try {
                        document.querySelector('body').style.overflowY = 'hidden';
                    } catch (error) {}

                    try {
                        if (block) {
                            block.style.display = 'flex';
                        }
                    } catch (error) {}

                    try {
                        if (emailInputPopup && emailInputForm) {
                            emailInputPopup.value = emailInputForm.value;
                        }
                    } catch (error) {}
                })
            })
        }
    }
}

function createUserName() {
    if (document.querySelector('.checkout .authorization__registration')) {
        const inputEmail = document.querySelector('.checkout .email input'),
            inputUserName = document.querySelector('.checkout .username input'),
            checking = document.querySelector('.checkout .username .checking__process');

        if (inputEmail) {
            try {
                let email = inputEmail.value;
                let username = email.split('@')[0];
                inputUserName.value = username;
                checkUser(username, inputEmail.value, checking);
            } catch (error) {}
        }
    }
}

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
}

function isValidUserName(username) {
    const usernameRegex = /^[A-Za-z0-9]+$/;
    return usernameRegex.test(username);
}

function isValidCartNumber(number) {
    const usernameRegex = /^\d{16}$/;
    return usernameRegex.test(number);
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

function informationInput(inputName, errorName, information) {
    const input = document.querySelector(inputName);
    const error = document.querySelector(errorName);

    if (input) {
        input.style.border = '1px solid #425A75';
    }

    if (error) {
        error.innerHTML = information;
    }
}

function activePayStep() {
    if (document.querySelector('.checkout .step_active')) {
        const stepAuthorization = document.querySelector('.checkout .checkout__authorization'),
            stepPay = document.querySelector('.checkout .checkout__pay'),
            stepBackground = document.querySelector('.checkout .checkout__step_background');

        if (stepAuthorization) {
            stepAuthorization.classList.remove('step_active');
        }

        if (stepPay) {
            stepPay.classList.add('step_active');
        }

        if (stepBackground) {
            stepBackground.classList.add('checking__process_pay');
        }
    }
}

function registration() {
    $('.checkout .authorization__form .authorization__button').on('click', function(e) {
        const agreementPolicy = document.querySelector('.checkout .agreement-policy');
        e.preventDefault();

        try {
            let btnForgotPassword = document.querySelector('.checkout .authorization__links');
            if (btnForgotPassword) {
                btnForgotPassword.style.display = 'none';
            }
        } catch (error) {}

        try {
            let informationBlock = document.querySelector('.checkout .email .information');
            if (informationBlock) {
                informationBlock.style.display = 'none';
            }
        } catch (error) {}

        if (dateUser.email == '') {
            try {
                errorInput('.checkout .email input', '.checkout .email .error', 'Field required')
            } catch (error) {}
        } else if (dateUser.username == '') {
            try {
                errorInput('.checkout .username input', '.checkout .username .error', 'Field required')
            } catch (error) {}
        } else if (dateUser.password == '') {
            try {
                errorInput('.checkout .password input', '.checkout .password .error', 'Field required')
                errorInput('.checkout .repeat-password input', '.checkout .repeat-password .error', 'Field required')
            } catch (error) {}
        } else if (!agreementPolicy.checked) {
            try {
                errorInput('.checkout .agreement .agreement-policy', '.checkout .agreement .error', 'Please give agreement')
            } catch (error) {}
        } else {
            const registrationLabelsAll = document.querySelectorAll('.checkout .authorization__registration label'),
                registrationInputsAll = document.querySelectorAll('.checkout .authorization__registration label input'),
                registrationButton = document.querySelector('.checkout .authorization__registration .authorization__button'),
                registrationComplete = document.querySelector('.checkout .authorization__registration .authorization__complete'),
                registrationBox = document.querySelector('.checkout .authorization__registration'),
                preloader = document.querySelector('.checkout .authorization__registration .authorization__buttons .checking__process'),
                inputEmail = document.querySelector('.checkout .pay__box .email-payment-field'),
                registrationStatus = document.querySelector('.checkout .authorization__registration .checkout-status'),
                titleBlock = document.querySelector('.checkout .authorization__box .authorization__title'),
                descriptionBlock = document.querySelector('.checkout .authorization__box .authorization__description'),
                payBlock = document.querySelector('.checkout .checkout__pay'),
                authorizationBlock = document.querySelector('.checkout .checkout__authorization'),
                buttonsBlock = document.querySelector('.checkout .authorization__box .authorization__login_box');

            try {
                defaultInput('.checkout .agreement .agreement-policy', '.checkout .agreement .error', '')
            } catch (error) {}

            try {
                preloader.style.display = 'flex';
            } catch (error) {}

            try {
                registrationStatus.style.display = 'none';
            } catch (error) {}

            try {
                registrationLabelsAll.forEach((label) => {
                    label.style.opacity = 0.5;
                })
            } catch (error) {}

            try {
                registrationButton.style.opacity = 0.5;
                registrationButton.innerHTML = '';
            } catch (error) {}

            try {
                $.ajax({
                    type: 'POST',
                    url: mm_ajax.ajaxurl,
                    data: {
                        action: 'checkout_register_user',
                        user_name: dateUser.username,
                        email: dateUser.email,
                        password: dateUser.password,
                        rmmCheck: mm_ajax.security,
                    },
                    dataType: 'json',
                    success: function(response) {
                        if (response.success == true) {
                            try {
                                preloader.style.display = 'none';
                                registrationButton.style.display = 'none';
                                registrationComplete.style.display = 'flex';
                                registrationBox.style.pointerEvents = 'none';
                            } catch (error) {}

                            try {
                                if (registrationInputsAll) {
                                    registrationInputsAll.forEach((input) => {
                                        input.style.color = '#6B85A3';
                                        input.style.border = '1px solid rgba(167, 197, 231, 0.16)';
                                        input.readOnly = true;
                                    })
                                }
                            } catch (error) {}

                            try {
                                if (titleBlock) {
                                    titleBlock.style.opacity = 0.2;
                                }
                            } catch (error) {}

                            try {
                                if (descriptionBlock) {
                                    descriptionBlock.style.opacity = 0.2;
                                }
                            } catch (error) {}

                            try {
                                if (buttonsBlock) {
                                    buttonsBlock.style.opacity = 0.3;
                                }
                            } catch (error) {}

                            try {
                                const mmPlan = localStorage.getItem('mmPlan');

                                if (mmPlan != 'Free') {
                                    try {
                                        actualK()
                                            .then(function(response) {
                                                if (response.success === true) {
                                                    pay(response.data)
                                                }
                                            })
                                            .catch(function(error) {});
                                    } catch (error) {}

                                    try {
                                        if (document.documentElement.clientWidth < 650) {
                                            if (payBlock) {
                                                payBlock.style.display = 'block';
                                                payBlock.classList.remove('checkout__hide');
                                            }

                                            if (authorizationBlock) {
                                                authorizationBlock.style.display = 'none';
                                                authorizationBlock.classList.add('checkout__hide');
                                            }

                                            window.scrollTo({
                                                top: 0,
                                                behavior: 'smooth'
                                            });
                                        }
                                    } catch (error) {}

                                    try {
                                        setTimeout(() => {
                                            activePayStep();
                                        }, "800");
                                    } catch (error) {}

                                    try {
                                        setTimeout(() => {
                                            try {
                                                inputEmail.value = dateUser.email;
                                            } catch (error) {}

                                            try {
                                                payArray.email = dateUser.email;
                                            } catch (error) {}

                                            try {
                                                const blockEmail = document.querySelector('.checkout .pay__box .email-payment-block');
                                                blockEmail.style.color = '#ffffff';

                                                typeText(dateUser.email, blockEmail, function(success) {
                                                    if (success) {
                                                        try {
                                                            const boxEmail = document.querySelector('.checkout .pay__box .email-payment-box');
                                                            boxEmail.style.display = 'none';
                                                        } catch (error) {}

                                                        try {
                                                            const fieldEmail = document.querySelector('.checkout .pay__box .main-form__row .email-payment');
                                                            fieldEmail.style.display = 'flex';
                                                        } catch (error) {}

                                                        try {
                                                            setTimeout(() => {
                                                                doneInput('.checkout .email-payment input', '.checkout .email-payment .error', '')
                                                            }, "300");
                                                        } catch (error) {}
                                                    }
                                                });
                                            } catch (error) {}
                                        }, "1500");
                                    } catch (error) {}
                                } else {
                                    try {
                                        authorization(dateUser.username, dateUser.password)
                                            .then(function(response) {
                                                try {
                                                    const currentDomain = window.location.origin;
                                                    window.location.href = currentDomain + "/userprofile/settings/";
                                                } catch (error) {}

                                                try {
                                                    localStorage.removeItem('mmPlan');
                                                } catch (error) {}

                                            })
                                            .catch(function(error) {});
                                    } catch (error) {}
                                }
                            } catch (error) {}

                        } else {
                            try {
                                registrationLabelsAll.forEach((label) => {
                                    label.style.opacity = 1;
                                })
                            } catch (error) {}

                            try {
                                preloader.style.display = 'none';
                            } catch (error) {}

                            try {
                                if (titleBlock) {
                                    titleBlock.style.opacity = 1;
                                }
                            } catch (error) {}

                            try {
                                if (descriptionBlock) {
                                    descriptionBlock.style.opacity = 1;
                                }
                            } catch (error) {}

                            try {
                                if (buttonsBlock) {
                                    buttonsBlock.style.opacity = 1;
                                }
                            } catch (error) {}

                            try {
                                registrationButton.style.display = 'block';
                                registrationButton.innerHTML = 'Confirm & proceed to Next step';
                                registrationButton.style.opacity = 1;
                            } catch (error) {}

                            try {
                                registrationComplete.style.display = 'none';
                            } catch (error) {}

                            try {
                                registrationBox.style.pointerEvents = 'auto';
                            } catch (error) {}

                            try {
                                registrationStatus.style.display = 'block';
                                registrationStatus.innerHTML = response.data;
                            } catch (error) {}
                        }
                    },
                    error: function(error) {
                        window.globalSLHandler('register-user', 'Registration Client', `Client: ${dateUser.email}. ${error}`, 'medium', 'registration');
                    }
                });
            } catch (error) {}
        }
    });
}

function login() {
    const userName = document.querySelector('.checkout .authorization__login .login input'),
        password = document.querySelector('.checkout .authorization__login .password-login input'),
        loginButton = document.querySelector('.checkout .authorization__login .authorization__button'),
        preloader = document.querySelector('.checkout .authorization__login .authorization__buttons .checking__process');

    if (userName) {
        userName.addEventListener('blur', () => {
            try {
                defaultInput('.checkout .login input', '.checkout .login .error')
            } catch (error) {}

            if (userName.value == '') {
                try {
                    errorInput('.checkout .login input', '.checkout .login .error', 'Field required')
                } catch (error) {}
            }
        })
    }

    if (password) {
        password.addEventListener('blur', () => {
            try {
                defaultInput('.checkout .password-login input', '.checkout .password-login .error')
            } catch (error) {}

            if (password.value == '') {
                try {
                    errorInput('.checkout .password-login input', '.checkout .password-login .error', 'Field required')
                } catch (error) {}
            }
        })
    }

    $('.checkout .authorization__block_non .authorization__button').on('click', function() {
        if (!userName.value == '') {
            try {
                doneInput('.checkout .login input', '.checkout .login .error')
            } catch (error) {}
        }

        if (!password.value == '') {
            try {
                doneInput('.checkout .password-login input', '.checkout .password-login .error')
            } catch (error) {}
        }

        if (userName.value == '') {
            try {
                errorInput('.checkout .login input', '.checkout .login .error', 'Field required')
            } catch (error) {}
        } else if (password.value == '') {
            try {
                errorInput('.checkout .password-login input', '.checkout .password-login .error', 'Field required')
            } catch (error) {}
        } else {

            try {
                loginButton.innerHTML = '';
            } catch (error) {}

            try {
                preloader.style.display = 'flex';
            } catch (error) {}


            try {
                authorization(userName.value, password.value)
                    .then(function(response) {
                        if (response.success === false) {
                            try {
                                errorInput('.checkout .login input', '.checkout .login .error', 'Check the username')
                            } catch (error) {}

                            try {
                                errorInput('.checkout .password-login input', '.checkout .password-login .error', 'Check the password')
                            } catch (error) {}

                            try {
                                loginButton.innerHTML = 'Confirm & proceed to Next step';
                            } catch (error) {}

                            try {
                                preloader.style.display = 'none';
                            } catch (error) {}
                        } else {
                            const mmPlan = localStorage.getItem('mmPlan');

                            if (mmPlan) {
                                try {
                                    localStorage.removeItem('mmPlan');
                                } catch (error) {}

                                try {
                                    const currentDomain = window.location.origin;
                                    window.location.href = currentDomain + "/userprofile/settings/";
                                } catch (error) {}
                            } else {
                                location.reload();
                            }
                        }
                    })
                    .catch(function(error) {});
            } catch (error) {}
        }
    });
}

function initCountrySelect() {
    const countriesList = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];

    $('#country').select2({
        data: countriesList,
        placeholder: "Choose country",
    });
    $('#country').val('USA').trigger('change');
}

function setActualPrice() {
    if (document.querySelector('.checkout') || document.querySelector('.page-template-page-pricing') || document.querySelector('.page-template-page-home')) {
        getProductPrice()
            .then(function(response) {

                const price_package_1 = response.pricePackageStandard;
                const price_package_2 = response.pricePackagePro;
                const interval_package_1 = response.intervalPackageStandard;
                const interval_package_2 = response.intervalPackagePro;

                const boxes = document.querySelectorAll('.pricing-content .pricing-item__box');
                const preloaders = document.querySelectorAll('.pricing-content .pricing-item__price_preloader');
                const priceBlock_1 = document.querySelector('.pricing-item__box span.pricing-item__price-value.package_1-pricing span');
                const priceBlock_2 = document.querySelector('.pricing-item__box span.pricing-item__price-value.package_2-pricing span');
                const intervalBlock_1 = document.querySelector('.pricing-item__box span.package-interval.package_1-interval span');
                const intervalBlock_2 = document.querySelector('.pricing-item__box span.package-interval.package_2-interval span');

                if (boxes) {
                    boxes.forEach((box) => {
                        box.style.display = 'flex';
                    })
                }

                if (preloaders) {
                    preloaders.forEach((preloader) => {
                        preloader.style.display = 'none';
                    })
                }

                if (priceBlock_1) {
                    priceBlock_1.innerHTML = price_package_1;
                }
                if (priceBlock_2) {
                    priceBlock_2.innerHTML = price_package_2;
                }

                if (intervalBlock_1) {
                    intervalBlock_1.innerHTML = interval_package_1;
                }

                if (intervalBlock_2) {
                    intervalBlock_2.innerHTML = interval_package_2;
                }

                // localStorage.setItem('priceText', priceText);
                // localStorage.setItem('periodText', periodText);
            })
            .catch(function(error) {});
    }
}

function checkAuthorization() {
    if (document.querySelector('.logged-in') && document.querySelector('.checkout')) {
        actualK()
            .then(function(response) {
                if (response.success === true) {
                    pay(response.data)
                }
            })
            .catch(function(error) {});
    }
}

function pay(value) {
    if (document.querySelector('.checkout .checkout__pay')) {
        const emailField = document.querySelector('.checkout .email-payment .email-payment-field'),
            promoCodeField = document.querySelector('.checkout .promocode .promocode-field'),
            promoCodeLabel = document.querySelector('.checkout .promocode .submit-promocode'),
            promoCodeInfo = document.querySelector('.checkout .promocode .information'),
            checking = document.querySelector('.checkout .promocode .checking__process'),
            cardField = document.querySelector('.checkout .card-number .cc-number'),
            dateField = document.querySelector('.checkout .date-cc-exp .cc-exp'),
            cvsField = document.querySelector('.checkout .cvc .cc-cvc'),
            priceBox = document.querySelector('.pay__box .main-form__total strong'),
            price = document.querySelector('.checkout .main-form__total_price'),
            period = document.querySelector('.checkout .main-form__total_period'),
            chosenPackageLocal = localStorage.getItem('mmPlan');

        if (document.querySelector('.logged-in')) {

            try {
                payArray.email = emailField.value;
            } catch (error) {}

            try {
                const blockEmail = document.querySelector('.checkout .pay__box .email-payment-block');
                blockEmail.style.color = '#ffffff';
                typeText(emailField.value, blockEmail, function(success) {
                    if (success) {
                        try {
                            const boxEmail = document.querySelector('.checkout .pay__box .email-payment-box');
                            boxEmail.style.display = 'none';
                        } catch (error) {}

                        try {
                            const fieldEmail = document.querySelector('.checkout .pay__box .main-form__row .email-payment');
                            fieldEmail.style.display = 'flex';
                        } catch (error) {}

                        try {
                            setTimeout(() => {
                                doneInput('.checkout .email-payment input', '.checkout .email-payment .error', '')
                            }, "300");
                        } catch (error) {}
                    }
                });
            } catch (error) {}
        }

        try {
            getProductPrice()
                .then(function(response) {
                    if (chosenPackageLocal == 'Standard') {
                        const pricePackageStandard = response.pricePackageStandard;
                        const intervalPackageStandard = response.intervalPackageStandard;

                        price.innerHTML = pricePackageStandard;
                        period.innerHTML = '/' + intervalPackageStandard;

                        payArray.package = 'Standard';
                        payArray.price = pricePackageStandard;
                        payArray.interval = intervalPackageStandard;
                    }

                    if (chosenPackageLocal == 'Pro') {
                        const pricePackagePro = response.pricePackagePro;
                        const intervalPackagePro = response.intervalPackagePro;

                        price.innerHTML = pricePackagePro;
                        period.innerHTML = '/' + intervalPackagePro;

                        payArray.package = 'Pro';
                        payArray.price = pricePackagePro;
                        payArray.interval = intervalPackagePro;
                    }

                    if (chosenPackageLocal == 'Test') {
                        const pricePackageTest = response.pricePackageTest;
                        const intervalPackageTest = response.intervalPackageTest;

                        price.innerHTML = pricePackageTest;
                        period.innerHTML = '/' + intervalPackageTest;

                        payArray.package = 'Test';
                        payArray.price = pricePackageTest;
                        payArray.interval = intervalPackageTest;
                    }
                })
                .catch(function(error) {});
        } catch (error) {}

        if (emailField) {
            emailField.addEventListener('blur', () => {
                try {
                    defaultInput('.checkout .email-payment .email-payment-field', '.email-payment .error')
                } catch (error) {}

                if (!emailField.value == '') {
                    if (!isValidEmail(emailField.value)) {
                        try {
                            errorInput('.checkout .email-payment input', '.checkout .email-payment .error', 'Incorrect email')
                        } catch (error) {}
                    } else {
                        try {
                            doneInput('.checkout .email-payment input', '.checkout .email-payment .error', '')
                        } catch (error) {}

                        try {
                            payArray.email = emailField.value;
                        } catch (error) {}
                    }

                } else {
                    try {
                        payArray.email = '';
                    } catch (error) {}

                    try {
                        errorInput('.checkout .email-payment input', '.checkout .email-payment .error', 'Field required')
                    } catch (error) {}
                }
            })
        }

        if (emailField) {
            emailField.addEventListener('input', () => {
                if (!emailField.value == '') {
                    try {
                        doneInput('.checkout .email-payment input', '.checkout .email-payment .error', '')
                    } catch (error) {}
                }
            })
        }

        if (promoCodeField) {
            promoCodeField.addEventListener('blur', () => {

                try {
                    defaultInput('.checkout .promocode .promocode-field', '.promocode .error')
                } catch (error) {}

                if (promoCodeField.value == '') {
                    if (payArray.price && payArray.interval) {
                        price.innerHTML = payArray.price;
                        period.innerHTML = '/' + payArray.interval;
                    }
                }

                if (!promoCodeField.value == '') {
                    try {
                        checking.style.display = 'flex';
                    } catch (error) {}

                    try {
                        promoCodeInfo.style.display = 'none';
                    } catch (error) {}

                    try {
                        promoCodeLabel.style.display = 'none';
                    } catch (error) {}

                    checkPromoCode(promoCodeField.value)
                        .then(function(response) {
                            if (response.success === false) {
                                try {
                                    payArray.promoCode = '';
                                } catch (error) {}

                                try {
                                    promoCodeLabel.style.display = 'none';
                                } catch (error) {}

                                try {
                                    promoCodeInfo.style.display = 'block';
                                } catch (error) {}

                                try {
                                    checking.style.display = 'none';
                                } catch (error) {}

                                try {
                                    try {
                                        informationInput('.checkout .promocode .promocode-field', '.promocode .information', 'Promo code is not correct')
                                    } catch (error) {}

                                    if (payArray.price && payArray.interval) {
                                        price.innerHTML = payArray.price;
                                        period.innerHTML = '/' + payArray.interval;
                                    }
                                } catch (error) {}
                            }

                            if (response.success === true) {
                                try {
                                    payArray.promoCode = promoCodeField.value;
                                } catch (error) {}

                                try {
                                    if (price && period) {
                                        price.innerHTML = response.data;
                                        period.innerHTML = '';
                                    }
                                } catch (error) {}

                                try {
                                    promoCodeLabel.style.display = 'block';
                                } catch (error) {}

                                try {
                                    promoCodeInfo.style.display = 'none';
                                } catch (error) {}

                                try {
                                    checking.style.display = 'none';
                                } catch (error) {}

                                try {
                                    doneInput('.checkout .promocode .promocode-field', '.checkout .promocode .error', '')
                                } catch (error) {}
                            }
                        })
                        .catch(function(error) {});
                }
            })
        }

        if (promoCodeField) {
            promoCodeField.addEventListener('input', () => {
                try {
                    defaultInput('.checkout .promocode .promocode-field', '.promocode .error')
                } catch (error) {}

                if (promoCodeField.value == '') {
                    try {
                        promoCodeLabel.style.display = 'none';
                    } catch (error) {}

                    try {
                        promoCodeInfo.style.display = 'none';
                    } catch (error) {}

                    try {
                        checking.style.display = 'none';
                    } catch (error) {}
                }
            })
        }

        if (cardField) {
            cardField.addEventListener('blur', () => {
                const cardNumber = cardField.value.replace(/\s/g, '');
                try {
                    defaultInput('.checkout .card-number input', '.card-number .error')
                } catch (error) {}
                if (!cardNumber == '') {
                    if (!isValidCartNumber(cardNumber)) {
                        try {
                            errorInput('.checkout .card-number input', '.checkout .card-number .error', 'Error format')
                        } catch (error) {}
                    } else {
                        try {
                            doneInput('.checkout .card-number input', '.checkout .card-number .error', '')
                        } catch (error) {}
                    }
                } else {
                    try {
                        errorInput('.checkout .card-number input', '.checkout .card-number .error', 'Field required')
                    } catch (error) {}
                }
            })
        }

        if (cardField) {
            cardField.addEventListener('input', () => {
                const cardNumber = cardField.value.replace(/\s/g, '');
                if (!cardNumber == '') {
                    try {
                        doneInput('.checkout .card-number input', '.checkout .card-number .error', '')
                    } catch (error) {}
                }
            })
        }

        if (dateField) {
            dateField.addEventListener('blur', () => {
                try {
                    defaultInput('.checkout .date-cc-exp input', '.date-cc-exp .error')
                } catch (error) {}
                if (dateField.value == '') {
                    try {
                        errorInput('.checkout .date-cc-exp input', '.checkout .date-cc-exp .error', 'Error format')
                    } catch (error) {}
                } else {
                    try {
                        doneInput('.checkout .date-cc-exp input', '.checkout .date-cc-exp .error', '')
                    } catch (error) {}

                    try {
                        const parts = dateField.value.split(' / ');
                        let month = parseInt(parts[0], 10);
                        const year = parseInt(parts[1], 10);

                        if (month < 10) {
                            month = "0" + month;
                        }

                    } catch (error) {}
                }

            })
        }

        if (dateField) {
            dateField.addEventListener('input', () => {
                try {
                    if (!dateField.value == '') {
                        doneInput('.checkout .date-cc-exp input', '.checkout .date-cc-exp .error', '')
                    }
                } catch (error) {}
            })
        }

        if (cvsField) {
            cvsField.addEventListener('blur', () => {
                try {
                    defaultInput('.checkout .cvc input', '.checkout .cvc .error')
                } catch (error) {}

                if (cvsField.value == '') {
                    try {
                        errorInput('.checkout .cvc input', '.checkout .cvc .error', 'Field required')
                    } catch (error) {}
                } else {
                    try {
                        doneInput('.checkout .cvc input', '.checkout .cvc .error', '')
                    } catch (error) {}
                }
            })
        }

        if (cvsField) {
            cvsField.addEventListener('input', () => {
                if (cvsField.value == '') {
                    try {
                        errorInput('.checkout .cvc input', '.checkout .cvc .error', 'Field required')
                    } catch (error) {}
                } else {
                    try {
                        doneInput('.checkout .cvc input', '.checkout .cvc .error', '')
                    } catch (error) {}
                }
            })
        }

        $('input.cc-number').payment('formatCardNumber');

        $('input.cc-number').on('input', function(e) {
            var cardType = $.payment.cardType($('.cc-number').val());
            switch (cardType) {
                case "visa":
                    $('.main-form__card-item').hide()
                    $('.main-form__card-item.visa').show()
                    break;
                case "mastercard":
                    $('.main-form__card-item').hide()
                    $('.main-form__card-item.mastercard').show()
                    break;
                case "discover":
                    $('.main-form__card-item').hide()
                    $('.main-form__card-item.discover').show()
                    break;
                case "amex":
                    $('.main-form__card-item').hide()
                    $('.main-form__card-item.express').show()
                    break;
                default:
                    $('.main-form__card-item').show()
            }
        })

        $('input.cc-exp').payment('formatCardExpiry');

        $('input.cc-cvc').payment('formatCardCVC');

        const stripe = Stripe(value);
        const elements = stripe.elements();
        const cardNumberElement = elements.create('cardNumber', {
            style: {
                base: {
                    fontSize: '16px',
                    color: '#ffffff',
                    padding: '14px 15px',
                    backgroundColor: '#192B3F',
                    '::placeholder': {
                        color: '#59728F',
                    },
                    ':-webkit-autofill': {
                        color: '#59728F',
                    },
                },
            }
        });
        const cardExpiryElement = elements.create('cardExpiry', {
            style: {
                base: {
                    fontSize: '16px',
                    color: '#ffffff',
                    padding: '14px 15px',
                    backgroundColor: '#192B3F',
                    '::placeholder': {
                        color: '#59728F',
                    },
                    ':-webkit-autofill': {
                        color: '#59728F',
                    },
                },
            }
        });
        const cardCvcElement = elements.create('cardCvc', {
            style: {
                base: {
                    fontSize: '16px',
                    color: '#ffffff',
                    padding: '14px 15px',
                    backgroundColor: '#192B3F',
                    '::placeholder': {
                        color: '#59728F',
                    },
                    ':-webkit-autofill': {
                        color: '#59728F',
                    },
                },
            }
        });

        cardNumberElement.mount('#card-number-element');
        cardExpiryElement.mount('#card-expiry-element');
        cardCvcElement.mount('#card-cvc-element');

        $('.main-form__action button').on('click', function(e) {
            e.preventDefault();

            const agreeInformation = document.querySelector('.checkout .checkout__pay .save-information');

            if (!agreeInformation.checked) {
                try {
                    errorInput('.checkout .main-form__checkbox .save-information', '.checkout .pay__box .main-form__checkbox .error', 'Please give agreement')
                } catch (error) {}
            } else {
                const payLabelsAll = document.querySelectorAll('.checkout .pay__box .main-form__row label'),
                    payBlocksAll = document.querySelectorAll('.checkout .pay__box .main-form__card'),
                    payInputsAll = document.querySelectorAll('.checkout .pay__box .main-form__row label label input'),
                    payButton = document.querySelector('.checkout .step_active .pay__box .main-form__action button'),
                    payComplete = document.querySelector('.checkout .step_active .pay__box .paymant__complete'),
                    payBox = document.querySelector('.checkout .step_active .pay__box'),
                    payPreloader = document.querySelector('.checkout .pay__box .form__actions .checking__process'),
                    payStatus = document.querySelector('.checkout .pay__box .checkout-status'),
                    errorBlock = document.querySelector('#card-errors'),
                    popUpSuccess = document.querySelector('.checkout .form-success');

                try {
                    defaultInput('.checkout .pay__box .main-form__checkbox .save-information', '.checkout .pay__box .main-form__checkbox .error', '')
                } catch (error) {}

                try {
                    errorBlock.style.display = 'none';
                } catch (error) {}

                try {
                    payStatus.style.display = 'none';
                } catch (error) {}

                try {
                    payPreloader.style.display = 'flex';
                } catch (error) {}

                try {
                    payBox.style.pointerEvents = 'none';
                } catch (error) {}

                try {
                    payStatus.style.display = 'none';
                } catch (error) {}

                try {
                    payLabelsAll.forEach((label) => {
                        label.style.opacity = 0.5;
                    })
                } catch (error) {}

                try {
                    payBlocksAll.forEach((block) => {
                        block.style.opacity = 0.5;
                    })
                } catch (error) {}

                try {
                    payButton.style.opacity = 0.5;
                    payButton.innerHTML = '';
                    payButton.style.pointerEvents = 'none';
                } catch (error) {}

                stripe.createPaymentMethod({
                    type: 'card',
                    card: cardNumberElement,
                    billing_details: {
                        name: payArray.email
                    }
                }).then(function(result) {
                    if (result.error) {
                        handleStripeError(result.error);
                    } else {
                        sendPaymentData(result.paymentMethod)
                            .then(function(response) {
                                if (response.success) {
                                    handleSuccessResponse(response);
                                } else if (response.data && response.data.incomplete) {
                                    handleIncompleteSubscription();
                                } else if (response.data && response.data.error) {
                                    handleStripeError(response.data.error);
                                } else {
                                    handleStripeError('Unknown error');
                                }
                            })
                            .catch(function(error) {
                                handleStripeError(error.message || error);
                            });
                    }
                }).catch(function(error) {
                    handleStripeError(error.message || error);
                });

                function handleStripeError(error) {
                    var cardErrors = document.getElementById('card-errors');

                    try {
                        payLabelsAll.forEach((label) => {
                            label.style.opacity = 1;
                        })
                    } catch (error) {}

                    try {
                        payBlocksAll.forEach((block) => {
                            block.style.opacity = 1;
                        })
                    } catch (error) {}

                    try {
                        payPreloader.style.display = 'none';
                    } catch (error) {}

                    try {
                        payButton.style.display = 'block';
                        payButton.style.opacity = 1;
                        payButton.innerHTML = 'Subscribe';
                        payButton.style.pointerEvents = 'auto';
                    } catch (error) {}

                    try {
                        payBox.style.pointerEvents = 'auto';
                    } catch (error) {}

                    try {
                        payStatus.style.display = 'block';
                    } catch (error) {}

                    let infoError = '';

                    if (error && error.message) {
                        payStatus.textContent = error.message;
                        infoError = error.message;
                    } else if (typeof error === 'string') {
                        payStatus.textContent = error;
                        infoError = error;
                    } else {
                        payStatus.textContent = 'An error has occurred. Please try again';
                        infoError = 'An error has occurred. Please try again';
                    }

                    window.globalSLHandler('subscription-step-2', 'Paid for the subscription', `Client: ${emailField.value}. ${infoError}`, 'high', 'subscription');
                }

                function sendPaymentData(paymentMethod) {
                    return new Promise(function(resolve, reject) {
                        $.ajax({
                            type: 'POST',
                            url: mm_ajax.ajaxurl,
                            data: {
                                action: 'checkout_subscribe',
                                emailPayment: payArray.email,
                                email: dateUser.email || $('.checkout .authorization__block .login__value_email').text().trim(),
                                country: payArray.country,
                                promoCode: payArray.promoCode,
                                paymentMethodId: paymentMethod.id,
                                mmSubscribe: mm_ajax.security,
                                package: payArray.package,
                                price: payArray.price,
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

                function handleSuccessResponse(response) {
                    if (response.success) {
                        try {
                            payPreloader.style.display = 'none';
                            payButton.style.display = 'none';
                            payComplete.style.display = 'flex';
                            payBox.style.pointerEvents = 'none';
                            payInputsAll.forEach(input => {
                                input.style.color = '#6B85A3';
                                input.style.border = '1px solid rgba(167, 197, 231, 0.16)';
                                input.readOnly = true;
                            });
                        } catch (error) {}

                        if (chosenPackageLocal == 'Standard') {
                            try {
                                const descriptionInBox = document.querySelector('.checkout .form-success__subtitle'),
                                    buttonInBox = document.querySelector('.checkout .form-success__action'),
                                    currentDomain = window.location.origin;

                                descriptionInBox.innerHTML = 'You will be redirected to your personal account in 3 seconds'
                                buttonInBox.style.display = 'none';
                                popUpSuccess.style.display = 'flex';

                                setTimeout(() => {
                                    window.location.href = currentDomain + "/membership/";
                                }, 3000);
                            } catch (error) {}
                        }

                        if (chosenPackageLocal == 'Pro') {
                            const mailLoginUserElement = document.querySelector('.checkout .authorization__block .login__value_email');

                            const mailLoginUser = mailLoginUserElement ? mailLoginUserElement.textContent.replace(/\s/g, '') : '';

                            checkStatusDiscord(mailLoginUser).then(response => {
                                if (response.success === false) {
                                    try {
                                        const btnConnect = document.querySelector('.checkout .form-success__action .connect-discord');
                                        if (btnConnect) {
                                            btnConnect.style.display = 'flex';
                                        }
                                    } catch (error) {}

                                    try {
                                        popUpSuccess.style.display = 'flex';
                                    } catch (error) {}

                                } else {
                                    try {
                                        const btnLink = document.querySelector('.checkout .form-success__action .open-connect-discord');
                                        const currentDomain = window.location.origin;

                                        if (btnLink) {
                                            btnLink.href = response.data;
                                            btnLink.style.display = 'flex';

                                            btnLink.addEventListener('click', () => {
                                                setTimeout(() => {
                                                    window.location.href = currentDomain + "/membership/";
                                                }, 300);
                                            });
                                        }
                                    } catch (error) {}

                                    popUpSuccess.style.display = 'flex';
                                }
                            }).catch(error => {});
                        }

                        try {
                            authorization(dateUser.username, dateUser.password)
                                .then(response => {})
                                .catch(error => {});
                        } catch (error) {}

                    } else {
                        try {
                            payLabelsAll.forEach(label => {
                                label.style.opacity = 1;
                            });
                            payBlocksAll.forEach(block => {
                                block.style.opacity = 1;
                            });
                            payPreloader.style.display = 'none';
                            payButton.style.display = 'block';
                            payButton.style.opacity = 1;
                            payButton.innerHTML = 'Subscribe';
                            payBox.style.pointerEvents = 'auto';
                            payStatus.style.display = 'block';
                            payStatus.innerHTML = response.data;
                        } catch (error) {}
                    }
                }

                function handleIncompleteSubscription() {
                    const block = document.querySelector('.popup-thank-you');
                    const blockTitle = document.querySelector('.popup-thank-you .popup__title');
                    const blockDescription = document.querySelector('.popup-thank-you .popup__description');

                    blockTitle.innerHTML = 'Your payment requires confirmation';
                    blockDescription.innerHTML = 'The subscription has been created, but the payment is not yet complete.\n' +
                        'Please confirm the payment (e.g., via your bank or payment app).\n' +
                        'Once it\'s successful, you’ll receive a confirmation email.';

                    block.style.display = 'flex';
                }
            }
        });
    }
}

function checkSocialLogin() {
    if (document.querySelector('.page-template-page-social-authorization')) {
        const currentDomain = window.location.origin;
        const status = localStorage.getItem('checkoutPage');
        const title = document.querySelector('.page-template-page-social-authorization .content-page h1')
        const mmPlan = localStorage.getItem('mmPlan');

        if (!mmPlan) {
            if (status) {
                window.location.href = currentDomain + "/checkout/";
                localStorage.removeItem('checkoutPage');
            } else {
                window.location.href = currentDomain + "/userprofile/settings/";
                localStorage.removeItem('checkoutPage');
            }
        } else {
            window.location.href = currentDomain + "/userprofile/settings/";
            localStorage.removeItem('checkoutPage');

            try {
                localStorage.removeItem('mmPlan');
            } catch (error) {}
        }

        setTimeout(() => {
            title.style.display = 'block';
        }, "2000");
    }
}

function checkConnectDiscord() {
    if (document.querySelector('.page-template-page-social-authorization')) {
        const currentDomain = window.location.origin;
        const status = localStorage.getItem('connectDiscord');
        const title = document.querySelector('.page-template-page-social-authorization .content-page h1');

        if (status) {
            window.location.href = currentDomain + "/userprofile/settings/";
            localStorage.removeItem('connectDiscord');
        }

        setTimeout(() => {
            title.style.display = 'block';
        }, "2000");
    }
}

function closePopupBox() {
    const close = document.querySelector('.popup__delete-button-close'),
        block = document.querySelector('.popup-delete-profile');

    if (close) {
        close.addEventListener('click', (e) => {
            e.preventDefault()
            block.style.display = 'none';
        });
    }
}

function cancelActiveSubscribe(email) {
    const btn = document.querySelector('.popup-delete-profile .popup__cancel_subscribe'),
        buttons = document.querySelector('.popup-delete-profile .box__union'),
        preloader = document.querySelector('.popup-delete-profile .popup__checking_process');

    if (btn) {
        btn.addEventListener('click', (e) => {
            e.preventDefault()

            buttons.style.opacity = '0.5';
            buttons.style.pointerEvents = 'none';
            preloader.style.display = 'flex';

            deleteSubscribe(email)
                .then(function(response) {
                    if (response.success == true) {
                        deleteUserProfile();
                    } else {
                        buttons.style.opacity = '1';
                        preloader.style.display = 'none';
                        buttons.style.pointerEvents = 'auto';
                    }
                })
                .catch(function(error) {});
        })
    }
}

function deleteProfile() {
    if (document.querySelector('.popup-delete-profile')) {
        const btn = document.querySelector('.widget-content .content__profile .delete__button'),
            block = document.querySelector('.popup-delete-profile'),
            deleteButton = document.querySelector('.popup__delete-button');

        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault()
                block.style.display = 'flex';
            });
        }

        if (deleteButton) {
            deleteButton.addEventListener('click', function(e) {
                e.preventDefault();

                const box = document.querySelector('.popup-delete-profile .box__union'),
                    preloader = document.querySelector('.popup-delete-profile .popup__checking_process'),
                    title = document.querySelector('.popup-delete-profile .popup__title'),
                    description = document.querySelector('.popup-delete-profile .popup__description'),
                    emailBlock = document.querySelector('.header-action .btn-title'),
                    emailInput = emailBlock.getAttribute('data-user-email'),
                    email = emailInput.trim();

                box.style.opacity = '0.5';
                box.style.pointerEvents = 'none';
                preloader.style.display = 'flex';

                if (mm_ajax.subscriptionStatus == 'cancel') {
                    box.style.opacity = '1';
                    box.innerHTML = '';
                    preloader.style.display = 'flex';
                    description.style.display = 'none';
                    box.innerHTML = '';
                    title.innerHTML = 'I\'m working on profile deletion';
                    title.style.marginTop = '35px';
                    hCancelCommunityMemberDiscord(email)
                        .then(function(response) {
                            deleteUserProfile();
                        })
                        .catch(function(error) {});

                    return;
                }

                if (email) {
                    deleteSubscribe(email)
                        .then(function(response) {
                            box.style.opacity = '1';
                            box.style.pointerEvents = 'auto';
                            box.innerHTML = '';
                            preloader.style.display = 'none';
                            description.style.display = 'none';
                            box.innerHTML = '';

                            if (response.success == true) {
                                title.innerHTML = 'Your active subscriptions';
                                box.innerHTML = response.data.html;
                                removeSubscriptionsBeforeProfileDeletion(email);
                            } else {
                                title.innerHTML = 'I\'m working on profile deletion';
                                hCancelCommunityMemberDiscord(email)
                                    .then(function(response) {
                                        deleteUserProfile();
                                    })
                                    .catch(function(error) {});
                            }
                        })
                        .catch(function(error) {
                            box.style.opacity = '1';
                            box.style.pointerEvents = 'auto';
                            preloader.style.display = 'none';
                        });
                }
            });
        }
    }
}

function deleteUserProfile() {
    rDeleteProfile()
        .then(function(response) {
            if (response.success) {
                window.location.href = '/';
            } else {
                console.log('Error')
            }
        })
        .catch(function(error) {});
}

function cancelMySubscribe() {
    if (document.querySelector('.item__cancel_subscribe')) {
        const btn = document.querySelector('.item__cancel_subscribe'),
            block = document.querySelector('.popup-content-profile'),
            buttons = document.querySelector('.popup-content-profile .box__union'),
            close = document.querySelector('.popup-content-profile .popup__content-button-close'),
            cancelButton = document.querySelector('.popup-content-profile .popup__content-button');

        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                block.style.display = 'flex';
            })
        }

        if (close) {
            close.addEventListener('click', (e) => {
                e.preventDefault();

                block.style.display = 'none';
            })
        }

        if (cancelButton) {
            cancelButton.addEventListener('click', (e) => {
                e.preventDefault();

                const preloader = document.querySelector('.popup-content-profile .popup__checking_process'),
                    title = document.querySelector('.popup-content-profile .popup__title'),
                    boxContainer = document.querySelector('.popup-content-profile .box__union'),
                    emailBlock = document.querySelector('.header-action .btn-title'),
                    emailInput = emailBlock.getAttribute('data-user-email'),
                    email = emailInput.trim();

                buttons.style.opacity = '0.5';
                buttons.style.pointerEvents = 'none';
                preloader.style.display = 'flex';

                if (email) {
                    deleteSubscribe(email)
                        .then(function(response) {
                            buttons.style.opacity = '1';
                            buttons.style.pointerEvents = 'auto';
                            preloader.style.display = 'none';

                            boxContainer.innerHTML = '';
                            boxContainer.innerHTML = response.data.html;

                            if (response.success == true) {
                                title.innerHTML = 'Your active subscriptions';
                                deleteSelectedSubscription(email);
                            } else {
                                title.innerHTML = 'Not found subscriptions';
                                sendNewEmailForSearchSubscribes();
                            }
                        })
                        .catch(function(error) {
                            buttons.style.opacity = '1';
                            buttons.style.pointerEvents = 'auto';
                            preloader.style.display = 'none';
                        });
                }
            })
        }
    }
}

function videoPage() {
    if (document.querySelector('.page-template-page-videos')) {
        const containerTabs = document.querySelector('.page-template-page-videos .videos .tabs .tabs__common div'),
            loader = document.querySelector('.page-template-page-videos .videos .tabs .tabs__common .common__loader'),
            box = document.querySelector('.videos__modal-filter'),
            boxCards = document.querySelector('.page-template-page-videos .videos .videos__cards'),
            cardsVideo = document.querySelector('.page-template-page-videos #cards-video'),
            pagination = document.querySelector('.page-template-page-videos #pagination-video'),
            filterButton = document.querySelector('.page-template-page-videos .videos .tabs .tabs__fitler');

        let tags = [];
        let titleTags = ['All tags'];

        function openFilter() {
            if (filterButton) {
                filterButton.addEventListener('click', (e) => {
                    e.preventDefault();

                    if (box) {
                        box.classList.add('modal--popped');
                        box.style.display = 'block';

                        if (document.documentElement.clientWidth < 480) {
                            document.querySelector('html').style.overflowY = 'hidden';
                        }
                    }
                })
            }
        }

        openFilter();

        function closePopupVideo() {
            const closes = document.querySelectorAll('.page-template-page-videos .videos__modal .modal__close-btn');
            const blocks = document.querySelectorAll('.page-template-page-videos .videos__modal');
            const iframes = document.querySelectorAll('.page-template-page-videos .videos .card__modal_iframe');
            const videos = document.querySelectorAll('.page-template-page-videos .card__videos .modal__container .modal__content');

            if (closes) {
                Array.from(closes).forEach((close) => {
                    close.addEventListener('click', (e) => {
                        e.preventDefault();

                        Array.from(blocks).forEach((block) => {
                            block.classList.remove('modal--popped');
                            box.style.display = 'none';
                        });

                        Array.from(iframes).forEach((iframe) => {
                            iframe.style.display = 'none';
                        });

                        if (document.documentElement.clientWidth < 480) {
                            document.querySelector('html').style.overflowY = 'auto';
                        }

                        videos.forEach((video, i) => {
                            const contentToPaste = videos[i].innerHTML;
                            videos[i].innerHTML = '';
                            setTimeout(function() {
                                videos[i].innerHTML = contentToPaste;
                            }, 100);
                        })
                    });
                });
            }
        }

        function choosingTag() {
            const tabs = document.querySelectorAll('.page-template-page-videos .videos__modal .tabs__tab');
            if (tabs) {
                tabs.forEach((tab) => {
                    tab.addEventListener('click', (e) => {
                        e.preventDefault();

                        if (tab) {
                            tab.classList.add('tabs__tab--selected');
                        }
                    });
                })
            }
        }

        choosingTag();

        function cleanUp(tags) {
            const btn = document.querySelector('.page-template-page-videos .modal .modal__container .modal__footer .modal__btn--secondary'),
                tabs = document.querySelectorAll('.page-template-page-videos .videos__modal .tabs__tab');

            if (btn) {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    clean();
                    tags = [];
                });

                function clean() {
                    if (tabs) {
                        tabs.forEach((tab) => {
                            tab.classList.remove('tabs__tab--selected');
                        })
                    }
                }
            }
        }

        cleanUp(tags);

        function getAllTags(titleTags) {
            getTags(tags)
                .then(function(response) {
                    if (response.success == true) {

                        if (containerTabs) {
                            containerTabs.innerHTML = '';
                        }

                        response.data.forEach((tab, i) => {
                            const tabElement = document.createElement('div');
                            const spanElement = document.createElement('span');

                            tabElement.classList.add('tabs__tab');

                            if (!i == 0) {
                                tabElement.innerHTML = '#';
                            }

                            spanElement.innerHTML = tab.title;

                            tabElement.appendChild(spanElement);

                            if (containerTabs) {
                                containerTabs.appendChild(tabElement);
                            }

                            if (i == 8 && filterButton) {
                                filterButton.style.display = 'block';
                            }

                            titleTags.forEach((title) => {
                                if (title == tab.title) {
                                    tabElement.classList.add('tabs__tab--selected');
                                }
                            })
                        });

                        filterByTag();
                    }
                })
                .catch(function(error) {});
        }

        getAllTags(titleTags);

        function filterByTag() {
            const tabs = document.querySelectorAll('.page-template-page-videos .videos .tabs .tabs__common .tabs__tab');
            if (tabs) {
                tabs.forEach((tab) => {
                    tab.addEventListener('click', (e) => {
                        e.preventDefault();

                        if (tabs) {
                            tabs.forEach((tab) => {
                                tab.classList.remove('tabs__tab--selected');
                            })
                        }

                        tags = [];

                        tab.classList.add('tabs__tab--selected');
                        const name = tab.querySelector('span').textContent;

                        if (name == 'All tags') {} else {
                            tags.push(name);
                        }

                        getAllVideos(tags);
                        cleanUp(tags);
                    });
                })
            }
        }

        function showVideoPopup() {
            $('.page-template-page-videos .video__play').on('click', function(e) {
                e.preventDefault();
                e.stopPropagation();

                let videoUrl = $(this).attr("data-video");

                $('.videos__information-box').addClass('modal--popped');
                $('.videos__information-box .card__videos').css('display', 'block');

                let iframeId = 'player';
                let playerElement = document.getElementById(iframeId);

                if (playerElement) {
                    playerElement.remove();
                }

                $('.page-template-page-videos .videos__information-box .modal__content').append('<div id="player"></div>');

                let player = new YT.Player(iframeId, {
                    videoId: videoUrl,
                    playerVars: {
                        rel: 0,
                        controls: 1
                    },
                    events: {
                        'onReady': function(event) {
                            event.target.playVideo();
                        }
                    }
                });

                if (document.documentElement.clientWidth < 480) {
                    document.querySelector('html').style.overflowY = 'hidden';
                }
            });

            $('.modal__close-btn').off('click').on('click', function(e) {
                e.preventDefault();

                $('.videos__information-box').removeClass('modal--popped');
                $('.videos__information-box .card__videos').css('display', 'none');

                if (player) {
                    player.pauseVideo();
                }

                $('.videos__information-box .modal__content').remove();

                if (document.documentElement.clientWidth < 480) {
                    document.querySelector('html').style.overflowY = 'auto';
                }
            });
        }

        function doFilter(tags) {
            const btn = document.querySelector('.page-template-page-videos .modal .modal__container .modal__footer .modal__btn--primary'),
                tabs = document.querySelectorAll('.page-template-page-videos .videos__modal .tabs__tab');

            function popUpFilter() {
                if (btn) {
                    btn.addEventListener('click', (e) => {
                        e.preventDefault();

                        tags = [];

                        if (tabs) {
                            tabs.forEach((tab) => {
                                if (tab.classList.contains('tabs__tab--selected')) {
                                    const name = tab.querySelector('span').textContent;
                                    tags.push(name);
                                }
                            })
                        }

                        getAllVideos(tags);

                        if (tags == '') {
                            getAllTags(titleTags);
                        } else {
                            getAllTags(tags);
                        }
                    });
                }
            }

            popUpFilter();
        }

        doFilter(tags)

        function getAllVideos(tags) {
            if (document.documentElement.clientWidth < 480) {
                document.querySelector('html').style.overflowY = 'auto';
            }

            if (loader) {
                loader.style.display = 'block';
            }

            if (containerTabs) {
                containerTabs.style.display = 'none';
            }

            if (cardsVideo) {
                cardsVideo.innerHTML = '';
            }

            if (pagination) {
                pagination.innerHTML = '';
            }

            if (box) {
                box.classList.remove('modal--popped');
                box.style.display = 'none';
            }

            getVideos(tags)
                .then(function(response) {

                    if (loader) {
                        loader.style.display = 'none';
                    }

                    if (containerTabs) {
                        containerTabs.style.display = 'flex';
                    }

                    if (response.success == true) {
                        const pageSize = 8,
                            totalPages = Math.ceil(response.data.length / pageSize),
                            item = response.data;

                        function createVideoCard(item) {
                            const card = document.createElement('div');
                            card.classList.add('videos__card', 'card');
                            card.setAttribute('data-video-id', item.id);

                            const videoContainer = document.createElement('div');
                            videoContainer.classList.add('card__video', 'video');
                            videoContainer.setAttribute('data-video', item.video);

                            const videoCover = document.createElement('img');
                            if (item.statusPhoto == 'custom') {
                                videoCover.src = item.photo;
                            } else {
                                videoCover.src = `https://img.youtube.com/vi/${item.video}/maxresdefault.jpg`;
                            }
                            videoCover.alt = item.title;
                            videoCover.classList.add('video__cover');
                            videoContainer.appendChild(videoCover);

                            const playButton = document.createElement('button');
                            playButton.classList.add('video__play');
                            playButton.setAttribute('data-video', item.video);
                            playButton.innerHTML = '<svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10.8997 6.25642L1.90058 0.756728C1.749 0.664036 1.57546 0.613404 1.39781 0.610042C1.22017 0.60668 1.04484 0.650709 0.889861 0.737599C0.734882 0.824489 0.605851 0.951101 0.516046 1.10441C0.426241 1.25772 0.378904 1.43218 0.378906 1.60986V12.6102C0.379051 12.7878 0.426479 12.9622 0.516318 13.1154C0.606157 13.2687 0.735168 13.3952 0.890097 13.4821C1.04503 13.5689 1.22029 13.613 1.39787 13.6097C1.57546 13.6064 1.74897 13.5559 1.90058 13.4634L10.8997 7.96367C11.0459 7.87427 11.1667 7.74882 11.2505 7.59936C11.3343 7.44989 11.3783 7.2814 11.3783 7.11004C11.3783 6.93869 11.3343 6.7702 11.2505 6.62073C11.1667 6.47126 11.0459 6.34582 10.8997 6.25642Z" fill="#192B3F"></path> </svg>';

                            videoContainer.appendChild(playButton);

                            const contentContainer = document.createElement('div');
                            contentContainer.classList.add('card__content');

                            const headerContainer = document.createElement('div');
                            headerContainer.classList.add('card__header');

                            const title = document.createElement('h2');
                            title.classList.add('card__title');
                            title.textContent = item.title;

                            const date = document.createElement('span');
                            date.classList.add('card__date');
                            date.textContent = item.date;

                            headerContainer.appendChild(title);
                            headerContainer.appendChild(date);

                            const description = document.createElement('p');
                            description.classList.add('card__desctiption');

                            const descriptionBox = document.createElement('span');
                            descriptionBox.classList.add('informatin');
                            descriptionBox.textContent = item.description;

                            description.appendChild(descriptionBox);

                            const iframe = document.createElement('div');
                            iframe.classList.add('card__modal_iframe');

                            const modalContainer = document.createElement('div');
                            modalContainer.classList.add('modal__container');

                            const modalHeader = document.createElement('div');
                            modalHeader.classList.add('modal__header');

                            const modalTitle = document.createElement('h2');
                            modalTitle.classList.add('modal__title');
                            modalTitle.textContent = item.title;

                            const closeButton = document.createElement('button');
                            closeButton.classList.add('modal__close-btn');
                            closeButton.innerHTML = '<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.53033 0.96967C1.23744 0.676777 0.762563 0.676777 0.46967 0.96967C0.176777 1.26256 0.176777 1.73744 0.46967 2.03033L1.53033 0.96967ZM18.4697 20.0303C18.7626 20.3232 19.2374 20.3232 19.5303 20.0303C19.8232 19.7374 19.8232 19.2626 19.5303 18.9697L18.4697 20.0303ZM19.5303 2.03033C19.8232 1.73744 19.8232 1.26256 19.5303 0.96967C19.2374 0.676777 18.7626 0.676777 18.4697 0.96967L19.5303 2.03033ZM0.469671 18.9697C0.176778 19.2626 0.176778 19.7374 0.469671 20.0303C0.762564 20.3232 1.23744 20.3232 1.53033 20.0303L0.469671 18.9697ZM0.46967 2.03033L18.4697 20.0303L19.5303 18.9697L1.53033 0.96967L0.46967 2.03033ZM18.4697 0.96967L0.469671 18.9697L1.53033 20.0303L19.5303 2.03033L18.4697 0.96967Z" fill="#A7C5E7" fill-opacity="0.58"></path> </svg>';

                            modalHeader.appendChild(modalTitle);
                            modalHeader.appendChild(closeButton);

                            const modalContent = document.createElement('div');
                            modalContent.classList.add('modal__content');

                            modalContainer.appendChild(modalHeader);
                            modalContainer.appendChild(modalContent);

                            if (item.link) {
                                const link = document.createElement('a');
                                link.href = item.link;
                                link.target = '_blank';
                                link.classList.add('card__link');

                                const linkIcon = document.createElement('svg');
                                linkIcon.setAttribute('width', '10');
                                linkIcon.setAttribute('height', '11');
                                linkIcon.setAttribute('viewBox', '0 0 10 11');
                                linkIcon.setAttribute('fill', 'none');
                                linkIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
                                const linkPath1 = document.createElement('path');
                                linkPath1.setAttribute('d', 'M9.21694 1.39297C8.71552 0.891556 8.03544 0.609863 7.32632 0.609863C6.6172 0.609863 5.93713 0.891556 5.4357 1.39297L4.41769 2.41098C4.37945 2.44917 4.34911 2.49452 4.3284 2.54444C4.30768 2.59436 4.29702 2.64787 4.297 2.70192C4.29698 2.75597 4.30761 2.80949 4.32828 2.85943C4.34895 2.90936 4.37926 2.95473 4.41748 2.99295C4.4557 3.03117 4.50107 3.06148 4.55101 3.08215C4.60094 3.10283 4.65447 3.11346 4.70851 3.11344C4.76256 3.11342 4.81607 3.10275 4.86599 3.08204C4.91592 3.06133 4.96127 3.03098 4.99945 2.99274L6.01746 1.97473C6.18934 1.80285 6.39339 1.66651 6.61796 1.57348C6.84253 1.48046 7.08323 1.43258 7.3263 1.43258C7.56938 1.43257 7.81008 1.48045 8.03465 1.57347C8.25922 1.66649 8.46327 1.80283 8.63516 1.97471C8.80704 2.14659 8.94338 2.35064 9.03641 2.57521C9.12943 2.79978 9.17731 3.04047 9.17731 3.28355C9.17731 3.52662 9.12944 3.76732 9.03642 3.99189C8.9434 4.21647 8.80706 4.42052 8.63518 4.5924L7.18093 6.04675C6.83352 6.39338 6.3628 6.58805 5.87205 6.58805C5.38129 6.58805 4.91057 6.39338 4.56316 6.04675C4.486 5.9697 4.38139 5.92644 4.27234 5.92648C4.1633 5.92652 4.05872 5.96985 3.98161 6.04696C3.90451 6.12407 3.86117 6.22864 3.86113 6.33769C3.86109 6.44674 3.90435 6.55135 3.9814 6.62851C4.48324 7.12916 5.16316 7.41032 5.87202 7.41032C6.58088 7.41032 7.2608 7.12916 7.76264 6.62851L9.21694 5.17416C9.71833 4.67273 10 3.99267 10 3.28357C10 2.57447 9.71833 1.89441 9.21694 1.39297Z');
                                linkPath1.setAttribute('fill', '#50A5F3');
                                const linkPath2 = document.createElement('path');
                                linkPath2.setAttribute('d', 'M4.99944 8.22818L3.98143 9.24619C3.80955 9.41807 3.6055 9.55441 3.38093 9.64743C3.15636 9.74046 2.91566 9.78834 2.67259 9.78834C2.42951 9.78834 2.18882 9.74047 1.96424 9.64745C1.73967 9.55443 1.53562 9.41809 1.36374 9.24621C1.19185 9.07433 1.05551 8.87028 0.962486 8.64571C0.869463 8.42114 0.821583 8.18044 0.821581 7.93737C0.821579 7.69429 0.869454 7.45359 0.962473 7.22902C1.05549 7.00445 1.19183 6.8004 1.36371 6.62851L2.81796 5.17416C3.16535 4.8275 3.63608 4.63281 4.12685 4.63281C4.61762 4.63281 5.08834 4.8275 5.43573 5.17416C5.47392 5.21241 5.51927 5.24275 5.56919 5.26346C5.61911 5.28417 5.67263 5.29484 5.72667 5.29486C5.78072 5.29488 5.83424 5.28425 5.88418 5.26358C5.93411 5.24291 5.97949 5.21259 6.0177 5.17438C6.05592 5.13616 6.08623 5.09079 6.10691 5.04085C6.12758 4.99091 6.13821 4.93739 6.13819 4.88335C6.13817 4.8293 6.1275 4.77579 6.10679 4.72586C6.08608 4.67594 6.05574 4.63059 6.01749 4.5924C5.51566 4.09176 4.83573 3.8106 4.12687 3.8106C3.41801 3.8106 2.73809 4.09176 2.23625 4.5924L0.781952 6.04675C0.28104 6.54828 -0.000220327 7.22819 1.29499e-07 7.93703C0.000220586 8.64586 0.281903 9.3256 0.783127 9.82682C1.28435 10.328 1.96409 10.6097 2.67292 10.6099C3.38176 10.6101 4.06167 10.3289 4.56319 9.82794L5.5812 8.80994C5.65825 8.73277 5.70151 8.62817 5.70147 8.51912C5.70143 8.41007 5.65809 8.3055 5.58099 8.22839C5.50388 8.15128 5.39931 8.10794 5.29026 8.10791C5.18121 8.10787 5.0766 8.15112 4.99944 8.22818Z');
                                linkPath2.setAttribute('fill', '#50A5F3');
                                linkIcon.appendChild(linkPath1);
                                linkIcon.appendChild(linkPath2);
                                link.appendChild(linkIcon);
                                const linkText = document.createElement('span');
                                linkText.textContent = item.link;
                                link.appendChild(linkText);

                                description.appendChild(link);
                            }

                            const hashtagsContainer = document.createElement('div');
                            hashtagsContainer.classList.add('card__hashtags');

                            item.categories.forEach(category => {
                                const hashtag = document.createElement('p');
                                hashtag.classList.add('card__hashtag');
                                hashtag.textContent = `#${category}`;
                                hashtagsContainer.appendChild(hashtag);
                            });

                            contentContainer.appendChild(headerContainer);
                            contentContainer.appendChild(description);
                            contentContainer.appendChild(iframe);
                            contentContainer.appendChild(hashtagsContainer);

                            card.appendChild(videoContainer);
                            card.appendChild(contentContainer);
                            return card;
                        }

                        function displayVideos(pageNumber, pageSize) {
                            const startIndex = (pageNumber - 1) * pageSize;
                            const endIndex = startIndex + pageSize;
                            const videosContainer = document.getElementById('cards-video');
                            videosContainer.innerHTML = '';

                            response.data.slice(startIndex, endIndex).forEach(item => {
                                const card = createVideoCard(item);
                                videosContainer.appendChild(card);
                            });
                        }

                        function createPaginationButtons(totalPages) {
                            const paginationContainer = document.getElementById('pagination-video');
                            paginationContainer.innerHTML = '';

                            for (let i = 1; i <= totalPages; i++) {
                                const button = document.createElement('button');
                                button.textContent = i;

                                button.classList.add('videos__navigation');

                                if (i === 1) {
                                    button.classList.add('videos__navigation_current');
                                }

                                if (totalPages == 1) {
                                    button.style.display = 'none';
                                }

                                button.addEventListener('click', () => {
                                    displayVideos(i, 8);
                                    const currentButton = document.querySelector('.videos__navigation.videos__navigation_current');
                                    if (currentButton) {
                                        currentButton.classList.remove('videos__navigation_current');
                                    }
                                    button.classList.add('videos__navigation_current');

                                    showVideoPopup();

                                    const cardsVideo = document.querySelector('.page-template-page-videos .videos .videos__cards');
                                    if (cardsVideo) {
                                        cardsVideo.scrollTo({
                                            top: 0,
                                            behavior: 'smooth'
                                        });
                                    }
                                });
                                paginationContainer.appendChild(button);
                            }
                        }

                        createPaginationButtons(totalPages);
                        displayVideos(1, pageSize);
                        showVideoPopup();
                        closePopupVideo();
                        uniqueViewsVideoPage();
                        let title = document.querySelector('.videos__title_info');
                        if (title) {
                            title.innerHTML = '';
                        }

                    } else {
                        let title = document.querySelector('.videos__title_info');

                        if (!title) {
                            title = document.createElement('h4');
                            title.classList.add('videos__title_info');
                            title.innerHTML = 'We could not find the video. Please try again later.';

                            boxCards.appendChild(title);
                        } else {
                            title.innerHTML = 'We could not find the video. Please try again later.';
                        }
                    }
                })
                .catch(function(error) {});
        }

        getAllVideos(tags);

        function getVideos(tags) {
            return new Promise(function(resolve, reject) {
                $.ajax({
                    type: 'POST',
                    url: mm_ajax.ajaxurl,
                    data: {
                        action: 'get_all_videos',
                        tags: tags,
                        getAllVideos: mm_ajax.security
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

        function getTags(tags) {
            return new Promise(function(resolve, reject) {
                $.ajax({
                    type: 'POST',
                    url: mm_ajax.ajaxurl,
                    data: {
                        action: 'get_all_tags',
                        tags: tags,
                        getAllTags: mm_ajax.security
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
    }
}

function analyticsPage() {
    if (document.querySelector('.page-template-page-analytics')) {
        const containerTabs = document.querySelector('.page-template-page-analytics .analytics .tabs .tabs__common div'),
            loader = document.querySelector('.page-template-page-analytics .analytics .tabs .tabs__common .common__loader'),
            box = document.querySelector('.analytics__modal-filter'),
            boxCards = document.querySelector('.page-template-page-analytics .analytics .analytics__cards'),
            cardsArticles = document.querySelector('.page-template-page-analytics #cards-analytics'),
            pagination = document.querySelector('.page-template-page-analytics #pagination-analytics'),
            filterButton = document.querySelector('.page-template-page-analytics .analytics .tabs .tabs__fitler'),
            name = localStorage.getItem('categoryAnalytic');

        let tags = [];
        let titleTags = ['All categories'];

        function openFilter() {
            if (filterButton) {
                filterButton.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (box) {
                        box.classList.add('modal--popped');
                        box.style.display = 'block';

                        if (document.documentElement.clientWidth < 480) {
                            document.querySelector('html').style.overflowY = 'hidden';
                        }
                    }
                })
            }
        }

        openFilter();

        function closePopupCategory() {
            const closes = document.querySelectorAll('.page-template-page-analytics .analytics__modal .modal__close-btn');
            const blocks = document.querySelectorAll('.page-template-page-analytics .analytics__modal');
            const iframes = document.querySelectorAll('.page-template-page-analytics .analytics .card__modal_iframe');
            const contents = document.querySelectorAll('.page-template-page-analytics .card__analytics .modal__container .modal__content');

            if (closes) {
                Array.from(closes).forEach((close) => {
                    close.addEventListener('click', (e) => {
                        e.preventDefault();

                        Array.from(blocks).forEach((block) => {
                            block.classList.remove('modal--popped');
                            box.style.display = 'none';
                        });

                        Array.from(iframes).forEach((iframe) => {
                            iframe.style.display = 'none';
                        });

                        if (document.documentElement.clientWidth < 480) {
                            document.querySelector('html').style.overflowY = 'auto';
                        }

                        contents.forEach((content, i) => {
                            const contentToPaste = contents[i].innerHTML;
                            contents[i].innerHTML = '';
                            setTimeout(function() {
                                contents[i].innerHTML = contentToPaste;
                            }, 100);
                        })
                    });
                });
            }
        }

        function choosingTag() {
            const tabs = document.querySelectorAll('.page-template-page-analytics .analytics__modal .tabs__tab');
            if (tabs) {
                tabs.forEach((tab) => {
                    tab.addEventListener('click', (e) => {
                        e.preventDefault();

                        if (tab) {
                            tab.classList.add('tabs__tab--selected');
                        }
                    });
                })
            }
        }

        choosingTag();

        function cleanUp(tags) {
            const btn = document.querySelector('.page-template-page-analytics .analytics__modal .modal__btn--secondary'),
                tabs = document.querySelectorAll('.page-template-page-analytics .analytics__modal .tabs__tab');

            if (btn) {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    clean();
                    tags = [];
                });

                function clean() {
                    if (tabs) {
                        tabs.forEach((tab) => {
                            tab.classList.remove('tabs__tab--selected');
                        })
                    }
                }
            }
        }

        cleanUp(tags);

        function getAllTags(titleTags) {
            getTags(tags)
                .then(function(response) {
                    if (response.success == true) {

                        if (containerTabs) {
                            containerTabs.innerHTML = '';
                        }

                        response.data.forEach((tab, i) => {
                            const tabElement = document.createElement('div');
                            const spanElement = document.createElement('span');

                            tabElement.classList.add('tabs__tab');
                            tabElement.classList.add(`tabs__tab-${tab.id}`);

                            spanElement.innerHTML = tab.title;

                            tabElement.appendChild(spanElement);

                            if (containerTabs) {
                                containerTabs.appendChild(tabElement);
                            }

                            if (i == 9 && filterButton) {
                                filterButton.style.display = 'block';
                            }

                            titleTags.forEach((title) => {
                                if (title == tab.title) {
                                    tabElement.classList.add('tabs__tab--selected');
                                }
                            })
                        });

                        filterByTag();
                    }
                })
                .catch(function(error) {});
        }

        getAllTags(titleTags);

        function filterByTag() {
            const tabs = document.querySelectorAll('.page-template-page-analytics .analytics .tabs .tabs__common .tabs__tab');
            if (tabs) {
                tabs.forEach((tab) => {
                    tab.addEventListener('click', (e) => {
                        e.preventDefault();
                        if (tabs) {
                            tabs.forEach((tab) => {
                                tab.classList.remove('tabs__tab--selected');
                            })
                        }

                        tags = [];

                        tab.classList.add('tabs__tab--selected');
                        const name = tab.querySelector('span').textContent;

                        if (name == 'All categories') {} else {
                            tags.push(name);
                        }

                        getAllArticles(tags);
                        cleanUp(tags);
                    });
                })
            }
        }

        function activeCategoryAnalyticsPage() {
            const name = localStorage.getItem('categoryAnalytic');
            if (!name) return;

            const maxAttempts = 8;
            const interval = 1000;
            let attempts = 0;

            const checkTabs = () => {
                const tabs = document.querySelectorAll('.page-template-page-analytics .analytics .tabs .tabs__common .tabs__tab');

                if (tabs.length > 0) {
                    tabs.forEach(tab => tab.classList.remove('tabs__tab--selected'));

                    const matchingTab = Array.from(tabs).find(tab => tab.textContent === name);
                    if (matchingTab) {
                        matchingTab.classList.add('tabs__tab--selected');

                        tags = [];
                        tags.push(name);
                        getAllArticles(tags);
                        cleanUp(tags);
                        localStorage.removeItem('categoryAnalytic');
                    }

                    clearInterval(intervalId);
                } else {
                    attempts++;
                    if (attempts >= maxAttempts) {
                        clearInterval(intervalId);
                    }
                }
            };

            const intervalId = setInterval(checkTabs, interval);
        }

        function doFilter(tags) {
            const btn = document.querySelector('.page-template-page-analytics .analytics__modal .modal__btn--primary'),
                tabs = document.querySelectorAll('.page-template-page-analytics .analytics__modal .tabs__tab');

            function popUpFilter() {
                if (btn) {
                    btn.addEventListener('click', (e) => {
                        e.preventDefault();

                        tags = [];

                        if (tabs) {
                            tabs.forEach((tab) => {
                                if (tab.classList.contains('tabs__tab--selected')) {
                                    const name = tab.querySelector('span').textContent;
                                    tags.push(name);
                                }
                            })
                        }

                        getAllArticles(tags);

                        if (tags == '') {
                            getAllTags(titleTags);
                        } else {
                            getAllTags(tags);
                        }
                    });
                }
            }

            popUpFilter();
        }

        doFilter(tags)

        function getAllArticles(tags) {
            if (document.documentElement.clientWidth < 480) {
                document.querySelector('html').style.overflowY = 'auto';
            }

            if (loader) {
                loader.style.display = 'block';
            }

            if (containerTabs) {
                containerTabs.style.display = 'none';
            }

            if (cardsArticles) {
                cardsArticles.innerHTML = '';
            }

            if (pagination) {
                pagination.innerHTML = '';
            }

            if (box) {
                box.classList.remove('modal--popped');
                box.style.display = 'none';
            }

            getArticles(tags)
                .then(function(response) {

                    if (loader) {
                        loader.style.display = 'none';
                    }

                    if (containerTabs) {
                        containerTabs.style.display = 'flex';
                    }

                    if (response.success == true) {
                        const pageSize = 9,
                            totalPages = Math.ceil(response.data.length / pageSize),
                            item = response.data;

                        cardsArticles.style.display = 'grid';

                        function createArticleCard(item) {
                            const blogItem = document.createElement('div');
                            blogItem.classList.add('analytics-item');
                            blogItem.classList.add('blog-item');

                            const blogItemTop = document.createElement('div');
                            blogItemTop.classList.add('blog-item__top');

                            const blogItemImg = document.createElement('div');
                            blogItemImg.classList.add('blog-item__img');

                            const img = document.createElement('img');
                            img.src = item.photo;
                            img.alt = item.title;

                            blogItemImg.appendChild(img);

                            const readMoreLink = document.createElement('a');
                            readMoreLink.href = item.link;
                            readMoreLink.target = '_blank';
                            readMoreLink.classList.add('blog-item__read');

                            const readMoreTitle = document.createElement('span');
                            readMoreTitle.classList.add('blog-item__read-title');
                            readMoreTitle.textContent = 'Read more';

                            const readMoreIcon = document.createElement('span');
                            readMoreIcon.classList.add('blog-item__read-icon');
                            readMoreIcon.innerHTML = `
                                <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.2471 6.41232L8.9971 11.6623C8.91551 11.7439 8.81157 11.7994 8.69842 11.8219C8.58527 11.8444 8.46799 11.8329 8.3614 11.7887C8.25482 11.7446 8.16372 11.6698 8.09962 11.5739C8.03552 11.478 8.00131 11.3652 8.0013 11.2498V6.58315H1.0013C0.846592 6.58315 0.698219 6.52169 0.588823 6.41229C0.479427 6.3029 0.417969 6.15452 0.417969 5.99981C0.417969 5.84511 0.479427 5.69673 0.588823 5.58734C0.698219 5.47794 0.846592 5.41648 1.0013 5.41648H8.0013V0.749818C8.00131 0.634451 8.03552 0.521677 8.09962 0.425754C8.16372 0.329831 8.25482 0.255068 8.3614 0.210916C8.46799 0.166764 8.58527 0.155206 8.69842 0.177704C8.81157 0.200202 8.91551 0.255746 8.9971 0.337312L14.2471 5.58731C14.3013 5.64148 14.3442 5.70579 14.3736 5.77657C14.4029 5.84734 14.418 5.9232 14.418 5.99981C14.418 6.07642 14.4029 6.15228 14.3736 6.22306C14.3442 6.29384 14.3013 6.35815 14.2471 6.41232Z" fill="#192B3F"/>
                                </svg>
                            `;

                            readMoreLink.appendChild(readMoreTitle);
                            readMoreLink.appendChild(readMoreIcon);

                            blogItemTop.appendChild(blogItemImg);
                            blogItemTop.appendChild(readMoreLink);

                            const blogItemBottom = document.createElement('div');
                            blogItemBottom.classList.add('blog-item__bottom');

                            const date = document.createElement('p');
                            date.classList.add('blog-item__date');
                            date.innerHTML = `<span>${item.date}</span>` +
                                (item.status === 'on' ?
                                    `<span class="blog-item__status-on">Trade Open</span>` :
                                    `<span class="blog-item__status-off">Trade Closed</span>`);

                            const titleLink = document.createElement('a');
                            titleLink.href = item.link;
                            titleLink.target = '_blank';
                            titleLink.classList.add('blog-item__title');
                            titleLink.textContent = item.title;

                            const category = document.createElement('div');
                            category.classList.add('blog-item__category');

                            const categoryList = document.createElement('ul');
                            categoryList.classList.add('post-categories');

                            item.categories.forEach(cat => {
                                const categoryItem = document.createElement('li');
                                const categorySpan = document.createElement('span');
                                categorySpan.setAttribute('rel', 'category tag');
                                categorySpan.textContent = `#${cat}`;
                                categoryItem.appendChild(categorySpan);
                                categoryList.appendChild(categoryItem);
                            });

                            category.appendChild(categoryList);

                            blogItemBottom.appendChild(date);
                            blogItemBottom.appendChild(titleLink);
                            blogItemBottom.appendChild(category);

                            blogItem.appendChild(blogItemTop);
                            blogItem.appendChild(blogItemBottom);

                            return blogItem;
                        }

                        function displayArticles(pageNumber, pageSize) {
                            const startIndex = (pageNumber - 1) * pageSize;
                            const endIndex = startIndex + pageSize;
                            const articleContainer = document.getElementById('cards-analytics');
                            articleContainer.innerHTML = '';

                            response.data.slice(startIndex, endIndex).forEach(item => {
                                const card = createArticleCard(item);
                                articleContainer.appendChild(card);
                            });
                        }

                        function createPaginationButtons(totalPages) {
                            const paginationContainer = document.getElementById('pagination-analytics');
                            paginationContainer.innerHTML = '';

                            for (let i = 1; i <= totalPages; i++) {
                                const button = document.createElement('button');
                                button.textContent = i;

                                button.classList.add('analytics__navigation');

                                if (i === 1) {
                                    button.classList.add('analytics__navigation_current');
                                }

                                if (totalPages == 1) {
                                    button.style.display = 'none';
                                }

                                button.addEventListener('click', () => {
                                    displayArticles(i, 9);
                                    const currentButton = document.querySelector('.analytics__navigation.analytics__navigation_current');
                                    if (currentButton) {
                                        currentButton.classList.remove('analytics__navigation_current');
                                    }
                                    button.classList.add('analytics__navigation_current');

                                    const cardsAnalytics = document.querySelector('.page-template-page-analytics .analytics #cards-analytics');
                                    if (cardsAnalytics) {
                                        cardsAnalytics.scrollTo({
                                            top: 0,
                                            behavior: 'smooth'
                                        });
                                    }
                                });
                                paginationContainer.appendChild(button);
                            }
                        }

                        createPaginationButtons(totalPages);
                        displayArticles(1, pageSize);
                        closePopupCategory();
                        let block = document.querySelector('.analytics__title_info');

                        if (block) {
                            block.innerHTML = '';
                        }

                    } else {
                        let block = document.querySelector('.analytics__title_info');

                        cardsArticles.style.display = 'none';

                        if (!block) {
                            block = document.createElement('h4');
                            block.classList.add('analytics__title_info');
                            block.innerHTML = 'We could not find the article. Please try again later.';

                            boxCards.appendChild(block);
                        }
                    }
                })
                .catch(function(error) {});
        }

        if (name) {
            activeCategoryAnalyticsPage();
        } else {
            getAllArticles(tags);
        }

        function getArticles(tags) {
            return new Promise(function(resolve, reject) {
                $.ajax({
                    type: 'POST',
                    url: mm_ajax.ajaxurl,
                    data: {
                        action: 'get_all_posts',
                        tags: tags,
                        getAllPosts: mm_ajax.security
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

        function getTags(tags) {
            return new Promise(function(resolve, reject) {
                $.ajax({
                    type: 'POST',
                    url: mm_ajax.ajaxurl,
                    data: {
                        action: 'get_all_posts_tags',
                        tags: tags,
                        getAllPostsTags: mm_ajax.security
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
    }
}

function setAnalyticCategory() {
    if (document.querySelector('.related-list .related-item li a')) {
        const categories = document.querySelectorAll('.related-list .related-item li a');
        if (categories) {
            categories.forEach((category) => {
                category.addEventListener('click', (e) => {
                    const name = category.textContent.replace(/^#/, '');
                    localStorage.setItem('categoryAnalytic', name);
                });
            });
        }
    }
}

function createActualLink() {
    if (document.querySelector('.page-template-page-profile .btn-actual')) {
        const protocol = window.location.protocol;
        const host = window.location.host;
        const homeUrl = protocol + '//' + host;
        const btn = document.querySelector('.page-template-page-profile .btn-actual');

        if (window.innerWidth < 700) {
            btn.href = '/membership/#actual';
        }
    }
}

function showHidePassword() {
    if (document.querySelector('.authorization__input_password')) {
        const passwordFields = document.querySelectorAll(' .authorization__input_password'),
            showButton = document.querySelector('.eye-show'),
            hideButton = document.querySelector('.eye-hide');

        passwordFields.forEach((passwordField) => {
            passwordField.setAttribute('type', 'password');
        });

        showButton.addEventListener('click', function() {
            passwordFields.forEach((passwordField) => {
                passwordField.setAttribute('type', 'text');
            });
            showButton.style.display = 'none';
            hideButton.style.display = 'inline';
        });

        hideButton.addEventListener('click', function() {
            passwordFields.forEach((passwordField) => {
                passwordField.setAttribute('type', 'password');
            });

            hideButton.style.display = 'none';
            showButton.style.display = 'inline';
        });
    }
}

function popupDiscordConnected() {
    const status = localStorage.getItem('discordConnect');
    const popup = document.querySelector('.popup-discord-connected');
    const popupButtons = document.querySelectorAll('.popup__box_discord .popup-close');

    if (status) {
        if (popup) {
            popup.style.display = 'flex';

            popupButtons.forEach((popupButton) => {
                popupButton.addEventListener('click', function() {
                    popup.style.display = 'none';
                    localStorage.removeItem('discordConnect');

                    if (mm_ajax.cd) {
                        window.open(mm_ajax.cd, "_blank");
                    }
                });
            });
        }
    }
}

function shareArticle() {
    if (document.querySelector('.single')) {
        const btnTwitter = document.querySelector('.article__x'),
            btnFacebook = document.querySelector('.article__facebook');

        btnTwitter.addEventListener('click', (e) => {
            e.preventDefault();
            const pageUrl = encodeURIComponent(window.location.href);
            const pageTitle = encodeURIComponent(document.title);

            const twitterUrl = `https://x.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`;
            window.open(twitterUrl, '_blank', 'width=600,height=400');
        });

        btnFacebook.addEventListener('click', (e) => {
            e.preventDefault();
            const pageUrl = encodeURIComponent(window.location.href);
            const pageTitle = encodeURIComponent(document.title);

            const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}&quote=${pageTitle}`;
            window.open(facebookUrl, '_blank', 'width=600,height=400');
        });
    }
}

function sendNewEmailForSearchSubscribes() {
    const input = document.querySelector('.popup-content-profile .search-subscribes-new-email'),
        button = document.querySelector('.popup-content-profile .search-subscribes-new-email-button'),
        error = document.querySelector('.popup-content-profile .error-subscribes-email'),
        preloader = document.querySelector('.popup-content-profile .popup__checking_process'),
        title = document.querySelector('.popup-content-profile .popup__title'),
        boxContainer = document.querySelector('.popup-content-profile .box__union'),
        emailBlock = document.querySelector('.header-action .btn-title'),
        emailInput = emailBlock.getAttribute('data-user-email'),
        email = emailInput.trim();

    button.addEventListener('click', () => {
        const emailNew = input.value.trim();

        if (emailNew === '') {
            error.innerHTML = 'Please enter an email';
            return;
        }

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(emailNew)) {
            error.innerHTML = 'Enter a valid email';
            return;
        }

        if (emailNew) {
            const infoBox = document.querySelector('.subscription-info .info__box');
            if (infoBox) {
                infoBox.innerHTML = `
            <label for='code'>
                <input type='text' class='search-subscribes-input search-subscribes-code' placeholder='Enter your code'>
                <span class='error-subscribes error-subscribes-code'></span>
            </label>
            <button class='search-subscribes-button search-subscribes-code-button'>Check code</button>
        `;
                sendCheckingCodeToUserMail(email)
                    .then(function(response) {
                        if (response.success === true) {
                            title.innerHTML = 'Please confirm';
                            document.querySelector('.popup-content-profile .subscription-info p:nth-child(1)').innerHTML =
                                `We have sent a code to your primary email address: <b>${email}</b>`;
                            document.querySelector('.popup-content-profile .subscription-info p:nth-child(2)').innerHTML =
                                'Please enter the code in the field below';
                        } else {
                            title.innerHTML = 'Error';
                            document.querySelector('.popup-content-profile .subscription-info p:nth-child(1)').innerHTML =
                                `Please try again`;
                            document.querySelector('.popup-content-profile .subscription-info p:nth-child(2)').innerHTML =
                                '';
                        }
                    })
                    .catch(function(error) {
                        console.error(error);
                    });

                document.querySelector('.search-subscribes-code-button').addEventListener('click', function() {
                    const input = document.querySelector('.search-subscribes-code');
                    const codeEntered = input.value.trim();

                    verifyEmailCode(email, codeEntered)
                        .then(function(res) {
                            if (res.success) {
                                preloader.style.display = 'flex';
                                title.style.opacity = '0.5';
                                boxContainer.style.opacity = '0.5';
                                boxContainer.style.pointerEvents = 'none';

                                deleteSubscribe(emailNew)
                                    .then(function(response) {
                                        preloader.style.display = 'none';
                                        boxContainer.innerHTML = response.data.html;
                                        title.style.opacity = '1';
                                        boxContainer.style.opacity = '1';
                                        boxContainer.style.pointerEvents = 'auto';

                                        if (response.success === true) {
                                            title.innerHTML = 'Your active subscriptions';
                                            deleteSelectedSubscription(emailNew);

                                            addingAdditionalUserEmail(email, emailNew)
                                                .catch(function(error) {
                                                    console.error('Error adding additional email:', error);
                                                });
                                        } else {
                                            title.innerHTML = 'Not found subscriptions';
                                            sendNewEmailForSearchSubscribes();
                                        }
                                    })
                                    .catch(function(error) {
                                        console.error('Error deleting subscription:', error);
                                    });
                            } else {
                                document.querySelector('.error-subscribes-code').textContent = 'Invalid code';
                            }
                        })
                        .catch(function(error) {
                            console.error('Ошибка проверки кода:', error);
                        });
                });
            }
        }
    });

    input.addEventListener('blur', () => {
        error.innerHTML = '';
    });

    input.addEventListener('input', () => {
        error.innerHTML = '';
    });
}

function deleteSelectedSubscription(email) {
    const buttons = document.querySelectorAll('.popup-content-profile .cancel-subscription'),
        preloader = document.querySelector('.popup-content-profile .popup__checking_process'),
        title = document.querySelector('.popup-content-profile .popup__title'),
        popup = document.querySelector('.popup-content-profile'),
        boxContainer = document.querySelector('.popup-content-profile .box__union');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const subscriptionId = button.getAttribute('data-subscription-id');

            preloader.style.display = 'flex';

            deleteSelectedSubscriptionHandler(subscriptionId, email)
                .then(function(response) {
                    preloader.style.display = 'none';

                    if (response.success === true) {
                        title.innerHTML = 'Your subscription has been canceled';
                        title.style.marginTop = '35px';
                        boxContainer.innerHTML = '';

                        hUpdateCancelStatus(email)
                            .then(function(response) {})
                            .catch(function(error) {});

                        setTimeout(() => {
                            popup.style.display = 'none';
                            location.reload();
                        }, "1000");

                    } else {
                        title.innerHTML = 'There was an error. Try again';
                    }
                })
                .catch(function(error) {
                    preloader.style.display = 'none';
                    title.innerHTML = 'There was an error. Try again';
                    console.error(error);
                });
        });
    });
}

function removeSubscriptionsBeforeProfileDeletion(email) {
    const buttons = document.querySelectorAll('.popup-delete-profile .cancel-subscription'),
        preloader = document.querySelector('.popup-delete-profile .popup__checking_process'),
        title = document.querySelector('.popup-delete-profile .popup__title'),
        popup = document.querySelector('.popup-delete-profile'),
        boxContainer = document.querySelector('.popup-delete-profile .box__union');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const subscriptionId = button.getAttribute('data-subscription-id');

            preloader.style.display = 'flex';

            deleteSelectedSubscriptionHandler(subscriptionId, email)
                .then(function(response) {
                    preloader.style.display = 'none';

                    if (response.success === true) {
                        title.innerHTML = 'Your subscription has been canceled';
                        title.style.marginTop = '35px';
                        boxContainer.innerHTML = '';

                        hUpdateCancelStatus(email)
                            .then(function(response) {})
                            .catch(function(error) {});

                        setTimeout(() => {
                            popup.style.display = 'none';
                            location.reload();
                        }, "1000");

                    } else {
                        title.innerHTML = 'There was an error. Try again';
                    }
                })
                .catch(function(error) {
                    preloader.style.display = 'none';
                    title.innerHTML = 'There was an error. Try again';
                    console.error(error);
                });
        });
    });
}

function getCanceledSubscriptionsForUser() {
    const emailBlock = document.querySelector('.header-action .btn-title'),
        emailInput = emailBlock.getAttribute('data-user-email'),
        email = emailInput.trim();

    if (mm_ajax.subscriptionStatus == 'cancel') {
        getAdditionalUserEmail(email)
            .then(response => {
                let newEmail = '';
                if (response.success) {
                    newEmail = response.data;
                } else {
                    newEmail = email;
                }

                return getCanceledSubscriptions(newEmail);
            })
            .then(response => {
                if (response.success === true && Array.isArray(response.data ? .subscriptions) && response.data.subscriptions.length > 0) {

                    const lastSubscription = response.data.subscriptions[response.data.subscriptions.length - 1];

                    const canceledAt = lastSubscription.canceled_at ? `Canceled At: ${lastSubscription.canceled_at}<br>` : '';
                    const cancelAt = lastSubscription.cancel_at ? `Cancel At: ${lastSubscription.cancel_at}` : '';

                    const text = `${canceledAt}${cancelAt}`.trim();

                    $('.pricing-list .item__header_n-free .item__activated_title').each(function() {
                        $(this).html(text);
                    });

                    $('.membership__status').each(function() {
                        $(this).html(text);
                    });
                } else {
                    console.error('No canceled subscriptions found or invalid response:', response);
                }
            })
            .catch(error => {
                console.error('Error fetching canceled subscriptions:', error);
            });
    }
}

function uniqueViewsVideoPage() {
    if (document.querySelector('#cards-video') && document.querySelector('.video__play')) {
        document.querySelectorAll('.video__play').forEach(button => {
            button.addEventListener('click', function() {
                const card = this.closest('.videos__card');
                const postId = card ? .getAttribute('data-video-id');

                countUniqueVideoView(postId)
                    .then(function(response) {})
                    .catch(function(error) {});
            });
        });

        function countUniqueVideoView(postId) {
            return new Promise(function(resolve, reject) {
                $.ajax({
                    type: 'POST',
                    url: mm_ajax.ajaxurl,
                    data: {
                        action: 'c_u_v_v',
                        post_id: postId,
                        cU: mm_ajax.security
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
    }
}