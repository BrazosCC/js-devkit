import { load } from './lib/jwt'
import { query } from './lib/graphQL'

const jwt = load();

(async () => {
    const gql = "{assets { code, name, decimalsMin }}";
    const result = await query(jwt, gql);
    console.log(result.assets);
})();