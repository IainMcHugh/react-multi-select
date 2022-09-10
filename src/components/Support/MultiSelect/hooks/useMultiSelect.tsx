import { Reducer, useReducer, useMemo } from 'react';

type TMultiSelectArgs<T> = {
  data: T[];
};

export type Item = {
  id: string;
  checked: boolean;
};

export type TState<T> = {
  item: Item;
  data: T;
}[];

type TUpdateAction = { type: ACTIONS.UPDATE; payload: string };
type TSelectAllAction = { type: ACTIONS.SELECT_ALL };
type TClearAllAction = { type: ACTIONS.CLEAR_ALL };

type TAction = TUpdateAction | TSelectAllAction | TClearAllAction;

enum ACTIONS {
  UPDATE = 'UPDATE',
  SELECT_ALL = 'SELECT_ALL',
  CLEAR_ALL = 'CLEAR_ALL',
}

type TInitMultiSelect = <T extends { id: string }>(data: T[]) => TState<T>;

const initMultiSelect: TInitMultiSelect = (data) => {
  return [...data].map((i) => {
    return {
      item: {
        id: i['id'],
        checked: false,
      },
      data: i,
    };
  });
};

const reducer = <T,>(state: TState<T>, action: TAction): TState<T> => {
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
  const [state, dispatch] = useReducer<Reducer<TState<T>, TAction>, T[]>(
    reducer,
    data,
    initMultiSelect
  );
  const store = useMemo(() => ({ state, dispatch }), [state]);

  const change = (payload: string) => {
    store.dispatch({ type: ACTIONS.UPDATE, payload });
  };

  const selectAll = () => {
    store.dispatch({ type: ACTIONS.SELECT_ALL });
  };
  const clearAll = () => {
    store.dispatch({ type: ACTIONS.CLEAR_ALL });
  };

  const selected = store.state
    .filter(({ item }) => item.checked)
    .map(({ data }) => data);

  return {
    items: store.state,
    selected,
    change,
    selectAll,
    clearAll,
  };
}

export { useMultiSelect };
