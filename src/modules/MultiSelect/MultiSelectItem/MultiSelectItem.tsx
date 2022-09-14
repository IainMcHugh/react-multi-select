import type { TMultiSelectItem } from './types';
import { useMultiSelectItem } from './hooks/useMultiSelectItem';

function MultiSelectItem<T>({ id, children }: TMultiSelectItem<T>) {
  const { item, onChange, onFocus, onBlur } = useMultiSelectItem<T>(id);
  return (
    <>
      {children({
        item: { ...item.item, onChange, onFocus, onBlur },
        data: item.data,
      })}
    </>
  );
}

export { MultiSelectItem };
