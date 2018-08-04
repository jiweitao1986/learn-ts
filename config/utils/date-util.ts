/**
 * 日期工具类
 */
class DateUtil {

  /**
   * 默认配置项
   */
  defaultFormat: string;

  /**
   * 构造函数
   */
  constructor() {
  }

  /**
   * 格式化
   */
  format() {
    this.defaultFormat = 'YYYY';
    console.log('formated...');
  }
}

export { DateUtil };
