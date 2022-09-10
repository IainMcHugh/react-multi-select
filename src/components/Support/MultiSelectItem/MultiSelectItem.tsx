import type { ReactNode } from 'react';
import { memo } from 'react';

import { useMultiSelectItem } from './hooks/useMultiSelectItem';

type TRenderProps<T> = {
  item: {
    id: string;
    checked: boolean;
    onChange: () => void;
  };
  data: T;
};

type TMultiSelectItem<T> = {
  id: string;
  children: (args: TRenderProps<T>) => ReactNode;
};

function Item<T>({ id, children }: TMultiSelectItem<T>) {
  const { item, onChange } = useMultiSelectItem<T>(id);
  if (!item) throw Error('id does not match');
  return (
    <>
      {children({
        item: { ...item.item, onChange },
        data: item.data,
      })}
    </>
  );
}

const MultiSelectItem = memo(Item) as typeof Item;

export { MultiSelectItem };
