import {VIEW_ALL_BOOKS, ADD_NEW_BOOK, REMOVE_A_BOOK, RENT_A_BOOK, RETURN_A_BOOK} from '../app-action-constants';

function RootReducer(state,action)
{
  switch(action.type)
  {
    case 'VIEW_ALL_BOOKS':
      return state;
    default:
      return state;
  }
}

export default RootReducer;
