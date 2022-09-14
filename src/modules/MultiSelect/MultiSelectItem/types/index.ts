import type { ReactNode } from 'react';

export type TRenderProps<T> = {
  item: {
    id: string;
    name: string;
    checked: boolean;
    onChange: () => void;
    onFocus: () => void;
    onBlur: () => void;
  };
  data: T;
};

export type TMultiSelectItem<T> = {
  id: string;
  children: (args: TRenderProps<T>) => ReactNode;
};
