jQuery(document).ready(function ($) {
    // document start

    if($('#anim-div')){
        function addDiv() {
            document.getElementById("anim-div").innerHTML = `
        <div class="dashboard-animation-wpr">
            <div class="dashboard-animation-wpr-in">
                <img src="https://arijit-webskitters.github.io/pug-ai/images/first-bg.svg" alt="" class="first-screen-bg">
                <!-- SCREEN 1 -->
                <div class="dashboard-animation-cover1">
                    <div class="dashboard-animation-top-bar">
                        <div class="dash-logo-wpr">
                            <img src="https://arijit-webskitters.github.io/pug-ai/images/pug-ai-logo.svg" alt="" class="dash-logo">
                        </div>
                        <div class="dash-top-right">
                            <div class="dash-setting-wpr">
                                <img src="https://arijit-webskitters.github.io/pug-ai/images/gear-icon.svg" alt="" class="dash-setting">
                            </div>
                            <div class="dash-ttl-btn-wpr">
                                <img src="https://arijit-webskitters.github.io/pug-ai/images/tutorial-btn.svg" alt="" class="dash-ttl-btn">
                            </div>
                            <div class="dash-user-wpr">
                                <img src="https://arijit-webskitters.github.io/pug-ai/images/user-icon.svg" alt="" class="dash-user">
                            </div>
                        </div>
                    </div>
                    <div class="dashboard-animation-btm-body">
                        <img src="https://arijit-webskitters.github.io/pug-ai/images/screen1-panel-bg.svg" alt="" class="screen1-form-bg">
                        <div class="screen1-form-top-bar">
                            <img src="https://arijit-webskitters.github.io/pug-ai/images/top-bar-panel.svg" alt="" class="screen1-form-top-bar-img">
                        </div>
                        <div class="screen1-form-right-bar">
                            <img src="https://arijit-webskitters.github.io/pug-ai/images/screen1-right-sidebar.svg" alt="" class="screen1-form-right-bar-img">
                            <div class="screen1-form-right-bar-cntnt">
                                <div class="screen1-form-right-bar-cntnt-in">
                                    <div class="starfld-btn-wpr">
                                        <img src="https://arijit-webskitters.github.io/pug-ai/images/star-fld-btn.svg" alt="" class="starfld-btn-img">
                                    </div>
                                    <div class="starfld-txt-wpr">
                                        <img src="https://arijit-webskitters.github.io/pug-ai/images/star-fld-txt.svg" alt="" class="starfld-txt-img">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="screen1-form-wpr">
                            <div class="screen1-form-wpr-in">
                                <div class="name-fld-wpr anim-fld1">
                                    <img src="https://arijit-webskitters.github.io/pug-ai/images/name-field.svg" alt="" class="name-fld-img">
                                </div>
                                <div class="type-fld-wpr anim-fld1">
                                    <img src="https://arijit-webskitters.github.io/pug-ai/images/type-field.svg" alt="" class="type-fld-img">
                                </div>
                                <div class="value-txt-wpr anim-fld1">
                                    <img src="https://arijit-webskitters.github.io/pug-ai/images/value-txt.svg" alt="" class="value-txt-img">
                                </div>
                                <div class="value-fld-wpr anim-fld1">
                                    <img src="https://arijit-webskitters.github.io/pug-ai/images/value-field.svg" alt="" class="value-fld-img">
                                </div>
                                <div class="lstng-optns-wpr">
                                    <div class="lstng-each-optn-div">
                                        <img src="https://arijit-webskitters.github.io/pug-ai/images/listing-option1.svg" alt="" class="lstng-optn-img">
                                    </div>
                                    <div class="lstng-each-optn-div">
                                        <img src="https://arijit-webskitters.github.io/pug-ai/images/listing-option1.svg" alt="" class="lstng-optn-img">
                                    </div>
                                    <div class="lstng-each-optn-div">
                                        <img src="https://arijit-webskitters.github.io/pug-ai/images/listing-option1.svg" alt="" class="lstng-optn-img">
                                    </div>
                                </div>
                                <div class="scrn1-video-wpr">
                                    <img src="https://arijit-webskitters.github.io/pug-ai/images/screen1-video.png" alt="" class="scrn1-video">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <!-- SCREEN 2 -->
                <div class="dashboard-animation-cover2">
                    <div class="dashboard-screen2-top-bar">
                        <div class="screen2-title-wpr">
                            <img src="https://arijit-webskitters.github.io/pug-ai/images/operations-title.svg" alt="" class="screen2-title-img">
                        </div>
                        <div class="screen2-topbar-right">
                            <div class="platform-select1-wpr">
                                <img src="https://arijit-webskitters.github.io/pug-ai/images/platform-select.svg" alt="" class="platform-select1-img">
                            </div>
                            <div class="platform-select2-wpr">
                                <img src="https://arijit-webskitters.github.io/pug-ai/images/platform-select.svg" alt="" class="platform-select2-img">
                            </div>
                        </div>
                    </div>
                    <div class="dashboard-screen2-card-sec">
                        <div class="screen2-card-title-wpr">
                            <img src="https://arijit-webskitters.github.io/pug-ai/images/beginner-title-img.svg" alt="" class="screen2-card-title-img">
                        </div>
                        <div class="dashboard-screen2-card-row">
                            <div class="dashboard-screen2-card-col col-gap">
                                <div class="dashboard-screen2-card">
                                    <div class="screen2-card-img-wpr">
                                        <img src="https://arijit-webskitters.github.io/pug-ai/images/screen-card1.svg" alt="" class="screen-card1">
                                    </div>
                                    <div class="screen2-card-btn-wpr">
                                        <img src="https://arijit-webskitters.github.io/pug-ai/images/screen-card-btn1.svg" alt="" class="screen2-card-btn-img">
                                    </div>
                                </div>
                            </div>
                            <div class="dashboard-screen2-card-col col-gap">
                                <div class="dashboard-screen2-card">
                                    <div class="screen2-card-img-wpr">
                                        <img src="https://arijit-webskitters.github.io/pug-ai/images/screen-card2.png" alt="" class="screen-card2">
                                    </div>
                                    <div class="screen2-card-btn-wpr">
                                        <img src="https://arijit-webskitters.github.io/pug-ai/images/screen-card-btn2.svg" alt="" class="screen2-card-btn-img">
                                    </div>
                                </div>
                            </div>
                            <div class="dashboard-screen2-card-col col-gap">
                                <div class="dashboard-screen2-card">
                                    <div class="screen2-card-img-wpr">
                                        <img src="https://arijit-webskitters.github.io/pug-ai/images/screen-card3.svg" alt="" class="screen-card3">
                                    </div>
                                    <div class="screen2-card-btn-wpr">
                                        <img src="https://arijit-webskitters.github.io/pug-ai/images/screen-card-btn3.svg" alt="" class="screen2-card-btn-img">
                                    </div>
                                </div>
                            </div>
                            <div class="dashboard-screen2-card-col">
                                <div class="dashboard-screen2-card">
                                    <div class="screen2-card-img-wpr">
                                        <img src="https://arijit-webskitters.github.io/pug-ai/images/screen-card4.png" alt="" class="screen-card4">
                                    </div>
                                </div>
                            </div>
                            <div class="dashboard-screen2-card-col">
                                <div class="dashboard-screen2-card">
                                    <div class="screen2-card-img-wpr">
                                        <img src="https://arijit-webskitters.github.io/pug-ai/images/screen-card5.png" alt="" class="screen-card5">
                                    </div>
                                </div>
                            </div>
                            <div class="dashboard-screen2-card-col">
                                <div class="dashboard-screen2-card">
                                    <div class="screen2-card-img-wpr">
                                        <img src="https://arijit-webskitters.github.io/pug-ai/images/screen-card6.png" alt="" class="screen-card6">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <!-- SCREEN 3 -->
                <div class="dashboard-animation-cover3">
    
                    <div class="dashboard-screen3-wpr">
                        <div class="screen3-user-dtls-wpr">
                            <div class="screen3-bg-img-wpr">
                                <img src="https://arijit-webskitters.github.io/pug-ai/images/screen3-bg-img.svg" alt="" class="screen3-bg-img">
                            </div>
                            <div class="screen3-user-dtls">
                                <div class="user-img-wpr">
                                    <img src="https://arijit-webskitters.github.io/pug-ai/images/user-img.png" alt="" class="user-img">
                                </div>
                                <div class="user-name-wpr">
                                    <img src="https://arijit-webskitters.github.io/pug-ai/images/user-name-txt.svg" alt="" class="user-name-img">
                                </div>
                                <div class="wlcm-txt-wpr">
                                    <img src="https://arijit-webskitters.github.io/pug-ai/images/welcome-txt.svg" alt="" class="wlcm-txt-img">
                                </div>
                                <div class="user-dtls-fld-row">
                                    <div class="user-dtls-fld-col">
                                        <div class="user-dtls-fld-wpr">
                                            <img src="https://arijit-webskitters.github.io/pug-ai/images/first-name-img.svg" alt="" class="first-name-img">
                                        </div>
                                    </div>
                                    <div class="user-dtls-fld-col">
                                        <div class="user-dtls-fld-wpr">
                                            <img src="https://arijit-webskitters.github.io/pug-ai/images/last-name-img.svg" alt="" class="last-name-img">
                                        </div>
                                    </div>
                                    <div class="user-dtls-fld-col">
                                        <div class="user-dtls-fld-wpr">
                                            <img src="https://arijit-webskitters.github.io/pug-ai/images/platform-img.svg" alt="" class="platform-img">
                                        </div>
                                    </div>
                                    <div class="user-dtls-fld-col">
                                        <div class="user-dtls-fld-wpr">
                                            <img src="https://arijit-webskitters.github.io/pug-ai/images/age-range-img.svg" alt="" class="age-range-img">
                                        </div>
                                    </div>
                                    <div class="user-dtls-fld-col full">
                                        <div class="user-dtls-fld-wpr">
                                            <img src="https://arijit-webskitters.github.io/pug-ai/images/platform-fld-img.svg" alt="" class="platform-fld-img">
                                        </div>
                                    </div>
                                    <div class="user-dtls-fld-col full">
                                        <div class="user-dtls-fld-wpr">
                                            <img src="https://arijit-webskitters.github.io/pug-ai/images/category-fld-img.svg" alt="" class="category-fld-img">
                                        </div>
                                    </div>
                                    <div class="user-dtls-fld-col full">
                                        <div class="user-dtls-fld-wpr">
                                            <img src="https://arijit-webskitters.github.io/pug-ai/images/category-new-fld-img.svg" alt="" class="category-new-fld-img">
                                        </div>
                                    </div>
                                    <div class="user-dtls-fld-col">
                                        <div class="user-dtls-fld-wpr">
                                            <img src="https://arijit-webskitters.github.io/pug-ai/images/country-field-img.svg" alt="" class="country-field-img">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        }
        addDiv();
    }
    if ($('.dashboard-animation-wpr').length) {


        let dshbrdAnimWpr = document.querySelector('.dashboard-animation-wpr'),
            screen1 = dshbrdAnimWpr.querySelector('.dashboard-animation-cover1'),
            topbarS1 = screen1.querySelector('.dashboard-animation-top-bar'),
            logoS1 = screen1.querySelector('.dash-logo'),
            topbarRightElemS1 = screen1.querySelectorAll('.dash-top-right > *'),
            frameBgS1 = screen1.querySelector('.screen1-form-bg'),
            frameTopBarS1 = screen1.querySelector('.screen1-form-top-bar-img'),
            frameAnimFldsS1 = screen1.querySelectorAll('.anim-fld1'),
            frameLstngPntsS1 = screen1.querySelectorAll('.lstng-optns-wpr .lstng-each-optn-div'),
            frameVideoS1 = screen1.querySelector('.scrn1-video-wpr'),
            frameSideBarS1 = screen1.querySelector('.screen1-form-right-bar'),
            SideBarBtnS1 = screen1.querySelector('.starfld-btn-wpr'),
            SideBartxtS1 = screen1.querySelector('.starfld-txt-wpr'),

            // SCREEN 2
            screen2 = dshbrdAnimWpr.querySelector('.dashboard-animation-cover2'),
            topBarS2 = screen2.querySelector('.dashboard-screen2-top-bar'),
            topBarLogoS2 = screen2.querySelector('.screen2-title-wpr'),
            topBarRightElemsS2 = screen2.querySelectorAll('.screen2-topbar-right > *'),
            cardTitleS2 = screen2.querySelector('.screen2-card-title-wpr'),
            cntntCardsS2 = screen2.querySelectorAll('.dashboard-screen2-card'),

            // SCREEN 3
            screen3 = dshbrdAnimWpr.querySelector('.dashboard-animation-cover3'),
            bgFrameS3 = screen3.querySelector('.screen3-bg-img-wpr'),
            userImgS3 = screen3.querySelector('.user-img-wpr'),
            userNameS3 = screen3.querySelector('.user-name-wpr'),
            wlcmTxtS3 = screen3.querySelector('.wlcm-txt-wpr'),
            userFldsS2 = screen3.querySelectorAll('.user-dtls-fld-wpr')

        // TL Declare
        let dshBrdAnimTl = gsap.timeline({ repeat: -1, defaults: { duration: 0.4, ease: "none", } });

        // SCREEN 1 GSAP SET
        gsap.set([topbarS1, logoS1, topbarRightElemS1, frameBgS1, frameTopBarS1, frameAnimFldsS1, frameLstngPntsS1, frameVideoS1, frameSideBarS1, SideBarBtnS1, SideBartxtS1], { opacity: 0, })
        gsap.set([logoS1], { x: -20 })
        gsap.set([frameAnimFldsS1, SideBartxtS1], { y: 20 })
        gsap.set([topbarRightElemS1, frameLstngPntsS1], { x: 35 })
        gsap.set([frameBgS1, frameTopBarS1, frameVideoS1], { y: 50, })
        gsap.set([frameSideBarS1], { xPercent: 100 })
        gsap.set([SideBarBtnS1], { scale: 0 })

        // SCREEN 2 GSAP SET
        gsap.set([topBarLogoS2, topBarRightElemsS2, cardTitleS2, cntntCardsS2], { opacity: 0, })
        gsap.set([topBarLogoS2], { x: -30 })
        gsap.set([topBarRightElemsS2, cardTitleS2], { y: 20 })
        gsap.set([cntntCardsS2], { y: 30 })


        // SCREEN 3 GSAP SET
        gsap.set([bgFrameS3, userImgS3, userNameS3, wlcmTxtS3, userFldsS2], { opacity: 0, })
        gsap.set([bgFrameS3], { y: 50 })
        gsap.set([userImgS3], { scale: 0 })
        gsap.set([userNameS3, wlcmTxtS3, userFldsS2], { y: 20 })


        // SCREEN 1 ANIMATION TL
        dshBrdAnimTl.set([topbarS1], { opacity: 1, })
            .to(logoS1, { opacity: 1, x: 0 })
            .to(topbarRightElemS1, { opacity: 1, x: 0, stagger: 0.15, })
            .to([frameBgS1, frameTopBarS1], { opacity: 1, y: 0, })
            .to(frameAnimFldsS1, { opacity: 1, y: 0, stagger: 0.15, })
            .to(frameLstngPntsS1, { opacity: 1, x: 0, stagger: 0.15 })
            .to(frameVideoS1, { opacity: 1, y: 0 })
            .to(frameSideBarS1, { opacity: 1, xPercent: 0, })
            .to(SideBarBtnS1, { opacity: 1, scale: 1, })
            .to(SideBartxtS1, { y: 0, opacity: 1, })
            .to(SideBartxtS1, { duration: 1, opacity: 1, })
            .to(screen1, { opacity: 0, })

        // SCREEN 2 ANIMATION TL
        dshBrdAnimTl.set([topBarS2], { opacity: 1, })
            .to(topBarLogoS2, { opacity: 1, x: 0 })
            .to(topBarRightElemsS2, { opacity: 1, y: 0, stagger: 0.15, })
            .to([cardTitleS2], { opacity: 1, y: 0, })
            .to(cntntCardsS2, { opacity: 1, y: 0, stagger: 0.15, }, "-=0.3")
            .to(topBarS2, { duration: 1, opacity: 1, })
            .to(screen2, { opacity: 0, })

        // SCREEN 3 ANIMATION TL
        dshBrdAnimTl.to([bgFrameS3], { opacity: 1, y: 0, })
            .to(userImgS3, { opacity: 1, scale: 1, ease: "bounce.out", })
            .to([userNameS3, wlcmTxtS3], { opacity: 1, y: 0, stagger: 0.4, })
            .to(userFldsS2, { opacity: 1, y: 0, stagger: 0.25, }, "-=0.3")
            .to(bgFrameS3, { duration: 1, opacity: 1, })
            .to(screen2, { opacity: 0, })


        ScrollTrigger({
            trigger: dshbrdAnimWpr,
            start: "top 10%",
            animation: dshBrdAnimTl,
        })


    }





    // document end

})


