import type { ReactNode, Context } from 'react';
import { createContext, useContext } from 'react';

import type { TMultiSelectContext, TMultiSelect } from './types';
import { useMultiSelect as useMS } from './hooks/useMultiSelect';

const MultiSelectContext = createContext<TMultiSelectContext<any>>(
  {} as TMultiSelectContext<any>
);

const MultiSelect = <T extends { id: string }, TAction>({
  data,
  callback,
  children,
}: TMultiSelect<T, TAction>) => {
  const ms = useMS<T>({
    data,
  });
  return (
    <MultiSelectContext.Provider value={{ ...ms }}>
      {children({
        items: ms.items,
        onAction: (action) => callback && callback(ms.selected, action),
      })}
    </MultiSelectContext.Provider>
  );
};

const useMultiSelect = <T,>() =>
  useContext(MultiSelectContext as Context<TMultiSelectContext<T>>);

export { MultiSelect, useMultiSelect };
