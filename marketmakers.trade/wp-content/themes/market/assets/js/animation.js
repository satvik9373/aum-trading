// Gsap
gsap.registerPlugin(ScrollTrigger);
gsap.config({
    nullTargetWarn: false
});

$(function() {
    heroSection()
    missionSection()
    knowledgeSection()
    whySection()
    partnersSection()
    learnSection()
    pricingSection()
    reviewSection()
    bannerSection()
    faqSection()
    footerSection()
    specializingSection()
    ideasSection()
    expertSection()
    ctaSection()
    videoSection()
    contactSection()
})

function heroSection() {
    let heroSectionTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.hero',
            start: "top 75%",
            end: "bottom 10%",
        }
    });

    heroSectionTl.fromTo('.hero .hero-clients', {
        autoAlpha: 0,
        y: 30
    }, {
        duration: 0.35,
        y: 0,
        autoAlpha: 1
    }, "0");

    gsap.set('.hero-title', {
        autoAlpha: 1
    })

    const title = new SplitText('.hero .hero-title', {
        type: "chars,words,lines",
        charsClass: 'char',
        wordsClass: 'word',
    });

    heroSectionTl.fromTo(title.chars, {
        autoAlpha: 0,
        y: 20
    }, {
        duration: 0.25,
        y: 0,
        autoAlpha: 1,
        stagger: 0.025,
        scrollTrigger: {
            start: "top 85%"
        }
    }, "-=0.1");

    heroSectionTl.fromTo('.hero .hero-desc', {
        autoAlpha: 0,
        y: 30
    }, {
        duration: 0.35,
        y: 0,
        autoAlpha: 1
    }, "-=0.2");

    heroSectionTl.fromTo('.hero .hero-link', {
        autoAlpha: 0,
        y: 30
    }, {
        duration: 0.35,
        y: 0,
        autoAlpha: 1
    }, "-=0.2");

    heroSectionTl.fromTo('.hero .hero-media', {
        autoAlpha: 0,
        x: 20,
    }, {
        x: 0,
        duration: 0.6,
        autoAlpha: 1
    }, "1");
}

function missionSection() {
    let missionSectionTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.mission',
            start: "top 75%",
            end: "bottom 10%",
        }
    });

    missionSectionTl.fromTo('.mission .mission-label', {
        autoAlpha: 0,
        y: 30
    }, {
        duration: 0.25,
        y: 0,
        autoAlpha: 1
    });

    gsap.set('.mission-title', {
        autoAlpha: 1
    })

    const splitThirdTitle = new SplitText('.mission .mission-title', {
        type: "chars,words,lines",
        charsClass: 'char',
        wordsClass: 'word',
    });

    missionSectionTl.fromTo(splitThirdTitle.lines, {
        autoAlpha: 0,
        y: 20
    }, {
        duration: 0.25,
        y: 0,
        autoAlpha: 1,
        stagger: 0.035,
        scrollTrigger: {
            start: "top 85%",
        }
    }, "-=0.1");

    missionSectionTl.fromTo('.mission .mission-link', {
        autoAlpha: 0,
        y: 30
    }, {
        duration: 0.25,
        y: 0,
        autoAlpha: 1
    }, "-=0.2");

    const title = new SplitText('.mission .mission-item__title', {
        type: "chars,words,lines",
        charsClass: 'char',
        wordsClass: 'word',
    });

    missionSectionTl.fromTo(title.chars, {
        autoAlpha: 0,
        y: 20
    }, {
        duration: 0.2,
        y: 0,
        autoAlpha: 1,
        stagger: 0.025,
        scrollTrigger: {
            start: "top 85%"
        }
    });

    missionSectionTl.fromTo('.mission .mission-item__desc', {
        autoAlpha: 0,
        y: 30
    }, {
        duration: 0.25,
        y: 0,
        autoAlpha: 1
    }, "-=0.2");

    let missionListSectionTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.mission-list',
            start: "top 75%",
            end: "bottom 10%",
        }
    });

    missionListSectionTl.fromTo('.mission .mission-item:not(:first-child)', {
        autoAlpha: 0,
        x: 30
    }, {
        duration: 0.35,
        stagger: 0.2,
        x: 0,
        autoAlpha: 1
    });

    const items = document.querySelectorAll(".mission-item__number-value");
    missionSectionTl.from(items, {
        textContent: 0,
        delay: 0,
        duration: 0.65,
        ease: Power1.easeIn,
        snap: {
            textContent: 1
        },
        stagger: {
            each: 0.2,
            onUpdate: function() {
                this.targets()[0].innerHTML = numberWithCommas(Math.ceil(this.targets()[0].textContent));
            },
        }
    });

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}

function knowledgeSection() {
    let knowledgeSectionTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.knowledge',
            start: "top 75%",
            end: "bottom 10%",
            onEnter: function() {
                const knowledgeLineIcon = document.getElementById('knowledge-line')
                if (window.innerWidth > 991 && knowledgeLineIcon) {
                    new Vivus(
                        'knowledge-line', {
                            type: 'scenario',
                            duration: 10,
                            pathTimingFunction: function(x) {
                                return -x
                            }
                        },
                    );
                }
            },
        }
    });

    const title = new SplitText('.knowledge .knowledge-title', {
        type: "chars,words,lines",
        charsClass: 'char',
        wordsClass: 'word',
    });

    knowledgeSectionTl.fromTo(title.chars, {
        autoAlpha: 0,
        y: 20
    }, {
        duration: 0.2,
        y: 0,
        autoAlpha: 1,
        stagger: 0.025,
        scrollTrigger: {
            start: "top 85%"
        }
    });

    knowledgeSectionTl.fromTo('.knowledge .knowledge-desc', {
        autoAlpha: 0,
        y: 30
    }, {
        duration: 0.25,
        y: 0,
        autoAlpha: 1
    }, "-=0.2");

    if (window.innerWidth > 991) {
        knowledgeSectionTl.fromTo('.knowledge-item', {
            autoAlpha: 0,
            x: 10
        }, {
            x: 0,
            autoAlpha: 1,
            duration: 0.4,
            stagger: 0.1
        })
        knowledgeSectionTl.fromTo('#knowledge-centered', {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            duration: 0.4,
            delay: 0.5
        })
        knowledgeSectionTl.fromTo('.knowledge-img', {
            autoAlpha: 0,
            x: 30
        }, {
            x: 0,
            autoAlpha: 1,
            duration: 0.4,
            delay: 0.1
        })
    } else {
        knowledgeSectionTl.fromTo('.knowledge-item', {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            duration: 0.6,
            stagger: 0.1
        })
        knowledgeSectionTl.fromTo('#knowledge-centered', {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            duration: 0.4
        })
        knowledgeSectionTl.fromTo('.knowledge-img', {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            duration: 0.4
        })
    }
}

function whySection() {
    let whySectionTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.why',
            start: "top 70%",
            end: "bottom 10%",
        }
    });

    whySectionTl.fromTo('.why .why-label', {
        autoAlpha: 0,
        y: 30
    }, {
        duration: 0.35,
        y: 0,
        autoAlpha: 1
    });

    const title = new SplitText('.why .why-title', {
        type: "chars,words,lines",
        charsClass: 'char',
        wordsClass: 'word',
    });

    whySectionTl.fromTo(title.chars, {
        autoAlpha: 0,
        y: 20
    }, {
        duration: 0.2,
        y: 0,
        autoAlpha: 1,
        stagger: 0.025,
        scrollTrigger: {
            start: "top 85%"
        }
    }, "-=0.2");

    whySectionTl.fromTo('.why .why-link', {
        autoAlpha: 0,
        y: 30
    }, {
        duration: 0.35,
        y: 0,
        autoAlpha: 1
    }, "-=0.2");

    whySectionTl.fromTo('.why .why-point', {
        autoAlpha: 0,
        y: 30
    }, {
        duration: 0.35,
        y: 0,
        autoAlpha: 1
    }, "-=0.2");


    whySectionTl.fromTo('.why .why-item', {
        autoAlpha: 0,
        x: 30
    }, {
        duration: 0.5,
        stagger: 0.1,
        x: 0,
        autoAlpha: 1
    }, "-=0.2");
}

function partnersSection() {
    let partnersSectionTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.partners',
            start: "top 65%"
        }
    });

    const ptTitle = new SplitText('.partners .partners-title', {
        type: "chars,words,lines",
        charsClass: 'char',
        wordsClass: 'word',
    });

    partnersSectionTl.fromTo(ptTitle.chars, {
        autoAlpha: 0,
        y: 20
    }, {
        duration: 0.25,
        y: 0,
        autoAlpha: 1,
        stagger: 0.025,
        scrollTrigger: {
            start: "top 85%"
        }
    });

    partnersSectionTl.fromTo('.partners .partners-list', {
        autoAlpha: 0,
        y: 30
    }, {
        duration: 0.25,
        y: 0,
        autoAlpha: 1
    }, "-=0.2");
}

function learnSection() {
    let learnSectionTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.learn',
            start: "top 70%",
            end: "bottom 10%",
        }
    });

    const splitThirdTitle = new SplitText('.learn .learn-title', {
        type: "chars,words,lines",
        charsClass: 'char',
        wordsClass: 'word',
    });

    learnSectionTl.fromTo(splitThirdTitle.chars, {
        autoAlpha: 0,
        y: 20
    }, {
        duration: 0.25,
        y: 0,
        autoAlpha: 1,
        stagger: 0.035,
        scrollTrigger: {
            start: "top 85%",
        }
    });

    let learnContentSectionTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.learn-content',
            start: "top 70%",
            end: "bottom 10%",
        }
    });

    learnContentSectionTl.fromTo('.learn .learn-item', {
        autoAlpha: 0,
        y: 30
    }, {
        delay: 0.2,
        duration: 0.65,
        stagger: 0.2,
        y: 0,
        autoAlpha: 1
    });

    learnContentSectionTl.fromTo('.learn .learn-media', {
        autoAlpha: 0,
        x: 10
    }, {
        duration: 0.6,
        x: 0,
        autoAlpha: 1
    }, '0.2');

    let learnCTASectionTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.learn-cta',
            start: "top 70%",
            end: "bottom 10%",
        }
    });

    const splitSecondTitle = new SplitText('.learn-cta .learn-cta__title', {
        type: "chars,words,lines",
        charsClass: 'char',
        wordsClass: 'word',
    });

    learnCTASectionTl.fromTo(splitSecondTitle.lines, {
        autoAlpha: 0,
        y: 20
    }, {
        duration: 0.25,
        y: 0,
        autoAlpha: 1,
        stagger: 0.035,
        scrollTrigger: {
            start: "top 85%",
        }
    });

    learnCTASectionTl.fromTo('.learn-cta .learn-cta__desc', {
        autoAlpha: 0,
        y: 30
    }, {
        duration: 0.35,
        y: 0,
        autoAlpha: 1
    }, "-=0.2");

    learnCTASectionTl.fromTo('.learn-cta .learn-cta__action', {
        autoAlpha: 0,
        y: 30
    }, {
        duration: 0.35,
        y: 0,
        autoAlpha: 1
    }, "-=0.2");

}

function pricingSection() {
    let pricingSectionTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.pricing',
            start: "top 70%",
            end: "bottom 10%",
        }
    });

    const title = new SplitText('.pricing .pricing-title', {
        type: "chars,words,lines",
        charsClass: 'char',
        wordsClass: 'word',
    });

    pricingSectionTl.fromTo(title.chars, {
        autoAlpha: 0,
        y: 20
    }, {
        duration: 0.35,
        y: 0,
        autoAlpha: 1,
        stagger: 0.025,
        scrollTrigger: {
            start: "top 85%"
        }
    });

    pricingSectionTl.fromTo('.pricing .pricing-desc', {
        autoAlpha: 0,
        y: 30
    }, {
        duration: 0.35,
        y: 0,
        autoAlpha: 1
    }, "-=0.2");

    pricingSectionTl.fromTo('.pricing .pricing-item', {
        autoAlpha: 0,
        x: 30
    }, {
        duration: 0.45,
        stagger: 0.1,
        x: 0,
        autoAlpha: 1
    }, "-=0.2");
}

function reviewSection() {
    let reviewSectionTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.reviews',
            start: "top 70%",
            end: "bottom 10%",
        }
    });

    reviewSectionTl.fromTo('.reviews .reviews-slogan', {
        autoAlpha: 0,
        y: 30
    }, {
        duration: 0.35,
        y: 0,
        autoAlpha: 1
    });

    const title = new SplitText('.reviews .reviews-title', {
        type: "chars,words,lines",
        charsClass: 'char',
        wordsClass: 'word',
    });

    reviewSectionTl.fromTo(title.chars, {
        autoAlpha: 0,
        y: 20
    }, {
        duration: 0.25,
        y: 0,
        autoAlpha: 1,
        stagger: 0.025,
        scrollTrigger: {
            start: "top 85%"
        }
    }, "-=0.1");

    reviewSectionTl.fromTo('.reviews .reviews-slider', {
        autoAlpha: 0,
        y: 30
    }, {
        duration: 0.35,
        stagger: 0.1,
        y: 0,
        autoAlpha: 1
    }, "-=0.2");

    reviewSectionTl.fromTo('.reviews .reviews-link', {
        autoAlpha: 0,
        y: 30
    }, {
        duration: 0.45,
        stagger: 0.1,
        y: 0,
        autoAlpha: 1
    }, "-=0.2");
}

function bannerSection() {
    let bannerSectionTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.banner',
            start: "top 65%",
            end: "bottom 10%",
        }
    });

    const splitThirdTitle = new SplitText('.banner .banner-title', {
        type: "chars,words,lines",
        charsClass: 'char',
        wordsClass: 'word',
    });

    bannerSectionTl.fromTo(splitThirdTitle.lines, {
        autoAlpha: 0,
        y: 20
    }, {
        duration: 0.45,
        y: 0,
        autoAlpha: 1,
        stagger: 0.1,
        scrollTrigger: {
            start: "top 85%",
        }
    });


    bannerSectionTl.fromTo('.banner .banner-link', {
        autoAlpha: 0,
        y: 30
    }, {
        duration: 0.35,
        y: 0,
        autoAlpha: 1
    }, "-=0.2");


    bannerSectionTl.fromTo('.banner .banner-image', {
        autoAlpha: 0,
    }, {
        duration: 0.45,
        autoAlpha: 1
    }, "-=0.2");
}

function faqSection() {
    let faqSectionTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.faq',
            start: "top 70%",
            end: "bottom 10%",
        }
    });

    $('.faq-item:first-child .faq-item__head').trigger('click');


    faqSectionTl.fromTo('.faq .faq-label', {
        autoAlpha: 0,
        y: 30
    }, {
        duration: 0.35,
        y: 0,
        autoAlpha: 1
    });

    const title = new SplitText('.faq .faq-title', {
        type: "chars,words,lines",
        charsClass: 'char',
        wordsClass: 'word',
    });

    faqSectionTl.fromTo(title.chars, {
        autoAlpha: 0,
        y: 20
    }, {
        duration: 0.25,
        y: 0,
        autoAlpha: 1,
        stagger: 0.025,
        scrollTrigger: {
            start: "top 85%"
        }
    }, "-=0.1");

    faqSectionTl.fromTo('.faq .faq-desc', {
        autoAlpha: 0,
        y: 30
    }, {
        duration: 0.45,
        y: 0,
        autoAlpha: 1
    }, "-=0.2");

    faqSectionTl.fromTo('.faq .faq-link', {
        autoAlpha: 0,
        y: 30
    }, {
        duration: 0.35,
        y: 0,
        autoAlpha: 1
    }, "-=0.2");

    faqSectionTl.fromTo('.faq .faq-item', {
        autoAlpha: 0,
        x: 30
    }, {
        duration: 0.35,
        stagger: 0.1,
        x: 0,
        autoAlpha: 1
    }, "-=0.2");
}

function footerSection() {
    let footerSectionTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.footer',
            start: "top 70%",
            end: "bottom 10%",
        }
    });

    footerSectionTl.fromTo('.footer .footer-logo', {
        autoAlpha: 0,
        y: 20
    }, {
        duration: 0.35,
        y: 0,
        autoAlpha: 1
    });

    footerSectionTl.fromTo('.footer .footer-desc', {
        autoAlpha: 0,
        y: 20
    }, {
        duration: 0.35,
        y: 0,
        autoAlpha: 1
    }, "-=0.2");

    footerSectionTl.fromTo('.footer .footer-social__item', {
        autoAlpha: 0,
        x: 20
    }, {
        duration: 0.35,
        stagger: 0.1,
        x: 0,
        autoAlpha: 1
    }, "-=0.2");

    footerSectionTl.fromTo('.footer .footer-box', {
        autoAlpha: 0,
        x: 20
    }, {
        duration: 0.35,
        stagger: 0.1,
        x: 0,
        autoAlpha: 1
    }, "-=0.2");

    footerSectionTl.fromTo('.footer .footer-bottom', {
        autoAlpha: 0,
        y: -20
    }, {
        duration: 0.35,
        stagger: 0.1,
        y: 0,
        autoAlpha: 1
    }, "-=0.2");
}

function specializingSection() {
    let specializingSectionTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.specializing',
            start: "top 70%",
            end: "bottom 10%",
        }
    });

    gsap.set('.specializing .specializing-title', {
        autoAlpha: 1
    })

    const splitThirdTitle = new SplitText('.specializing .specializing-title', {
        type: "chars,words,lines",
        charsClass: 'char',
        wordsClass: 'word',
    });

    specializingSectionTl.fromTo(splitThirdTitle.chars, {
        autoAlpha: 0,
        y: 20
    }, {
        duration: 0.25,
        y: 0,
        autoAlpha: 1,
        stagger: 0.025,
        scrollTrigger: {
            start: "top 85%",
        }
    });

    specializingSectionTl.fromTo('.specializing .specializing-desc', {
        autoAlpha: 0,
        y: 30
    }, {
        duration: 0.4,
        y: 0,
        autoAlpha: 1
    }, "-=0.2");

    specializingSectionTl.fromTo('.specializing .specializing-scroll', {
        autoAlpha: 0,
        y: 30
    }, {
        duration: 0.45,
        y: 0,
        autoAlpha: 1
    }, "-=0.2");

    specializingSectionTl.fromTo('.specializing .specializing-media', {
        autoAlpha: 0,
        x: 30
    }, {
        duration: 0.6,
        x: 0,
        autoAlpha: 1
    }, "-=0.2");

}

function ideasSection() {
    let ideasSectionTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.ideas',
            start: "top 70%",
            end: "bottom 10%",
        }
    });


    ideasSectionTl.fromTo('.ideas .ideas-label', {
        autoAlpha: 0,
        y: 30
    }, {
        duration: 0.4,
        y: 0,
        autoAlpha: 1
    });

    const splitThirdTitle = new SplitText('.ideas .ideas-title', {
        type: "chars,words,lines",
        charsClass: 'char',
        wordsClass: 'word',
    });

    ideasSectionTl.fromTo(splitThirdTitle.chars, {
        autoAlpha: 0,
        y: 20
    }, {
        duration: 0.25,
        y: 0,
        autoAlpha: 1,
        stagger: 0.025,
        scrollTrigger: {
            start: "top 85%",
        }
    }, "-=0.2");

    ideasSectionTl.fromTo('.ideas .ideas-action', {
        autoAlpha: 0,
        y: 30
    }, {
        duration: 0.4,
        y: 0,
        autoAlpha: 1
    }, "-=0.2");

    ideasSectionTl.fromTo('.ideas .ideas-media', {
        autoAlpha: 0,
        x: 30
    }, {
        duration: 0.6,
        x: 0,
        autoAlpha: 1
    }, "-=0.2");


    const splitSecondTitle = new SplitText('.ideas .ideas-subtitle', {
        type: "chars,words,lines",
        charsClass: 'char',
        wordsClass: 'word',
    });

    ideasSectionTl.fromTo(splitSecondTitle.chars, {
        autoAlpha: 0,
        y: 20
    }, {
        duration: 0.25,
        y: 0,
        autoAlpha: 1,
        stagger: 0.024,
        scrollTrigger: {
            start: "top 85%",
        }
    }, "-=0.2");

    ideasSectionTl.fromTo('.ideas .ideas-desc', {
        autoAlpha: 0,
        x: 30
    }, {
        duration: 0.4,
        x: 0,
        autoAlpha: 1
    }, "-=0.2");

    let ideasStepSectionTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.ideas-step',
            start: "top 70%",
            end: "bottom 10%",
        }
    });

    const splitFirstTitle = new SplitText('.ideas .ideas-step__title', {
        type: "chars,words,lines",
        charsClass: 'char',
        wordsClass: 'word',
    });

    ideasStepSectionTl.fromTo(splitFirstTitle.chars, {
        autoAlpha: 0,
        y: 20
    }, {
        duration: 0.25,
        y: 0,
        autoAlpha: 1,
        stagger: 0.025,
        scrollTrigger: {
            start: "top 85%",
        }
    });

    ideasStepSectionTl.fromTo('.ideas .ideas-step__subtitle', {
        autoAlpha: 0,
        y: 30
    }, {
        duration: 0.4,
        y: 0,
        autoAlpha: 1
    }, "-=0.2");

    ideasStepSectionTl.fromTo('.ideas .ideas-step__item', {
        autoAlpha: 0,
        x: 30
    }, {
        duration: 0.4,
        x: 0,
        stagger: 0.1,
        autoAlpha: 1
    }, "-=0.2");

    ideasStepSectionTl.fromTo('.ideas .ideas-step__result', {
        autoAlpha: 0,
        y: 30
    }, {
        duration: 0.4,
        y: 0,
        autoAlpha: 1
    }, "-=0.2");

}

function expertSection() {
    let expertsSectionTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.experts',
            start: "top 70%",
            end: "bottom 10%",
        }
    });

    expertsSectionTl.fromTo('.experts .experts-item__label', {
        autoAlpha: 0,
        y: 30
    }, {
        duration: 0.4,
        y: 0,
        autoAlpha: 1
    }, "-=0.1");

    const splitThirdTitle = new SplitText('.experts .experts-item__title', {
        type: "chars,words,lines",
        charsClass: 'char',
        wordsClass: 'word',
    });

    expertsSectionTl.fromTo(splitThirdTitle.chars, {
        autoAlpha: 0,
        y: 20
    }, {
        duration: 0.25,
        y: 0,
        autoAlpha: 1,
        stagger: 0.025,
        scrollTrigger: {
            start: "top 85%",
        }
    }, "-=0.2");

    expertsSectionTl.fromTo('.experts .experts-item__action', {
        autoAlpha: 0,
        y: 30
    }, {
        duration: 0.4,
        y: 0,
        autoAlpha: 1
    }, "-=0.3");

    expertsSectionTl.fromTo('.experts .experts-item:not(:first-child)', {
        autoAlpha: 0,
        x: 30
    }, {
        duration: 0.6,
        x: 0,
        stagger: 0.1,
        autoAlpha: 1
    }, "-=0.1");

}

function ctaSection() {
    let ctaSectionTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.cta',
            start: "top 70%",
            end: "bottom 10%",
        }
    });

    ctaSectionTl.fromTo('.cta .cta-title', {
        autoAlpha: 0,
        y: 30
    }, {
        duration: 0.4,
        y: 0,
        autoAlpha: 1
    });

    ctaSectionTl.fromTo('.cta .cta-desc', {
        autoAlpha: 0,
        y: 30
    }, {
        duration: 0.4,
        y: 0,
        autoAlpha: 1
    }, "-=0.2");

    ctaSectionTl.fromTo('.cta .cta-action', {
        autoAlpha: 0,
        y: 30
    }, {
        duration: 0.4,
        y: 0,
        autoAlpha: 1
    }, "-=0.2");
}

function videoSection() {
    let videoSectionTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.video',
            start: "top 70%",
            end: "bottom 10%",
        }
    });

    const splitThirdTitle = new SplitText('.video .video-title', {
        type: "chars,words,lines",
        charsClass: 'char',
        wordsClass: 'word',
    });

    videoSectionTl.fromTo(splitThirdTitle.chars, {
        autoAlpha: 0,
        y: 20
    }, {
        duration: 0.25,
        y: 0,
        autoAlpha: 1,
        stagger: 0.025,
        scrollTrigger: {
            start: "top 85%",
        }
    });

    videoSectionTl.fromTo('.video .video-container', {
        autoAlpha: 0,
        y: 30
    }, {
        duration: 0.4,
        y: 0,
        autoAlpha: 1
    }, "-=0.2");

    videoSectionTl.fromTo('.video .video-action', {
        autoAlpha: 0,
        y: 30
    }, {
        duration: 0.4,
        y: 0,
        autoAlpha: 1
    }, "-=0.2");
}

function contactSection() {
    let contactSectionTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.contact',
            start: "top 70%",
            end: "bottom 10%",
        }
    });

    contactSectionTl.fromTo('.contact .contact-label', {
        autoAlpha: 0,
        y: 30
    }, {
        duration: 0.4,
        y: 0,
        autoAlpha: 1
    }, "-=0.1");

    gsap.set('.contact .contact-title', {
        autoAlpha: 1
    })

    const splitThirdTitle = new SplitText('.contact .contact-title', {
        type: "chars,words,lines",
        charsClass: 'char',
        wordsClass: 'word',
    });

    contactSectionTl.fromTo(splitThirdTitle.chars, {
        autoAlpha: 0,
        y: 20
    }, {
        duration: 0.25,
        y: 0,
        autoAlpha: 1,
        stagger: 0.025,
        scrollTrigger: {
            start: "top 85%",
        }
    }, "-=0.2");

    contactSectionTl.fromTo('.contact .contact-info', {
        autoAlpha: 0,
        y: 30
    }, {
        duration: 0.4,
        y: 0,
        autoAlpha: 1
    }, "-=0.2");

    contactSectionTl.fromTo('.contact .contact-social__item', {
        autoAlpha: 0,
        x: 30
    }, {
        duration: 0.6,
        x: 0,
        stagger: 0.1,
        autoAlpha: 1
    }, "-=0.2");

    contactSectionTl.fromTo('.contact .contact-links', {
        autoAlpha: 0,
        y: 30
    }, {
        duration: 0.6,
        y: 0,
        stagger: 0.1,
        autoAlpha: 1
    }, "-=0.1");

    contactSectionTl.fromTo('.contact .contact-right', {
        autoAlpha: 0,
        x: 30
    }, {
        duration: 0.6,
        x: 0,
        stagger: 0.1,
        autoAlpha: 1
    }, "-=0.5");
}