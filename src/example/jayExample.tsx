import { ReactNode } from 'react';

export interface ISearchProps<T> {
  title: string;
  items: T[];
  card: (props: { item: T; index: number }) => ReactNode;
}

const Search = <T extends object>(props: ISearchProps<T>) => {
  const { title, card, items } = props;
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{card({ item, index })}</li>
        ))}
      </ul>
    </div>
  );
};

type GumtreeAd = {
  title: string;
  salary: string;
};

const SearchGumtree = () => {
  const gumtreeAds: any = {};
  return (
    <Search<GumtreeAd>
      title="Gumtree Ads"
      items={gumtreeAds}
      card={({ item }) => (
        <div>
          <h2>{item.title}</h2>
          <div>
            Salary: <strong>{item.salary}</strong>
          </div>
          <button>View Ad</button>
        </div>
      )}
    />
  );
};

type DoneDealAd = {
  title: string;
  price: string;
};

const SearchDoneDeal = () => {
  const doneDealAds: any = {};
  return (
    <Search<DoneDealAd>
      title={`DoneDeal Ads - ${doneDealAds.length}`}
      items={doneDealAds}
      card={({ item }) => (
        <div>
          <h2>{item.title}</h2>
          <div>
            Price: <strong>{item.price}</strong>
          </div>
          <button>View Ad</button>
        </div>
      )}
    />
  );
};

export { SearchDoneDeal, SearchGumtree };
