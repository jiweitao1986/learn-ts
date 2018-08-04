import { DateUtil } from './utils/date-util';
import { StringUtil } from './utils/string-util';

// export { DateUtil, StringUtil };

const strUtil = new StringUtil();
strUtil.toUpper('hello');


interface Dictionary {
  [key: string]: any;
}

var dic: Dictionary = {
  'first': 1,
  'second': '2nd'
}

export { Dictionary };
