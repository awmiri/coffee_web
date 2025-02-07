// change document value 
let $ = document
// select elements
const moonIcons = $.querySelectorAll('.moon_icon');   // moon icon for light and dark mode
const getThemContent = $.querySelector('.them_content');  // text in nav for light and dark mode
const shopeIcon = $.querySelector('#shope_card');  // shopping icon in desktop mode
const getShopeArea = $.querySelector('#shop_area');  // shopping area in desktop 
const subMenuBtn = $.querySelector('.submenu_btn');  // arrow down icon in nav menu
const getSubMenu = $.querySelector('.submenu_close');  // submenu in nav menu
const getNavMenu = $.querySelector('.nav');  // nav area
const closeNavBtn = $.querySelector('.close_nav');  // close icon in nav menu
const openNavBtn = $.querySelector('.nav_btn--open');  // burger icon
const overlay = $.querySelector('.overlay_close');  // dark area when you open nav&shopping area
const darkBg = $.querySelector('.dark_bg');  // dark area when you open nav&shopping area
const shoppingCard = $.querySelector('.shopping_card');  // shopping icon in mobile mode
const shoppingNav = $.querySelector('.shopping');  // shopping area in mobile
const closeShoppingBtn = $.querySelector('.close_shopping-btn');  // close icon in shopping 
const shoppingCardInNavMenu = $.querySelector('#nav_shopping_card');  // shopping icon when you open burger menu
const eyeBtn = $.querySelector('.show-pass');  //
const PassInput = $.querySelector('.pass_input');  //
// widely use function
function overlayAdd() {
    overlay.classList.remove('overlay_close')
    overlay.classList.add('overlay')
}// for open dark bg when something open
function overlayRemove() {
    overlay.classList.add('overlay_close')
    overlay.classList.remove('overlay')
}// for close dark bg when something close
function navRemove() {
    getNavMenu.classList.add('-right-64')
    getNavMenu.classList.remove('right-0')
}// for close navigation menu
function navAdd() {
    getNavMenu.classList.remove('-right-64')
    getNavMenu.classList.add('right-0')
} // for open navigation menu
// local storage for dark mood event
if (window.localStorage.getItem('them') === 'dark') {
    $.documentElement.classList.add('dark')
}
// dark mood event
moonIcons.forEach(function (item) {
    item.addEventListener('click', function () {
        if ($.documentElement.classList.contains('dark')) {
            $.documentElement.classList.remove('dark')
            getThemContent.innerHTML = 'تم تاریک'
            window.localStorage.setItem('them', 'light')
        } else {
            $.documentElement.classList.add('dark')
            getThemContent.innerHTML = 'تم روشن'
            window.localStorage.setItem('them', 'dark')
        }
    })
})
// show shop area
shopeIcon.addEventListener('click', function (event) {
    if (getShopeArea.classList.contains('invisible') && getShopeArea.classList.contains('opacity-0')) {
        getShopeArea.classList.add("visible")
        getShopeArea.classList.add("opacity-100")
        getShopeArea.classList.remove('invisible')
        getShopeArea.classList.remove('opacity-0')
    } else {
        getShopeArea.classList.remove("visible")
        getShopeArea.classList.remove("opacity-100")
        getShopeArea.classList.add('invisible')
        getShopeArea.classList.add('opacity-0')
    }

})
// navmenu open & close
closeNavBtn.addEventListener('click', function () {
    navRemove()
    overlayRemove()
})
overlay.addEventListener('click', function () {
    getNavMenu.classList.add('-right-64')
    getNavMenu.classList.remove('right-0')
    overlayRemove()
})
openNavBtn.addEventListener('click', function () {
    navAdd()
    overlayAdd()
})
// submenu open & close
subMenuBtn.addEventListener('click', function (event) {
    subMenuBtn.classList.toggle('rotate-180')
    event.currentTarget.parentElement.classList.toggle('text-orange-300')
    getSubMenu.classList.toggle('submenu_open')
})
// shopping close & open 
function closeShoppingNav() {
    shoppingNav.classList.add('-left-64')
    shoppingNav.classList.remove('left-0')
    overlayRemove()
}
function openShoppingNav() {
    shoppingNav.classList.remove('-left-64')
    shoppingNav.classList.add('left-0')
    overlayAdd()
}
function openShoppingInNav() {
    navRemove()
    openShoppingNav()
}// open shopping card from nav menu and after that close nav
overlay.addEventListener('click', closeShoppingNav)
closeShoppingBtn.addEventListener('click', closeShoppingNav)
shoppingCard.addEventListener('click', openShoppingNav)
shoppingCardInNavMenu.addEventListener('click', openShoppingInNav)
// add event for dom in order to create star rating
$.addEventListener('DOMContentLoaded', function () {
    const getAllContainer = $.querySelectorAll('.rating-container')  // get all stars container
    getAllContainer.forEach(function (star) {
        const selectStar = star.querySelectorAll('.star')  // get all star
        selectStar.forEach(function (star) {
            star.addEventListener('click', function () {
                const value = star.getAttribute('data-id')  // get stars value
                selectStar.forEach(function (s) {
                    s.classList.remove('text-yellow-400', 'dark:text-yellow-500')  // stars remove color class list
                    s.classList.add('text-gray-300', 'dark:text-gray-400')  // stars add color class list
                })
                selectStar.forEach(function (s) {
                    if (s.getAttribute('data-id') <= value) {
                        s.classList.remove('text-gray-300', 'dark:text-gray-400')
                        s.classList.add('text-yellow-400', 'dark:text-yellow-500')
                    }
                })
            })
        })

    })
})
// add event for page load
// $.body.classList.add('overflow-hidden')
// window.addEventListener('load', function () {
//     setTimeout(function () {
//         darkBg.classList.remove('dark_bg')
//         darkBg.classList.add('dark_bg_close')
//         $.body.classList.remove('overflow-hidden')

//     }, 3000)
// })

const getAllInputGroup = $.querySelectorAll('.form_group')

getAllInputGroup.forEach(function (group) {
    let input = group.querySelector('input')
    let label = group.querySelector('label')

    input.addEventListener('focus', function () {
        label.classList.remove('top-[25%]', 'right-3')
        label.classList.add('label_active')
    })
    input.addEventListener('blur', function () {
        if (input.value) {
            label.classList.remove('top-[25%]', 'right-3')
            label.classList.add('label_active')
        } else {
            label.classList.add('top-[25%]', 'right-3')
            label.classList.remove('label_active')
        }
    })
})
let getEyeIcon = $.querySelector('#svg')
eyeBtn.addEventListener('click', function () {
    if (eyeBtn.id === 'pass_input') {
        PassInput.setAttribute('type', 'text')
        eyeBtn.removeAttribute('id')
        getEyeIcon.setAttribute('href', '#eye_dash')
    } else {
        PassInput.setAttribute('type', 'password')
        eyeBtn.setAttribute('id', 'pass_input')
        getEyeIcon.setAttribute('href', '#normal-eye')
    }

})

let haveAccount = $.querySelector('.have-account')
let createAccount = $.querySelector('.dont-have_account')
let singUp = $.querySelector('.sing-up')
let login = $.querySelector('.login-up')
let container = $.querySelector('.login-form-container')
haveAccount.addEventListener('click', function (e) {
    e.preventDefault()
    container.classList.add('rotate')
    singUp.classList.add('hidden')
    login.classList.remove('hidden')
    login.classList.add('rotate')
})
createAccount.addEventListener('click', function (e) {
    e.preventDefault()
    container.classList.remove('rotate')
    singUp.classList.remove('hidden')
    login.classList.add('hidden')
    login.classList.remove('rotate')
})

let getLoginBtn = $.querySelector('.enter')
getLoginBtn.addEventListener('click', function () { })