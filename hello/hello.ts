abstract class Handler {
    abstract handle();
}

class RequiredHandler extends Handler {
    handle() {
        console.log('required ...');
    }
}

class ReadonlyHandler extends Handler {
    handle() {
        console.log('readonly ...');
    }
}

const map =  new Map();
map.set('required', RequiredHandler);
map.set('readonly', ReadonlyHandler);

const handler = map.get('readonly');
(new handler()).handle();
