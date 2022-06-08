import { nanoid } from 'nanoid';
import {
  FC, FormEvent, SyntheticEvent, useState,
} from 'react';
import styles from './edit-books-form.module.css';
import base64Converter from '../../utils/base64Converter';
import { addBook, setBooks } from '../../service/slices/books';
import { useAppDispatch } from '../../service/hooks';
import { IEditBooksForm } from './edit-books-form.props';
import { TBook } from '../../utils/types';

const EditBooksForm: FC<IEditBooksForm> = ({ onClose, id }) => {
  const localBooks = JSON.parse(localStorage.getItem('books') || '[]') || [];

  const dispatch = useAppDispatch();

  const currentBook = localBooks.find((book: TBook) => book.id === id);

  const [author, setAuthor] = useState(currentBook ? currentBook.author : '');
  const [title, setTitle] = useState(currentBook ? currentBook.title : '');
  const [image, setImage] = useState('');

  const handleChangeAuthor = (e: FormEvent<HTMLInputElement>) => {
    setAuthor(e.currentTarget.value);
  };

  const handleChangeTitle = (e: FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const handleChangeImage = async (e: any) => {
    const file = e.target.files[0];
    const base64: any = await base64Converter(file);
    setImage(base64);
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const newBook: TBook = {
      id: nanoid(10),
      author,
      title,
      img: image,
    };

    if (!currentBook) {
      dispatch(addBook(newBook));
    } else {
      const indexBookToUpdate = localBooks.findIndex((book: TBook) => book.id === id);
      const editableBook = localBooks[indexBookToUpdate];

      localBooks[indexBookToUpdate] = {
        ...editableBook,
        author,
        title,
        img: image || editableBook.img,
      };

      localStorage.setItem('books', JSON.stringify(localBooks));
      dispatch(setBooks(localBooks));
    }

    setAuthor('');
    setTitle('');
    setImage('');

    onClose();
  };

  return (
    <form className={styles.editBookForm} onSubmit={handleSubmit}>
      <input onChange={handleChangeAuthor} required value={author} type="text" placeholder="Автор" minLength={3} maxLength={50} />
      <input onChange={handleChangeTitle} required value={title} type="text" placeholder="Название" minLength={3} maxLength={50} />
      <span>Обложка</span>
      <input onChange={handleChangeImage} type="file" />
      <button className={styles.editBookForm__submitBtn} type="submit">{!currentBook ? 'Добавить' : 'Изменить'}</button>
    </form>
  );
};

export default EditBooksForm;
