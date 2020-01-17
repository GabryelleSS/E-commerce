/* Action Types */

export const ADD_PRODUCT = '@cart/ADD_PRODUCT';
export const REMOVE_PRODUCT = '@cart/REMOVE_PRODUCT';
export const UPDATE_AMOUNT = '@cart/UPDATE_AMOUNT';

/* Action Creaters */

export function addProduct(idProduct) {
  return {
    type: ADD_PRODUCT,
    idProduct
  }
}

export function removeProduct(idProduct) {
  return {
    type: REMOVE_PRODUCT,
    idProduct
  }
}

export function updateAmount(idProduct, amount) {
  return {
    type: UPDATE_AMOUNT,
    idProduct,
    amount
  }
}

/* Reducer */

const INITIAL_STATE = {
  products : []
}

// Toda vez que uma acao for despachada na aplicacao o reducer sera executado, pegando o state anterior(na primeira vez nao tera state anterior).
export default function reducer(state = INITIAL_STATE, action) {

  const { amount, idProduct, type } = action;
  
  switch (type) {
    case ADD_PRODUCT:
      
      return {
        ...state,
        products: [
          ...state.products,
          {
            idProduct,
            amount: 1
          }
        ]
      };

    case REMOVE_PRODUCT:

      return {
        ...state,
        products: state.products.filter(product => product.idProduct !== idProduct)
      };

    case UPDATE_AMOUNT:

      return {
        ...state,
        products: state.products.map(product => {
          if (product.idProduct === idProduct) {
            return {
              ...product,
              amount
            }
          }
          else {
            return product;
          }
        }) 
      };
  
    default: 
      return state;
  }
}
