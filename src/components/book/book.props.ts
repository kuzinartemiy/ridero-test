import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { TBook } from '../../utils/types';

export interface IBook extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  bookData: TBook;
}
