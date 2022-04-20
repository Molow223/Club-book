import { helper } from '@ember/component/helper';

export function getMeetings(params/*, hash*/) {
 let [meeting] = params;
  return `${meeting}`;
}

export default helper(getMeetings);
