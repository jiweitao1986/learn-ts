/**
 * 字符串工具类
 */
class StringUtil {

  /**
   * 转换为大写
   */
  toUpper(lowerStr: any) {
    const upperStr = lowerStr + ' to upper...'
    console.log(upperStr);
    // if (upperStr.length > 10) {
    //   return upperStr;
    // }
    return upperStr;
  }

  getSymbol(key: string) {
    //return Symbol(key);
  }

}

export { StringUtil };
