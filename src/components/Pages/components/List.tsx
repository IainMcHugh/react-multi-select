import { TData } from '../../../types';
import { TState } from '../../Support/MultiSelect/hooks/useMultiSelect';
import { useMultiSelect } from '../../Support/MultiSelect/MultiSelect';
import { MultiSelectItem } from '../../Support/MultiSelectItem/MultiSelectItem';
import { CheckboxCard } from '../../UI/CheckboxCard/CheckboxCard';

type TList = {
  items: TState<TData>;
};

const List = ({ items }: TList) => {
  const { selected, selectAll, clearAll } = useMultiSelect<TData>();
  const click = () => {
    console.log(selected);
  };
  return (
    <>
      {items.map((item) => (
        <MultiSelectItem<TData> id={item.item.id}>
          {({ item, data }) => (
            <CheckboxCard
              key={item.id}
              id={item.id}
              name={data.name}
              text={data.description}
              checked={item.checked}
              onChange={item.onChange}
            />
          )}
        </MultiSelectItem>
      ))}
      <button onClick={selectAll}>Select all</button>
      <button onClick={clearAll}>Clear all</button>
      <button onClick={click}>Action</button>
    </>
  );
};

export { List };
