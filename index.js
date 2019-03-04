function getFirstSelector(selector) {
  return document.querySelector(selector)
}


function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}


function increaseRankBy(n) {
  const ranks = document.querySelectorAll('.ranked-list')
  
  for (let i = 0; i < ranks.length; i++) {
    let childz = ranks[i].children

    for (let j = 0; j < childz.length; j++) {
    childz[j].innerHTML = parseInt(childz[j].innerHTML) + n 
    }
  }
}


function deepestChild() {
  let nodez =  document.getElementById('grand-node')
  let next = nodez.children[0]

  while(next) {
    nodez = next
    next = nodez.children[0]
  }

  return nodez

}


