const hamburger = document.querySelector(".nav__hamburger")
const aside = document.querySelector(".header__aside")
const link__home = document.querySelector("#menu__link--home")
const link__usage = document.querySelector("#menu__link--usage")
const link__price = document.querySelector("#menu__link--price")
const link__about = document.querySelector("#menu__link--about")

$(link__home).on('click', function() {
    $(aside).removeClass("header__aside--active")
    $(hamburger).removeClass("is-active")
});
$(link__usage).on('click', function() {
    $(aside).removeClass("header__aside--active")
    $(hamburger).removeClass("is-active")
});
$(link__price).on('click', function() {
    $(aside).removeClass("header__aside--active")
    $(hamburger).removeClass("is-active")
});
$(link__about).on('click', function() {
    $(aside).removeClass("header__aside--active")
    $(hamburger).removeClass("is-active")
});
$(hamburger).on('click', function () {
    $(hamburger).toggleClass("is-active")
    $(aside).toggleClass("header__aside--active")
});

// description face

const face_description_btn = document.querySelector("#usage__container--button-face")
const face_description = document.querySelector("#usage__container--description-face")
const face_description_active = document.querySelector("#usage__container--description-faceActive")
const face_description_btn__btn = document.querySelector("#usage__container--button-face-btn")


$(face_description_btn).on('click', function () {
    $(face_description).toggleClass("usage__container--description-active")
    $(face_description_active).toggleClass("usage__container--description-more")
    $(face_description_btn__btn).toggleClass("usage__container--button-btn-active")
})

// description bug

const bug_description_btn = document.querySelector("#usage__container--button-bug")
const bug_description = document.querySelector("#usage__container--description-bug")
const bug_description_active = document.querySelector("#usage__container--description-bugActive")
const bug_description_btn__btn = document.querySelector("#usage__container--button-bug-btn")


$(bug_description_btn).on('click', function () {
    $(bug_description).toggleClass("usage__container--description-active")
    $(bug_description_active).toggleClass("usage__container--description-more")
    $(bug_description_btn__btn).toggleClass("usage__container--button-btn-active")
})

// description feet

const feet_description_btn = document.querySelector("#usage__container--button-feet")
const feet_description = document.querySelector("#usage__container--description-feet")
const feet_description_active = document.querySelector("#usage__container--description-feetActive")
const feet_description_btn__btn = document.querySelector("#usage__container--button-feet-btn")


$(feet_description_btn).on('click', function () {
    $(feet_description).toggleClass("usage__container--description-active")
    $(feet_description_active).toggleClass("usage__container--description-more")
    $(feet_description_btn__btn).toggleClass("usage__container--button-btn-active")
})

// description bath

const bath_description_btn = document.querySelector("#usage__container--button-bath")
const bath_description = document.querySelector("#usage__container--description-bath")
const bath_description_active = document.querySelector("#usage__container--description-bathActive")
const bath_description_btn__btn = document.querySelector("#usage__container--button-bath-btn")


$(bath_description_btn).on('click', function () {
    $(bath_description).toggleClass("usage__container--description-active")
    $(bath_description_active).toggleClass("usage__container--description-more")
    $(bath_description_btn__btn).toggleClass("usage__container--button-btn-active")
})

// description spray

const spray_description_btn = document.querySelector("#usage__container--button-spray")
const spray_description = document.querySelector("#usage__container--description-spray")
const spray_description_active = document.querySelector("#usage__container--description-sprayActive")
const spray_description_btn__btn = document.querySelector("#usage__container--button-spray-btn")


$(spray_description_btn).on('click', function () {
    $(spray_description).toggleClass("usage__container--description-active")
    $(spray_description_active).toggleClass("usage__container--description-more")
    $(spray_description_btn__btn).toggleClass("usage__container--button-btn-active")
})