let set = new Set()
const globalProperties = [
  'eval',
  'isFinite',
  'isNaN',
  'parseFloat',
  'parseInt',
  'decodeURI',
  'decodeURIComponent',
  'encodeURI',
  'encodeURIComponent',
  'Array',
  'Date',
  'RegExp',
  'Promise',
  'Proxy',
  'Map',
  'WeakMap',
  'Set',
  'WeakSet',
  'Function',
  'Boolean',
  'String',
  'Number',
  'Symbol',
  'Object',
  'Error',
  'EvalError',
  'RangeError',
  'ReferenceError',
  'SyntaxError',
  'TypeError',
  'URIError',
  'ArrayBuffer',
  'SharedArrayBuffer',
  'DataView',
  'Float32Array',
  'Float64Array',
  'Int8Array',
  'Int16Array',
  'Int32Array',
  'Uint8Array',
  'Uint16Array',
  'Uint32Array',
  'Uint8ClampedArray',
  'Atomics',
  'JSON',
  'Math',
  'Reflect',
]

let queue = []

for (const k of globalProperties) {
  console.log(k)
  console.log(this[k])
  queue.push({
    path:[k],
    object:this[k]
  })
}
let current 

while (queue.length) {
  current = queue.shift()
  console.log(current)
  console.log(current.path.join('.'))
  if(set.has(current.object)) {
    continue
  }
  set.add(current.object)
  let proto = Object.getPrototypeOf(current.object)
  if(proto) {
    queue.push({
      path:current.path.concat(['__proto__']),
      object:proto
    })
  }
  for (const k of Object.getOwnPropertyNames(current.object)) {
    const propery = Object.getOwnPropertyDescriptor(current.object, k)

    if(propery.hasOwnProperty('value') && ((property.value !== null && typeof property.value === 'object') ||
    typeof property.value === 'function') &&
   property.value instanceof Object) {
     queue.push({
      path: current.path.concat([p]),
      object: property.value,
     })
     if (
      property.hasOwnProperty('get') &&
      typeof property.set === 'function'
    ) {
      queue.push({
        path: current.path.concat([p]),
        object: property.get,
      })
    }

    if (
      property.hasOwnProperty('set') &&
      typeof property.set === 'function'
    ) {
      queue.push({
        path: current.path.concat([p]),
        object: property.set,
      })
    }
   }
  }
}