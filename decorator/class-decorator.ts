/**
 * ----------------------------------------
 * decorators
 * ----------------------------------------
 */

/**
 * 类型装饰器
 * @param target
 */
function type2(target) {
    target.__TYPE__ = 'Some Type';
}

function type(type:string) {
    return function(target) {
        target.__TYPE__ = type;
    }
}



/**
 * ----------------------------------------
 * handler
 * ----------------------------------------
 */
abstract class Handler {
    abstract handle();
}

@type('required')
class RequiredHandler extends Handler {
    handle() {
        console.log('required');
    }
}


@type('validation')
class ValidationHandler extends Handler {
    handle() {
        console.log('validation');
    }
}



/**
 * ----------------------------------------
 * types
 * ----------------------------------------
 */
interface HandlerType extends Function {
    new (...args: any[]): Handler;
}

const map = new Map<string, HandlerType>();
map.set(RequiredHandler[__TYPE__], RequiredHandler);
map.set(ValidationHandler[__TYPE__], ValidationHandler);

// 反射构造
const handlerType = map.get('validation');
const handler = Reflect.construct(handlerType, []);
handler.handle();
