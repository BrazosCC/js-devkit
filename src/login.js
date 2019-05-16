import inqiurer from 'inquirer'
import { obtain, save } from './lib/jwt'
import { title } from './lib/style'

const questions = [
  {
    type: 'input',
    name: 'domain',
    message: 'Domain:',
    default: 'sandbox.getloci.com'
  },
  {
    type: 'input',
    name: 'username',
    message: "Username:"
  },
  {
    type: 'password',
    name: 'password',
    message: 'Password:'
  }
]

console.log(title)
console.log()

inqiurer.prompt(questions).then(async answers => {
  const jwt = await obtain(answers)
  console.log(jwt)
  save(jwt)
})