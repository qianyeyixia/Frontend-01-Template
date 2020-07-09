let usedReactivities = [];
let handlers = new Map()
function reactive(obj) {
  return new Proxy(obj, {
    get(obj, prop) {
      console.log(obj, prop);
      return obj[prop];
    },
    set(obj, prop, val) {
      obj[prop] = val;
      if(handlers.has(obj)) {
        if(handlers.get(obj).get(prop)) {
          for(let handler of handlers.get(obj).get(prop)) {
            handler()
          }
        }
      }
      return obj[prop];

    },
  });
}

function effect(handler) {
  usedReactivities = [];
  handler();
  for (let useReactivity  of usedReactivities) {
    let [obj,prop] = useReactivity
    if(!handlers.has(obj)) {
      handlers.set(obj, new Map())
    }

    if(!handlers.get(obj).has(prop)) {
      handlers.get(obj).set(prop,[])
    }
    handlers.get(obj).get(prop).push(handler)
  }
}

let dummy;
let proxy = reactive(Object)
effect(() => dummy = proxy.a)
console.log(dummy);
proxy.a = 2
console.log(dummy);
