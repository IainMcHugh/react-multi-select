import { MultiSelect } from 'src/modules/MultiSelect';

import type { TData } from 'types';
import { mockData } from 'src/data/mock';
import { List } from 'src/components/pages/HomeA/components/List';

type TAction = 'EMAIL' | 'DOWNLOAD';

const HomeA = () => {
  const callback = (items: TData[], action: TAction) => {
    switch (action) {
      case 'EMAIL':
        return console.log('Email: ', items);
      case 'DOWNLOAD':
        return console.log('Download: ', items);
    }
  };

  return (
    <div className="app">
      <div className="home">
        <h1>React Multi Select</h1>
        <MultiSelect<TData, TAction> data={mockData} callback={callback}>
          {({ items, onAction }) => (
            <>
              <List items={items} />
              <button onClick={() => onAction('EMAIL')}>Email</button>
              <button onClick={() => onAction('DOWNLOAD')}>Download</button>
            </>
          )}
        </MultiSelect>
      </div>
    </div>
  );
};

export { HomeA };
