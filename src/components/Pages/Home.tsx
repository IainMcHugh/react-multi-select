import { mockData } from '../../data/mock';
import { TData } from '../../types';

import { MultiSelect } from '../Support/MultiSelect/MultiSelect';
import { List } from './components/List';

const Home = () => {
  const callback = (items: TData[]) => console.log(items);
  return (
    <MultiSelect data={mockData} callback={callback}>
      {({ items, onAction }) => (
        <>
          <List items={items} />
          <button onClick={onAction}>Top level action</button>
        </>
      )}
    </MultiSelect>
  );
};

export { Home };
