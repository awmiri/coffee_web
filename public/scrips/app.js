// change document value 
let $ = document
// select elements
const moonIcons = $.querySelectorAll('.moon_icon');
const getThemContent = $.querySelector('.them_content');
const shopeIcon = $.querySelector('#shope_card');
const getShopeArea = $.querySelector('#shop_area');
const subMenuBtn = $.querySelector('.submenu_btn');
const getSubMenu = $.querySelector('.submenu_close');
const getNavMenu = $.querySelector('.nav');
const closeNavBtn = $.querySelector('.close_nav');
const openNavBtn = $.querySelector('.nav_btn--open');
const overlay = $.querySelector('.overlay_close');
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
    getNavMenu.classList.add('-right-64')
    getNavMenu.classList.remove('right-0')
    overlay.classList.add('overlay_close')
    overlay.classList.remove('overlay')
})
overlay.addEventListener('click', function () {
    getNavMenu.classList.add('-right-64')
    getNavMenu.classList.remove('right-0')
    overlay.classList.add('overlay_close')
    overlay.classList.remove('overlay')
})
openNavBtn.addEventListener('click', function () {
    getNavMenu.classList.remove('-right-64')
    getNavMenu.classList.add('right-0')
    overlay.classList.remove('overlay_close')
    overlay.classList.add('overlay')
})
// submenu open & close
subMenuBtn.addEventListener('click', function (event) {
    subMenuBtn.classList.toggle('rotate-180')
    event.currentTarget.parentElement.classList.toggle('text-orange-300')
    getSubMenu.classList.toggle('submenu_open')
})