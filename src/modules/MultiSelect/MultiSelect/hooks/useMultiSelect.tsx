import { Reducer, useReducer } from 'react';

import {
  TAction,
  TMultiSelectState,
  TInitMultiSelect,
  TMultiSelectArgs,
  ACTIONS,
} from '../types';

const initMultiSelect: TInitMultiSelect = (initData) => {
  return [...initData].map((data) => {
    return {
      item: {
        id: data['id'],
        name: data['id'],
        checked: false,
      },
      data,
    };
  });
};

const reducer = <T,>(
  state: TMultiSelectState<T>,
  action: TAction
): TMultiSelectState<T> => {
  switch (action.type) {
    case ACTIONS.UPDATE: {
      const items = [...state].map((itm) => {
        if (itm.item.id === action.payload) {
          return { ...itm, item: { ...itm.item, checked: !itm.item.checked } };
        } else return itm;
      });
      return items;
    }
    case ACTIONS.SELECT_ALL: {
      const items = [...state].map((itm) => {
        return { ...itm, item: { ...itm.item, checked: true } };
      });
      return items;
    }
    case ACTIONS.CLEAR_ALL: {
      const items = [...state].map((itm) => {
        return { ...itm, item: { ...itm.item, checked: false } };
      });
      return items;
    }
    default: {
      return state;
    }
  }
};

function useMultiSelect<T extends { id: string }>({
  data,
}: TMultiSelectArgs<T>) {
  const [items, dispatch] = useReducer<
    Reducer<TMultiSelectState<T>, TAction>,
    T[]
  >(reducer, data, initMultiSelect);

  const change = (payload: string) => {
    dispatch({ type: ACTIONS.UPDATE, payload });
  };

  const selectAll = () => {
    dispatch({ type: ACTIONS.SELECT_ALL });
  };

  const clearAll = () => {
    dispatch({ type: ACTIONS.CLEAR_ALL });
  };

  const selected = items
    .filter(({ item }) => item.checked)
    .map(({ data }) => data);

  const notSelected = items
    .filter(({ item }) => !item.checked)
    .map(({ data }) => data);

  return {
    items,
    selected,
    notSelected,
    change,
    selectAll,
    clearAll,
  };
}

export { useMultiSelect };
