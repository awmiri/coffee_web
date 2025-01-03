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
const shoppingCard = $.querySelector('.shopping_card');  // shopping icon in mobile mode
const shoppingNav = $.querySelector('.shopping');  // shopping area in mobile
const closeShoppingBtn = $.querySelector('.close_shopping-btn');  // close icon in shopping 
const shoppingCardInNavMenu = $.querySelector('#nav_shopping_card');  // shopping icon when you open burger menu
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