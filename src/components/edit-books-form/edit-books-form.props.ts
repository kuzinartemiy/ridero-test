import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IEditBooksForm extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  onClose: () => void;
  id?: string;
}
