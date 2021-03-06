import ReactOnRails from 'react-on-rails';
import Writers from '../bundles/Writers/components/Writers';
import Writer from '../bundles/Writers/components/Writer';
import Books from '../bundles/Books/components/Books';
import Book from '../bundles/Books/components/Book';

// This is how react_on_rails can see the Writers in the browser.

ReactOnRails.register({
  Writers,
  Writer,
  Books,
  Book
});
