// change document value 
let $ = document
// select elements
const moonIcon = $.querySelector('#moon_icon');
const getRoot = $.querySelector('html');
// dark mood event
moonIcon.addEventListener('click', function () {
    if (getRoot.hasAttribute('class')) {
        getRoot.removeAttribute('class')
    } else {
        getRoot.setAttribute('class', 'dark')
    }
})

