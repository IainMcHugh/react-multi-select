import type { Context } from 'react';
import { createContext, useContext } from 'react';

import type { TMultiSelectContext, TMultiSelect } from './types';
import { useMultiSelect as useMultiSelectState } from './hooks/useMultiSelect';

const MultiSelectContext = createContext<TMultiSelectContext<any>>(
  {} as TMultiSelectContext<any>
);

const MultiSelect = <T extends { id: string }, TAction>({
  data,
  callback,
  children,
}: TMultiSelect<T, TAction>) => {
  const state = useMultiSelectState<T>({ data });
  return (
    <MultiSelectContext.Provider value={{ ...state }}>
      {children({
        items: state.items,
        onAction: (action) => callback && callback(state.selected, action),
      })}
    </MultiSelectContext.Provider>
  );
};

const useMultiSelect = <T,>() =>
  useContext(MultiSelectContext as Context<TMultiSelectContext<T>>);

export { MultiSelect, useMultiSelect };
