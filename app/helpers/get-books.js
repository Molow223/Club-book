import { helper } from '@ember/component/helper';

export function getBooks(params/*, hash*/) {
  let [book] = params;
  return `${book}`;
}

export default helper(getBooks);
