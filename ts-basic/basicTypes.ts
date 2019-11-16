let isDone: boolean = false

let decLiteral: number = 20
let hexLiteral: number = 0x14

let myName: string = 'bob'
let sentence: string = `Hello my name is ${myName}`

let list: number[] = [1, 2, 3]
let listArr: Array<number> = [1, 2, 3]

let x: [string, number]
x = ['hello', 10]

enum Color {Red, Green, Blue}

let c: Color = Color.Green

let notSure: any = 4
notSure = 'maybe a string instead'
notSure = false

let notSureList: any[] = [1, true, 'free']

function warnUser(): void {
  console.log('This is a warning message')
}

let unusable: void = undefined

// 建议加 --strictNullChecks 参数
let u: undefined = undefined
let n: null = null

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message)
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed")
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {
  }
}

// 类型断言
let someValue: any = 'this is a string'
let strLength0: number = (<string>someValue).length
let strLength1: number = (someValue as string).length

