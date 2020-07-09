
function create(Cls,attributes,...children) {
  console.log(arguments)
  let o = new Cls;
  for (const name in attributes) {
    o.setAttribute(name,attributes[name])
  }
  console.log(children);
  for (let child of children) {
    o.appendChild(child)
  }
  return o
}

class Text {
  constructor(text) {
    this.children = []

  } 
}


class MyComponent {
  constructor(config) {
    this.children = []

  }
  setAttribute(name,value) {
    // console.log('setAttribute',name,value);
    this.root.setAttribute(name,value)
  }
  appendChild(child) {
    console.log('Parent appendChild',child);
    this.children.push(child)
  }
  render() {
    this.slot = <div></div> 
    
  }
}


class Parent {
  constructor(config) {
    this.children = []
    this.root = document.createElement('div')
  }
  set class(v) {
    console.log('parent::class',v)
    this.root.setAttribute('class',v)
  }
  set id(v) {
    console.log('parent::id',v)
    this.root.setAttribute('id',v)
  }
  setAttribute(name,value) {
    // console.log('setAttribute',name,value);
    this.root.setAttribute(name,value)
  }
  appendChild(child) {
    console.log('Parent appendChild',child);
    this.children.push(child)
  }
  moveTo(parent) {
    parent.appendChild(this.root)
    for (const child of this.children) {
      child.moveTo(this.root)
    }
  }
}



class Child {
  constructor(config) {
    this.children = []
    this.root = document.createElement('div')
  }
  set class(v) {
    console.log('Child::class',v)
  }
  setAttribute(name,value) {
    console.log('Child::setAttribute',name,value);
    this.root.setAttribute(name,value)

  }
  appendChild(child) {
    console.log('class::appendChild',child);
    this.children.push(child)
  }
  moveTo(parent) {
    parent.appendChild(this.root)
    for (const child of this.children) {
      child.moveTo(this.root)
    }
  }
}

let componet = <Parent id="a" class="b">
  <Child id="a" class="b">
  </Child>
  <Child></Child>
  <Child></Child>
</Parent>;

componet.moveTo(document.body)
console.log(componet);