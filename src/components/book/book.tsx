import { useDispatch } from 'react-redux';
import { FC, useState } from 'react';
import styles from './book.module.css';
import Modal from '../modal/modal';
import EditBooksForm from '../edit-books-form/edit-books-form';
import { deleteBook } from '../../service/slices/books';
import { IBook } from './book.props';

const Book: FC<IBook> = ({ bookData }) => {
  const {
    author, title, img, id,
  } = bookData;
  const [editModal, setEditModal] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleCloseModal = () => setEditModal(false);

  const handleDeleteClick = () => {
    dispatch(deleteBook(id));
  };

  const handleEditClick = () => {
    setEditModal(true);
  };

  return (
    <>
      <div className={styles.book}>
        <img
          className={styles.book__cover}
          src={img || 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'}
          alt="test"
        />
        <div className={styles.book__content}>
          <ul className={styles.book__info}>
            <li className="book__author">
              <h3>Автор:</h3>
              <p>{author}</p>
            </li>
            <li className="book__author">
              <h3>Название:</h3>
              <p>{title}</p>
            </li>
          </ul>
          <div className={styles.book__buttons}>
            <button className={styles.book__editButton} type="button" onClick={handleEditClick} aria-label="Редактировать">Редактировать</button>
            <button className={styles.book__deleteButton} type="button" onClick={handleDeleteClick} aria-label="Удалить">Удалить</button>
          </div>
        </div>
      </div>
      {editModal && (
      <Modal onClose={handleCloseModal}>
        <EditBooksForm onClose={handleCloseModal} id={id} />
      </Modal>
      )}
    </>
  );
};

export default Book;
