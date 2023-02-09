console.log("Hello world")

const foo = process.env.FOO
const bar = process.env.BAR

const obj = {
    foo : foo,
    bar: bar,
}

console.log(foo)
console.log(bar)

console.log(`Super trooper env variable is: ${foo}, ${bar}`)

console.log(obj)
console.log(`Super trooper object is: ${JSON.stringify(obj)}`)


