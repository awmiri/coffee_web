// change document value 
let $ = document
// select elements
const moonIcon = $.querySelector('#moon_icon');
const moonIconMobile = $.querySelector('#moon_icon_mobile');
const getThemContent = $.querySelector('.them_content');
const shopeIcon = $.querySelector('#shope_card');
const getShopeArea = $.querySelector('#shop_area');
// local storage for dark mood event
if (window.localStorage.getItem('them') === 'dark') {
    $.documentElement.classList.add('dark')
}
// dark mood event
moonIcon.addEventListener('click', function () {
    if ($.documentElement.classList.contains('dark')) {
        $.documentElement.classList.remove('dark')
        window.localStorage.setItem('them', 'light')
    } else {
        $.documentElement.classList.add('dark')
        window.localStorage.setItem('them', 'dark')
    }
})
// dark mood event on mobile
moonIconMobile.addEventListener('click', function () {
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
