

// function GetElementID(el) {
//   return document.getElementById(el)
// }

function reverseChildren(element) {
  let children = Array.prototype.slice.call(element.childNodes)
  children.reverer()
  for (const child of children) {
    element.appendChild(child)
  } 
  
}

function reverseChildren1(element) {
  let l = element.childNodes.length
  while(l-- > 0) {
    element.appendChild(element.child[l])
  }
}

//  推荐   
function reverseChildren2(el) {
  let range = new Range()
  range.selectNodeContents(element)
  let fragment = range.extractContents()
  var l = fragment.childNodes.length
  while(l-- >0) {
    fragment.appendChild(fragment.childNodes[l])
  }
  element.appendChild(fragment)
}

let bEl = document.getElementById('b').childNodes[0]

let range = new Range()


