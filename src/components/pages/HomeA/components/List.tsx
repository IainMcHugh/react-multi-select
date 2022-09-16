import type { TMultiSelectState } from 'src/modules/MultiSelect';
import { MultiSelectItem, useMultiSelect } from 'src/modules/MultiSelect';

import type { TData } from 'types';
import { CheckboxCard } from 'src/components/toolkit/CheckboxCard/CheckboxCard';

type TList = {
  items: TMultiSelectState<TData>;
  variant?: 'grid';
};

const List = ({ items, variant }: TList) => {
  const { selected, selectAll, clearAll } = useMultiSelect<TData>();
  const click = () => console.log('callback: ', selected);
  return (
    <div className={variant}>
      {items.map((item) => (
        <MultiSelectItem<TData> id={item.item.id} key={item.item.id}>
          {({ item, data }) => (
            <CheckboxCard
              id={item.id}
              name={item.name}
              onChange={item.onChange}
              onFocus={item.onFocus}
              onBlur={item.onBlur}
              checked={item.checked}
              text={data.description}
            />
          )}
        </MultiSelectItem>
      ))}
      <button onClick={selectAll}>Select all</button>
      <button onClick={clearAll}>Clear all</button>
      <button onClick={click}>Internal action</button>
    </div>
  );
};

export { List };
