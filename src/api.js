import { load } from './lib/jwt'
import { api } from './lib/api'

const [,, uri] = process.argv;
const jwt = load();

(async () => {
    console.log(await api(jwt, uri));
})();