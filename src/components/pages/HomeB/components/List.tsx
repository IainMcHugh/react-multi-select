import type { TMultiSelectState } from 'src/modules/MultiSelect';
import { MultiSelectItem, useMultiSelect } from 'src/modules/MultiSelect';

import type { TDataB } from 'types';
import { CheckboxCard } from 'src/components/toolkit/CheckboxCard/CheckboxCard';

type TList = {
  items: TMultiSelectState<TDataB>;
  variant?: 'grid';
};

const List = ({ items, variant }: TList) => {
  const { selected, selectAll, clearAll } = useMultiSelect<TDataB>();
  const click = () => console.log('callback: ', selected);
  return (
    <div className={variant}>
      {items.map((item) => (
        <MultiSelectItem<TDataB> id={item.item.id} key={item.item.id}>
          {({ item, data }) => (
            <CheckboxCard
              {...item}
              text={`This person ${
                data.hasPets ? 'does' : 'does not'
              } own pets`}
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
