
// const mainContent = document.querySelector(".main");
const loading = document.querySelector(".loading");
const loading2 = document.querySelector(".loading-2");
const loadingInner = document.querySelector(".loading-content");

function isFirstTimeVisit() {
    var isFirstTime = sessionStorage.getItem("isFirstTimeVisit");
    if (!isFirstTime) {
        sessionStorage.setItem("isFirstTimeVisit", "true");
        return true;
    } else {
        return false;
    }
}

if (isFirstTimeVisit()) {
    gsap.to(loading2, { autoAlpha: 0 });

    const loadingTl = gsap.timeline();
    loadingTl.to(loading, {
        delay: 4.9,
        duration: 0,
        autoAlpha: 1
    }).to(loadingInner, {
        delay: 0,
        duration: 1,
        y: "10px",
        ease: "power4.inOut",
        autoAlpha: 0
    }).to(loading, {
        delay: 0.50,
        duration: 1,
        autoAlpha: 0
    });
} else {
    gsap.to(loading, { autoAlpha: 0 });
    gsap.to(loading2, {
        delay: 0.3,
        duration: 0.5,
        autoAlpha: 0
    });
}

// 効かないから無効にした、ページを離れるときのアニメーション なんかいい方法があったら作るるもり
// window.addEventListener('beforeunload', function(){
//     gsap.to(mainContent, {
//         delay: 0,
//         duration: 1,
//         autoAlpha: 0
//     });
// });

const progressInner = document.querySelector(".progress-inner");
const progressTl = gsap.timeline({ repeat: 1, repeatDelay: 0 });

progressTl.to(progressInner, {
    left: "0px",
    delay: 0.5,
    duration: 0.7,
    width: "100%",
    ease: "power3.inOut"
}).to(progressInner, {
    delay: 0.5,
    duration: 0.7,
    left: "100%",
    width: "0%",
    ease: "power2.inOut"
});

const fullHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};

window.addEventListener('resize', fullHeight);
fullHeight();