import inqiurer from 'inquirer'
import { obtain } from './lib/jwt'
import fs from 'fs'

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

inqiurer.prompt(questions).then(async answers => {
  const jwt = await obtain(answers)
  console.log(jwt)
  const filename = `${answers.domain}.jwt`
  fs.writeFileSync(filename, JSON.stringify(jwt), 'utf8')
  console.log(`JWT tokens saved to file ${filename}`)
})