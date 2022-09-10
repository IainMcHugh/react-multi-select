import { useMultiSelect } from '../../MultiSelect/MultiSelect';

function useMultiSelectItem<T>(id: string) {
  const { items, change } = useMultiSelect<T>();
  const item = items.find(({ item }) => item.id === id);
  const onChange = () => change(id);
  return { item, onChange };
}

export { useMultiSelectItem };
