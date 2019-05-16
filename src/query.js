import { load } from './lib/jwt'
import { query } from './lib/graphQL'

const [,, gql] = process.argv;
const jwt = load();

(async () => {
    console.log(await query(jwt, gql));
})();