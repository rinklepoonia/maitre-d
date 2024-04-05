const menuIcon = document.querySelector(".menuIcon")
const menulist = document.querySelector(".menulist")

menuIcon.addEventListener("click", function () {
    menulist.classList.toggle("show");
    document.body.classList.toggle("overFlowHidden")
    document.querySelector(".menuIcon").classList.toggle("cross")
})
// preloder
const Preload = document.getElementById("preload")
setTimeout(() => {
    Preload.classList.add("d-none")
}, "4000");

// back-to-top
const topBtn = document.querySelector(".topBtn");
const show = document.querySelector(".show");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }
})
topBtn.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
});
// ===========togle_btn
const turnBtn = document.querySelector(".turnBtn")
turnBtn.addEventListener("click", function () {
    turnBtn.classList.toggle("justify-content-end")
    document.querySelector(".month").classList.toggle("d-none")
    document.querySelector(".doller").classList.toggle("d-none")
    document.querySelector(".lessDoller").classList.toggle("d-block")
    document.querySelector(".priceYearly").classList.toggle("d-block")
    document.querySelector(".white_box").classList.toggle("d-none")
    document.querySelector(".yearly_white_box").classList.toggle("d-block")
})

// ============slider

$('.responsive').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: ".next",
    prevArrow: ".prev",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                // dots: true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                // dots: true,
            }
        }
    ]
});