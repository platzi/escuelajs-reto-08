const TABLE = 'products';

module.exports = (store = require('../../../store/dummy')) => {
   const list = () => {
      return store.list(TABLE);
   }

   return {
      list,
   }
}