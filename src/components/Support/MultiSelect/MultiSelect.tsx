import type { ReactNode } from 'react';
import { createContext, useContext } from 'react';

import type { TState } from './hooks/useMultiSelect';
import { useMultiSelect as useMS } from './hooks/useMultiSelect';

type RenderProps<T> = {
  items: TState<T>;
  onAction: () => void;
};

type TMultiSelect<T> = {
  data: T[];
  callback?: (t: T[]) => void;
  children: (t: RenderProps<T>) => ReactNode;
};

type TMultiSelectContext<T> = {
  items: TState<T>;
  selected: T[];
  change: (payload: string) => void;
  selectAll: () => void;
  clearAll: () => void;
};

const MultiSelectContext = createContext<TMultiSelectContext<any>>(
  {} as TMultiSelectContext<any>
);

const MultiSelect = <T extends { id: string }>({
  data,
  callback,
  children,
}: TMultiSelect<T>) => {
  const { items, selected, change, selectAll, clearAll } = useMS<T>({
    data,
  });
  return (
    <MultiSelectContext.Provider
      value={{
        items,
        selected,
        change,
        selectAll,
        clearAll,
      }}
    >
      {children({
        items,
        onAction: () => callback && callback(selected),
      })}
    </MultiSelectContext.Provider>
  );
};

const useMultiSelect = <T,>() =>
  useContext(MultiSelectContext as React.Context<TMultiSelectContext<T>>);

export { MultiSelect, useMultiSelect };
