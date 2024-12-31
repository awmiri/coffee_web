// change document value 
let $ = document
// select elements
const moonIcon = $.querySelector('#moon_icon');
// 
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

