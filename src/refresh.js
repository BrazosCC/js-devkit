import { load, refresh, save } from './lib/jwt'
import { title } from './lib/style'

console.log(title);
console.log();

(async () => {
  const jwt = load()
  console.log(await refresh(jwt))
  save(jwt)
})();