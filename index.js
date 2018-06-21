//Code your solution here
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(target) {
 return document.querySelector('#nested div.target')
}

function increaseRankBy(n) {
  const rank = document.querySelectorAll('ul.ranked-list')
  
  for (let i = 0; i < rank.length; i++) {
    rank[i].innerHTML = (i + 1).toString()
  }
}

function deepestChild() {
  return document.querySelector('div#grand-node div div div div')
}