import BooksList from '../books-list/books-list';
import styles from './app.module.css';

const App = () => (
  <div className={styles.app}>
    <BooksList />
  </div>
);

export default App;
