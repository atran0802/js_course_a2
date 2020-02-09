const open = document.querySelector('.fas fa-bars')
const closed = document.querySelector('.fas fa-times')
const toggle = document.querySelector('.hamburger')

open.addEventListener('click', function() {
  toggle.className = 'open hamburger'
})

closed.addEventListener('click', function() {
  toggle.className = 'close hamburger'
})