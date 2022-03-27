import { helper } from '@ember/component/helper';

export function getSpeakers(params /*, named*/) {
  let [speaker] = params;
  return `${speaker}`;
}

export default helper(getSpeakers);
