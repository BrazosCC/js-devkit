import test from 'ava'
import { obtain } from '../src/lib/jwt'

test('Bad Credentials', async t => {
  t.throwsAsync(async () =>
    await obtain({
      username:'nobody-has-this-username',
      password:'bad-password'
    })
  )
})

test('Good Credentials', t => {
  obtain('enewhuis', 'l0c1m0t10n')
})
