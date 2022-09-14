import { useMultiSelect } from '../../MultiSelect/MultiSelect';

function useMultiSelectItem<T>(id: string) {
  const { items, change } = useMultiSelect<T>();
  const item = items.find(({ item }) => item.id === id);
  if (!item) throw Error('id does not match');
  const onChange = () => change(id);
  const onFocus = () => console.log('focused: ', item.item.id);
  const onBlur = () => console.log('blurred', item.item.id);
  return { item, onChange, onFocus, onBlur };
}

export { useMultiSelectItem };
