import * as auth from "./auth";
import * as search from './search';
import * as chat from './chat';

export default{
    ...auth,
    ...search,
    ...chat,
    
}