$(function() {
    try {
        if (history.scrollRestoration) {
            history.scrollRestoration = 'manual';
        } else {
            window.onbeforeunload = function() {
                window.scrollTo(0, 0);
            }
        }
    } catch (error) {
        console.log(error)
    }

    try {
        checkHovers()
    } catch (error) {
        console.log(error)
    }

    try {
        partnersSlider()
    } catch (error) {
        console.log(error)
    }

    try {
        learnTabs()
    } catch (error) {
        console.log(error)
    }

    try {
        reviewsSlider()
    } catch (error) {
        console.log(error)
    }

    try {
        faqAccordion()
    } catch (error) {
        console.log(error)
    }

    try {
        checkingAgreement()
    } catch (error) {
        console.log(error)
    }

    try {
        fixedHeader()
    } catch (error) {
        console.log(error)
    }

    try {
        toggleBurger()
    } catch (error) {
        console.log(error)
    }

    try {
        mobileFooterSocialList()
    } catch (error) {
        console.log(error)
    }

    try {
        playVideo()
    } catch (error) {
        console.log(error)
    }

    try {
        smoothScroll()
    } catch (error) {
        console.log(error)
    }

    try {
        categoriesMark('.post-categories', '.post-categories a')
    } catch (error) {
        console.log(error)
    }

    try {
        addPlaceholder('.form #user_name', 'Mikle')
    } catch (error) {
        console.log(error)
    }

    try {
        addPlaceholder('.form #swpm-login-form #user_name', 'Mikle')
    } catch (error) {
        console.log(error)
    }

    try {
        addPlaceholder('.form #email', 'your@mail.com')
    } catch (error) {
        console.log(error)
    }

    try {
        addPlaceholder('.form #password', 'Password')
    } catch (error) {
        console.log(error)
    }

    try {
        addPlaceholder('.form #password_re', 'Repeat password')
    } catch (error) {
        console.log(error)
    }

    try {
        addPlaceholder('.form #swpm_reset_email', 'Mikle')
    } catch (error) {
        console.log(error)
    }

    try {
        addPlaceholder('.form #swpm-login-form #swpm_user_name', 'Mikle')
    } catch (error) {
        console.log(error)
    }

    try {
        addPlaceholder('.form #swpm-login-form #swpm_password', 'Password')
    } catch (error) {
        console.log(error)
    }

    try {
        sendContactForm()
    } catch (error) {
        console.log(error)
    }

    try {
        closePopup('.popup-contact', '.popup-contact .popup__close', '.popup-contact')
    } catch (error) {
        console.log(error)
    }

    try {
        closePopupGuide('.popup-guide', '.popup-guide .popup__close', '.popup-guide .popup__box')
    } catch (error) {
        console.log(error)
    }

    try {
        closePopupThankYou('.popup-thank-you .popup__close', '.popup-thank-you')
    } catch (error) {
        console.log(error)
    }

    try {
        hideInformation('.swpm-registration-submit', '.emailformError', 3000)
    } catch (error) {
        console.log(error)
    }

    try {
        hideInformation('.authorization #swpm-registration-form input', '.emailformError', 3000)
    } catch (error) {
        console.log(error)
    }

    try {
        hideInformation('.swpm-registration-submit', '.user_nameformError', 3000)
    } catch (error) {
        console.log(error)
    }

    try {
        hideInformation('.authorization #swpm-registration-form input', '.user_nameformError', 3000)
    } catch (error) {
        console.log(error)
    }

    try {
        getGuide()
    } catch (error) {
        console.log(error)
    }

    try {
        sendGuideForm()
    } catch (error) {
        console.log(error)
    }

    try {
        toggleBurgerProfile()
    } catch (error) {
        console.log(error)
    }

    try {
        chatDiscord()
    } catch (error) {
        console.log(error)
    }

    try {
        footerIntexLogoHover()
    } catch (error) {
        console.log(error)
    }

    // try {
    //     headerLogoHover()
    // } catch (error) {
    //     console.log(error)
    // }
    //
    // try {
    //     footerLogoHover()
    // } catch (error) {
    //     console.log(error)
    // }
})

window.addEventListener('scroll', function() {
    try {
        fixedHeader()
    } catch (error) {
        console.log(error)
    }
})

function checkHovers() {
    if (window.innerWidth > 991) {
        document.body.classList.add('hovers')
    }
}

function partnersSlider() {
    if (window.innerWidth > 991) {
        var styleBackup = '',
            restOfTimeout = 500,
            currentState = '',
            freeze = false;
        $('.partners-track').on('init', function(event, slick, direction) {
            const observer = new MutationObserver(function(mutationsList, observer) {
                for (const mutation of mutationsList) {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'style' && freeze) {
                        $('.partners-track .slick-track').css('transform', currentState);
                    }
                }
            });
            observer.observe($('.partners-track .slick-track')[0], {
                attributes: true
            });
            $('.partners-track .slick-track').mouseover(function() {
                styleBackup = $('.partners-track .slick-track').attr('style');
                currentState = getComputedStyle($('.partners-track .slick-track')[0]).transform;
                freeze = true;
                $('.partners-track').slick('slickPause');
                let translateDone = parseFloat(currentState.split(',')[4]) * (-1);
                let regex = /translate3d\(([^,]*),/gm;
                if ((m = regex.exec(styleBackup)) !== null) {
                    let translateNeed = parseFloat(m[1]) * (-1);
                    let slideWidth = $('.partners-track .slick-slide').first().width();
                    let speed = 5000 / slideWidth;
                    restOfTimeout = (translateNeed - translateDone) * speed;
                } else {
                    restOfTimeout = 500;
                }
                $('.partners-track .slick-track').css('transform', currentState);
            });
            $('.partners-track .slick-track').mouseout(function() {
                freeze = false;
                $('.partners-track .slick-track').attr('style', styleBackup.replace('5000ms', restOfTimeout + 'ms'));
                $('.partners-track').slick('slickPlay');
            });
        });

        $('.partners-track').slick({
            infinite: true,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 5000,
            arrows: false,
            variableWidth: true,
            swipe: false,
            cssEase: 'linear',
            pauseOnFocus: true,
            pauseOnHover: true,
        })
    }
}

function checkingAgreement() {
    if (document.querySelector('#swpm-registration-form')) {
        const checkbox = document.getElementById('agree-registration'),
            submitBtn = document.querySelector('.swpm-registration-submit'),
            text = document.querySelector('.checkbox-agree .container');

        submitBtn.disabled = !checkbox.checked;

        checkbox.addEventListener('click', function() {
            submitBtn.disabled = !checkbox.checked;
        });

        submitBtn.addEventListener('click', function() {
            text.style.color = checkbox.checked ? 'rgba(167, 197, 231, 0.58)' : '#d8574d';
        });
    }
}

function learnTabs() {
    $('.learn-item__head').on('click', function(e) {
        e.preventDefault()

        let $parent = $(this).parent()
        let $body = $parent.find('.learn-item__body')
        let currentIndex = $(this).parent().attr('data-item')
        $('.learn-img').removeClass('active')
        $(`.learn-img[data-item=${currentIndex}]`).addClass('active')
        if ($parent.hasClass('active')) {
            $body.stop().slideUp('fast')
            $parent.removeClass('active')
        } else {
            $('.learn-item__body').stop().slideUp('fast')
            $('.learn-item').removeClass('active')
            $body.stop().slideDown('fast')
            $parent.addClass('active')
        }
    })
}

function reviewsSlider() {
    $('.reviews-list').slick({
        speed: 350,
        arrows: true,
        centerMode: true,
        variableWidth: true,
        cssEase: 'linear',
        prevArrow: $('.reviews-navigation__prev'),
        nextArrow: $('.reviews-navigation__next'),
    })
}

function faqAccordion() {
    $('.faq-item__head').on('click', function(e) {
        e.preventDefault()

        var $parent = $(this).parent()
        var $body = $parent.find('.faq-item__body')

        if ($parent.hasClass('active')) {
            $body.stop().slideUp()
            $parent.removeClass('active')
        } else {
            $('.faq-item__body').stop().slideUp()
            $('.faq-item').removeClass('active')
            $body.stop().slideDown()
            $parent.addClass('active')
        }
    })
}

function fixedHeader() {
    let scrollPosition = window.scrollY
    let siteHeader = document.querySelector('.header')
    scrollPosition = window.scrollY
    if (scrollPosition >= 30) {
        siteHeader.classList.add('scrolled')
    } else {
        siteHeader.classList.remove('scrolled')
    }
}

function toggleBurger() {
    if (document.querySelector('.header-menu')) {
        const nav = document.querySelector('.header-menu')
        const header = document.querySelector('.header')
        const links = document.querySelectorAll('.header ul li a')
        nav.addEventListener('click', (event) => {
            nav.classList.toggle('open')
            header.classList.toggle('open')
        })

        links.forEach((link) => {
            link.addEventListener('click', () => {
                nav.classList.remove('open')
                header.classList.remove('open')
            })
        })
    }
}

function toggleBurgerProfile() {
    if (document.querySelector('.cabinet-header__menu')) {
        const nav = document.querySelector('.cabinet-header__menu')
        const header = document.querySelector('.cabinet-sidebar')
        if (nav) {
            nav.addEventListener('click', (event) => {
                nav.classList.toggle('open')
                header.classList.toggle('open')
            })
        }
    }
}

function mobileFooterSocialList() {
    if (window.innerWidth < 991) {
        if (document.querySelector('.footer .footer-social')) {
            const socialListElement = document.querySelector('.footer .footer-social')
            const footerElement = document.querySelector('.footer-top')
            if (socialListElement && footerElement) {
                footerElement.appendChild(socialListElement.cloneNode(true))
            }
        }
    }
}

function playVideo() {
    const isPlayed = $('.video-container').hasClass('video--playing')
    const iframeElement = $('.video-container iframe')

    $('.video-container').on('click', function(e) {
        if (!isPlayed) {
            $('.video-container').addClass('video--playing')
            iframeElement[0].src += "?rel=0&autoplay=1"
        }
        e.preventDefault()
    })
}

function smoothScroll() {
    $('.smoothScroll').on('click', function(e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - $('.header').outerHeight()
        }, 500)
    })
}

function categoriesMark(block, item) {
    if (document.querySelector(block)) {
        const items = document.querySelectorAll(item)

        items.forEach((item) => {
            let defaultText = item.textContent
            let fullText = '#' + defaultText
            item.innerHTML = fullText
        })
    }
}

function shareCopy() {
    if (document.querySelector('.article-social__list')) {
        let copyUrlBtn = document.querySelectorAll('.article-social__item')
        const info = document.querySelector('.informationBlock')
        copyUrlBtn.forEach(btn => {
            btn.addEventListener('click', e => {
                e.preventDefault()

                info.style.right = '0px'

                setTimeout(() => {
                    info.style.right = '-1000px'
                }, 3000)

                navigator.clipboard.writeText(window.location.href)
            })
        })
    }
}

function addPlaceholder(block, text) {
    if (document.querySelector(block)) {
        const input = document.querySelector(block)
        if (!input.placeholder) {
            input.placeholder = text
        }
    }
}

function sendContactForm() {
    const $contactForm = $('.contact-form');

    if ($contactForm.length) {
        $contactForm.on('submit', function(e) {
            e.preventDefault();

            const name = $('.contact-name').val();
            const email = $('.contact-email').val();
            const message = $('.contact-message').val();
            const checkbox = $('.contact-agree')[0];

            const nameError = $('.name-error');
            const emailError = $('.email-error');
            const checkboxError = $('.checkbox-error');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Reset error messages
            nameError.html('');
            emailError.html('');
            checkboxError.html('');

            if (!email) {
                emailError.html('The field is mandatory');
            } else if (!emailRegex.test(email)) {
                emailError.html('Enter a correct email');
            } else if (!name) {
                nameError.html('The field is mandatory');
            } else if (!checkbox.checked) {
                checkboxError.html('Please agree to the privacy policy');
            } else {
                $.ajax({
                    url: '/wp-admin/admin-ajax.php',
                    data: {
                        action: 'send_form_contact',
                        name,
                        email,
                        message,
                    },
                    type: 'POST',
                    dataType: 'json',
                    success: function(response) {
                        const thanks = $('.popup-contact');
                        thanks.css('display', 'flex');
                        document.querySelector('body').style.overflow = 'hidden';
                    },
                });
            }
        });
    }
}

function closePopup(check, button, block) {
    const btn = document.querySelector(button),
        box = document.querySelector(block)

    if (document.querySelector(check)) {
        btn.addEventListener("click", function(e) {
            box.style.display = 'none';
            document.querySelector('body').style.overflow = 'auto';
        });
    }
}

function hideInformation(button, block, time) {
    if (document.querySelector('.authorization')) {
        const btns = document.querySelectorAll(button);
        btns.forEach((btn) => {
            btn.addEventListener("click", function(e) {
                setTimeout(() => {
                    const box = document.querySelector(block);
                    box.style.opacity = 0;
                }, time);
            });
        })
    }
}

function getGuide() {
    if (document.querySelector('.popup-guide')) {
        const btns = document.querySelectorAll('.btn-guide'),
            background = document.querySelector('.popup-guide'),
            block = document.querySelector('.popup__box');

        btns.forEach((btn) => {
            btn.addEventListener("click", function(e) {
                e.preventDefault();
                background.style.display = 'flex';
                document.querySelector('body').style.overflow = 'hidden';

                setTimeout(() => {
                    if (document.documentElement.clientWidth < 990) {
                        block.style.marginRight = '0px';
                    } else {
                        block.style.marginRight = '30px';
                    }
                }, 500);
            })
        });
    }
}

function closePopupGuide(check, button, block) {
    const btn = document.querySelector(button),
        box = document.querySelector(block),
        backgroundGuide = document.querySelector(check);

    function close() {
        if (document.documentElement.clientWidth < 990) {
            box.style.marginRight = '-3000px';
        } else {
            box.style.marginRight = '-1000px';
        }
        setTimeout(() => {
            backgroundGuide.style.display = 'none';
            document.querySelector('body').style.overflow = 'auto';
        }, 500);
    }

    close()

    if (document.querySelector(check)) {
        btn.addEventListener("click", function(e) {
            close()
        });
    }
}

function sendGuideForm() {
    const $contactForm = $('.popup-guide .popup__form form');

    if ($contactForm.length) {
        $contactForm.on('submit', function(e) {
            e.preventDefault();

            const email = $('.guide-email').val();
            const checkbox = $('.guide-agree')[0];

            const emailError = $('.email-error');
            const checkboxError = $('.checkbox-error');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Reset error messages
            emailError.html('');
            checkboxError.html('');

            if (!email) {
                emailError.html('The field is mandatory');
            } else if (!emailRegex.test(email)) {
                emailError.html('Enter a correct email');
            } else if (!checkbox.checked) {
                checkboxError.html('Please agree to the privacy policy');
            } else {
                $.ajax({
                    url: '/wp-admin/admin-ajax.php',
                    data: {
                        action: 'send_form_guide',
                        email,
                    },
                    type: 'POST',
                    dataType: 'json',
                    success: function(response) {
                        const thanks = $('.popup-thank-you');
                        thanks.css('display', 'flex');
                        document.querySelector('body').style.overflow = 'hidden';
                        closePopupGuide('.popup-guide', '.popup-guide .popup__close', '.popup-guide .popup__box')
                    },
                });
            }
        });
    }
}

function closePopupThankYou(button, block) {
    const btn = document.querySelector(button),
        box = document.querySelector(block);

    btn.addEventListener('click', (e) => {
        e.preventDefault()
        box.style.display = 'none';
        document.querySelector('body').style.overflow = 'auto';
    })
}

function scrollToBottom(container) {
    container.scrollTop = container.scrollHeight;
}

function chatDiscord() {
    if (document.querySelector('.page-template-page-chat')) {
        const socket = io('http://localhost:3000');
        const emptyChatMessage = document.querySelector('.chat__preloader');
        const messageBox = document.querySelector('.chat-box .chat__box');

        const channelContainers = {
            '1171440544761790554': document.getElementById('channel_1'),
            '1185178871788732497': document.getElementById('channel_2'),
            '1187833482500653076': document.getElementById('channel_3'),
        };

        socket.on('newMessage', (message) => {
            const channelId = message.channelId;

            const messagesContainer = channelContainers[channelId];

            if (!messagesContainer) {
                console.error('Container not found for channelId:', channelId);
            }

            const isMessageDisplayed = Array.from(messagesContainer.children).some((child) => {
                const existingContent = child.querySelector('.text').textContent;
                return existingContent === message.content;
            });

            if (!isMessageDisplayed) {
                const li = document.createElement('li');
                li.className = 'message';

                const messageDate = new Date(message.createdTimestamp);

                const options = {
                    weekday: 'long',
                    hour: 'numeric',
                    minute: 'numeric',
                };

                const formatter = new Intl.DateTimeFormat('en-US', options);
                const formattedDate = formatter.format(messageDate);

                li.innerHTML = `
                <img src="${message.authorId && message.photoAvatar ? `https://cdn.discordapp.com/avatars/${message.authorId}/${message.photoAvatar}.png` : 'https://marketmakers.trade/wp-content/uploads/2023/12/adsads.svg'}" class="photo" alt="avatar">
                <div class="message__box">
                    <div class="author">${message.author}</div>
                    <div class="text">${message.content}</div>
                    <div class="data">${formattedDate}</div>
                </div>
                `;

                li.classList.add('fade-in');
                messagesContainer.appendChild(li);
                scrollToBottom(messagesContainer);
                emptyChatMessage.style.display = 'none';
                messageBox.style.display = 'block';
            }

            if (messagesContainer.children.length === 0) {
                emptyChatMessage.style.display = 'flex';
                messageBox.style.display = 'none';
            }

        });

        tabs();
    }
}

function tabs() {
    if (document.querySelectorAll('.chat-box .chat .channel_name')) {
        const names = document.querySelectorAll('.chat-box .chat .channel_name'),
            blocks = document.querySelectorAll('.chat-box .chat .channels__body .channel__messages');

        function hideBlocks() {
            blocks.forEach((block) => {
                block.style.display = 'none';
            });
        }

        function hideActiveButton() {
            names.forEach((name) => {
                name.classList.remove('channel_name_active');
            });
        }

        names.forEach((name, i) => {
            name.addEventListener('click', () => {
                blocks.forEach((block, index) => {
                    if (i === index) {
                        hideBlocks()
                        hideActiveButton();
                        block.style.display = 'block';
                        name.classList.add('channel_name_active');
                    }
                });
            });
        });
    }
}

function footerIntexLogoHover() {
    const tm = gsap.timeline()
    const logoAnimation = tm.fromTo($('#intex path:not(:last-child)'), {
        scale: 0,
        autoAlpha: 0,
        transformOrigin: 'bottom',
    }, {
        duration: 0.6,
        scale: 1,
        autoAlpha: 1,
        stagger: 0.1,
        force3D: true,
        ease: Bounce.easeOut
    }, '0');

    const xAnimation = tm.fromTo($('#intex path:last-child'), {
        x: 200,
        y: -200,
        autoAlpha: 0,
    }, {
        duration: 0.8,
        x: 0,
        y: 0,
        autoAlpha: 1,
        force3D: true,
        ease: Bounce.easeOut
    }, '0.8');

    $('.footer-info').mouseenter(() => {
        logoAnimation.restart();
        xAnimation.restart();
    }).mouseleave(() => {
        logoAnimation.progress(1).kill();
        xAnimation.progress(1).kill();
    });
}

function headerLogoHover() {
    const mainTimeLine = gsap.timeline()

    const headerFirstLineAnimation = mainTimeLine.fromTo($('.header-logo svg path:nth-child(15)'), {
        xPercent: -100,
        yPercent: 100,
        autoAlpha: 0,
        transformOrigin: 'bottom',
    }, {
        duration: 0.35,
        xPercent: 0,
        yPercent: 0,
        autoAlpha: 1,
        force3D: true,
    });
    const headerSecondLineAnimation = mainTimeLine.fromTo($('.header-logo svg path:nth-child(14), .header-logo svg path:nth-child(13)'), {
        autoAlpha: 0,
    }, {
        duration: 0.3,
        autoAlpha: 1,
        force3D: true,
    });

    const headerLogoAnimation = mainTimeLine.fromTo($('.header-logo svg path:not(:nth-last-child(-n+4))'), {
        scale: 0,
        autoAlpha: 0,
        transformOrigin: 'bottom',
    }, {
        duration: 0.8,
        scale: 1,
        autoAlpha: 1,
        stagger: 0.06,
        force3D: true,
        ease: Bounce.easeOut
    });


    $('.header-logo').mouseenter(() => {
        headerFirstLineAnimation.restart();
        headerSecondLineAnimation.restart();
        headerLogoAnimation.restart();
    }).mouseleave(() => {
        headerFirstLineAnimation.progress(1).kill();
        headerSecondLineAnimation.progress(1).kill();
        headerLogoAnimation.progress(1).kill();
    });
}

function footerLogoHover() {
    const mainTimeLine = gsap.timeline()
    const headerFirstLineAnimation = mainTimeLine.fromTo($('.footer-logo svg path:nth-child(15)'), {
        xPercent: -100,
        yPercent: 100,
        autoAlpha: 0,
        transformOrigin: 'bottom',
    }, {
        duration: 0.35,
        xPercent: 0,
        yPercent: 0,
        autoAlpha: 1,
        force3D: true,
    });
    const headerSecondLineAnimation = mainTimeLine.fromTo($('.footer-logo svg path:nth-child(14), .footer-logo svg path:nth-child(13)'), {
        autoAlpha: 0,
    }, {
        duration: 0.3,
        autoAlpha: 1,
        force3D: true,
    });
    const headerLogoAnimation = mainTimeLine.fromTo($('.footer-logo svg path:not(:nth-last-child(-n+4))'), {
        scale: 0,
        autoAlpha: 0,
        transformOrigin: 'bottom',
    }, {
        duration: 0.8,
        scale: 1,
        autoAlpha: 1,
        stagger: 0.06,
        force3D: true,
        ease: Bounce.easeOut
    });


    $('.footer-logo').mouseenter(() => {
        headerFirstLineAnimation.restart();
        headerSecondLineAnimation.restart();
        headerLogoAnimation.restart();
    }).mouseleave(() => {
        headerFirstLineAnimation.progress(1).kill();
        headerSecondLineAnimation.progress(1).kill();
        headerLogoAnimation.progress(1).kill();
    });
}

function cancelSubscription() {
    const membershipCancel = document.querySelector('.cabinet-header__membership');
    if (membershipCancel) {
        const btns = document.querySelectorAll('.my-membership'),
            block = document.querySelector('.membership__box_links'),
            box = document.querySelector('.cabinet-header__membership'),
            arrow = document.querySelector('.membership__arrow'),
            arrowPath = document.querySelector('.membership__arrow path');

        btns.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                block.style.display = 'block';
                e.stopPropagation();
                arrow.style.transform = 'rotate(90deg)';
                arrowPath.style.stroke = '#4FD298';
                box.classList.add('cabinet-header__membership_active')
            });
        });

        document.addEventListener('click', (e) => {
            if (block) {
                const target = e.target;
                if (block.style.display === 'block' && !membershipCancel.contains(target) && !block.contains(target)) {
                    block.style.display = 'none';
                    arrow.style.transform = 'rotate(0deg)';
                    arrowPath.style.stroke = 'rgb(110, 135, 164)';
                    box.classList.remove('cabinet-header__membership_active')
                }
            }
        });
    }

    if (document.querySelector('.membership-cancel')) {
        const buttons = document.querySelectorAll('.membership-cancel')

        buttons.forEach((button) => {
            const text = button.textContent;

            if (text == 'No active subscriptions') {
                button.style.display = 'none';
            }
        })
    }
}