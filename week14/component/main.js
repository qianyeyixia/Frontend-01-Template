
function createElement(Cls,attributes,...children) {
  console.log(arguments)
  let o;
  
  if(typeof Cls === 'string') {
    o = new Wrapper(Cls);
  } else {
    o = new Cls({
      timer:P
    })
  }
  
  
  
  o = new Cls({
    timer:{}
  })

  for (let name in attributes) {
    o.setAttribute(name, attributes[name])
  }
  for (let child of children) {
    console.log('child',child);
    if(typeof child === 'string')
      child = new Text(child)
    o.children.push(child)
  }
  return o
}

class Text {
  constructor(text) {
    this.children = []
    this.root = document.createTextNode(text);
  } 
  setAttribute(name,value) {
    this.root.setAttribute(name,value)
  }

  mountTo(parent) {
    parent.appendChild(this.root)
    for(let child of this.children) {
      child.mountTo(this.root)
    }
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
    this.children.push(child)
  }
  render() {
    return <article>
      <header>我是头部</header>
      {this.slot}
      <footer>我是底部</footer>
    </article>
  }

  mountTo(parent) {
    this.slot = <div></div>
    for (let child of this.children) {
      this.slot.appendChild(child)
    }
    this.render().mountTo(parent)
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


let component = <MyComponent>
  <div>text text text</div>
</MyComponent>

component.moveTo(document.body)
console.log(component);