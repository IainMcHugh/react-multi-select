import { MultiSelect } from 'src/modules/MultiSelect';

import type { TDataB } from 'types';
import { mockDataB } from 'src/data/mockB';
import { List } from 'src/components/pages/HomeB/components/List';

type TAction = 'EMAIL' | 'DOWNLOAD';

const HomeB = () => {
  const callback = (items: TDataB[], action: TAction) => {
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
        <h1>React Multi Select B</h1>
        <MultiSelect<TDataB, TAction> data={mockDataB} callback={callback}>
          {({ items, onAction }) => (
            <>
              <List items={items} variant="grid" />
              <button onClick={() => onAction('EMAIL')}>Email</button>
              <button onClick={() => onAction('DOWNLOAD')}>Download</button>
            </>
          )}
        </MultiSelect>
      </div>
    </div>
  );
};

export { HomeB };
