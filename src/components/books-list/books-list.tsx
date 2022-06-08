import { FC, useEffect, useState } from 'react';
import EditBooksForm from '../edit-books-form/edit-books-form';
import Book from '../book/book';
import Modal from '../modal/modal';
import styles from './books-list.module.css';
import { setBooks } from '../../service/slices/books';
import { useAppDispatch, useAppSelector } from '../../service/hooks';
import { IBooksList } from './books-list.props';
import { TBook } from '../../utils/types';

const BooksList: FC<IBooksList> = () => {
  const dispatch = useAppDispatch();
  const books = useAppSelector((store: any) => store.books.books);
  const [addBookModal, setAddBookModal] = useState<boolean>(false);
  const localBooks = JSON.parse(localStorage.getItem('books') || '[]') || [];

  useEffect(() => {
    dispatch(setBooks(localBooks));
  }, []);

  const handleCloseModal = () => setAddBookModal(false);

  return (
    <>
      <div className={styles.booksList__wrapper}>
        {!books.length ? <h1>Нет добавленных книг</h1> : (
          <ul className={styles.booksList}>
            {books.map((book: TBook) => (
              <li key={book.id}>
                <Book
                  bookData={book}
                />
              </li>
            ))}
          </ul>
        )}
        <button
          className={styles.booksList__addBtn}
          onClick={() => setAddBookModal(true)}
          type="button"
        >
          Добавить новую книгу
        </button>
      </div>

      {addBookModal
      && (
      <Modal onClose={handleCloseModal}>
        <EditBooksForm
          onClose={handleCloseModal}
        />
      </Modal>
      )}
    </>
  );
};

export default BooksList;
