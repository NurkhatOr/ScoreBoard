let homeScore = document.getElementById("home_score")
let guestScore = document.getElementById("guest_score")
let count = 0

function home_add1() {
  count += 1
  homeScore.innerText = count;
}

function home_add2() {
  count += 2
  homeScore.innerText = count;
}
function home_add3() {
  count += 3
  homeScore.innerText = count;
}


function guest_add1() {
  count += 1
  guestScore.innerText = count;
}

function guest_add2() {
  count += 2
  guestScore.innerText = count;
}
function guest_add3() {
  count += 3
  guestScore.innerText = count;
}

