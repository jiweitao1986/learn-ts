/**
 * 数据行模拟实现
 * @author Witt<jiwt@inspur.com>
 */

import { Subject } from 'rxjs/Subject';
import { List, Map } from 'immutable';
import { DataTable } from './data-table';
import {Change} from "./change";




function EntityDecorator(cls) {
    this.innerMap = Map<string, any>({});
    this.
}


/**
 * 数据行
 */
class Entity {

    /**
     * 内部属性值Map
     */
    private innerMap: Map<string, any>;

    /**
     * 主键
     */
    public primaryKey: string;

    /**
     * 变更
     */
    public changes: Subject<Change> = new Subject();


    /**
     * 构造函数
     * @param data
     */
    constructor(values) {

        const self = this;

        // 初始化_data
        this.innerMap = Map<string, any>(rowData);
        Object.keys(rowData).forEach(key => {

            Object.defineProperty(this, key, {
                get: function() {
                    return self.getValue(key);
                },
                set: function(newValue) {
                    self.setValue(key, newValue, false);
                }
            });

        });
    }

    /**
     * 获取主键值
     */
    getId(): any {
        return this.getValue(this.table.primaryKey);
    }

    /**
     * 获取值
     */
    getValue(key: string): any {
        return this.values.get(key);
    }

    /**
     * 设置值
     * @param key
     * @param value
     */
    setValue(key: string, value: any, emitValueChange: boolean) {
        this.values = this.values.set(key, value);
        const change = {
            type: 'CHANGE_FIELD_VALUE',
            tableName: this.table.name,
            fieldName: key
        };
        this.table.changes.next(change);
    }

    /**
     * 获取DataRow的的数据
     */
    peek(): any {
        const rowData = this.values.toJS();
        return rowData;
    }
}

export { DataRow };




// function logType(target : any, key : string) {
//     var t = Reflect.getMetadata("design:type", target, key);
//     console.log(`${key} type: ${t.name}`);
// }
//
//
// const __ENTITY_TYPE__;
// const __PRIMARY_
// function EntityType() {
//     return
// }
//
//
// @Entity('Emp')
// class Emp {
//     @logType
//     id: string;
//     name: string;
// }
//
// const r = Reflect.getMetadata("design:type", Emp, 'id');
// console.log(r);
