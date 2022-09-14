import type { InputHTMLAttributes } from 'react';

type TCheckboxCard = InputHTMLAttributes<HTMLInputElement> & {
  text: string;
};

const CheckboxCard = ({ id, name, checked, ...rest }: TCheckboxCard) => {
  return (
    <div className={`checkbox-card ${checked ? 'checked' : ''}`}>
      <label htmlFor={id}>{rest.text}</label>
      <input type="checkbox" id={id} name={name} checked={checked} {...rest} />
    </div>
  );
};
export { CheckboxCard };
