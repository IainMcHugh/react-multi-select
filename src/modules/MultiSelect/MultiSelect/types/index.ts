import type { ReactNode } from 'react';

export type TMultiSelectArgs<T> = {
  data: T[];
};

export type Item = {
  id: string;
  name: string;
  checked: boolean;
};

export type TMultiSelectState<T> = {
  item: Item;
  data: T;
}[];

type TUpdateAction = { type: ACTIONS.UPDATE; payload: string };
type TSelectAllAction = { type: ACTIONS.SELECT_ALL };
type TClearAllAction = { type: ACTIONS.CLEAR_ALL };

export type TAction = TUpdateAction | TSelectAllAction | TClearAllAction;

export type TInitMultiSelect = <T extends { id: string }>(
  data: T[]
) => TMultiSelectState<T>;

export enum ACTIONS {
  UPDATE = 'UPDATE',
  SELECT_ALL = 'SELECT_ALL',
  CLEAR_ALL = 'CLEAR_ALL',
}

export type RenderProps<T, TAction> = {
  items: TMultiSelectState<T>;
  onAction: (action: TAction) => void;
};

export type TMultiSelect<T, TAction> = {
  data: T[];
  callback?: (t: T[], t2: TAction) => void;
  children: (t: RenderProps<T, TAction>) => ReactNode;
};

export type TMultiSelectContext<T> = {
  items: TMultiSelectState<T>;
  selected: T[];
  change: (payload: string) => void;
  selectAll: () => void;
  clearAll: () => void;
};
