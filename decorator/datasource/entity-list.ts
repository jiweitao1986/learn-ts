/**
 * 数据表模拟实现
 * @author Witt<jiwt@inspur.com>
 */

import { Subject } from 'rxjs/Subject';
import { List, Map } from 'immutable';
import { DataRow } from './data-row';
import { Change } from './change';


/**
 * 列表接口
 */
interface IList extends Iterable {
    count: number;
    add(obj: any): number;
    indexOf(obj: any): number;
    remove(obj);
    removeAt(index: number);
}


/**
 * 常量定义
 */
const LOAD_ENTITIES     = 'LOAD_ENTITIES';
const CHANGE_CURRENT_ID = 'CHANGE_CURRENT_ID';
const ADD_ENTITY        = 'ADD_ENTITY';
const REMOVE_ENTITY     = 'REMOVE_ENTITY';


/**
 * 实体列表
 */
class EntityList<T> implements IList {

    /**
     * 名称
     */
    public name: string;

    /**
     * 主键
     */
    public primaryKey: string;

    /**
     * 员工列表
     */
    public innerList: List<T>;

    /**
     * 表数据变更
     */
    public changes: Subject<Change> = new Subject();

    /**
     * 当前行索引
     */
    public currentId: string;


    /**
     * 构造函数
     */
    public constructor(name: string) {

        // 通过反射获取
        this.name = name;
        this.primaryKey = 'ID';
        this.innerList = List<T>([]);
        this.currentId = '';
    }

    /**
     * ----------------------------------------
     * 实现IList接口
     * ----------------------------------------
     */

    [Symbol.iterator]() {
        return this.innerList.[Symbol.iterator];
    }

    /**
     * 列表内实体数量
     */
    get count() {
        return this.innerList.size;
    }

    /**
     * 删除索引为index的entity
     * @param {number} index
     */
    public removeAt(index: number) {
        throw new Error('Method not implemented.');
    }

    /**
     * 添加entity
     * @param {T} entity
     */
    public add(entity: T) {
        throw new Error('Method not implemented.');
    }

    /**
     * 删除entity
     * @param {T} entity
     */
    public remove(entity: T) {
        throw new Error('Method not implemented.');
    }

    /**
     * 获取entity的索引值
     * @param {T} entity
     * @returns {number}
     */
    public indexOf(entity: T): number {
        return 0;
    }

    /**
     * 添加行
     * @param row
     */
    public add(obj: T) {
        this.innerList = this.innerList.push(row);
        this.currentRowId = row[this.primaryKey];
        this.changes.next({ type: 'ADD_ROW'});
    }


    /**
     * ----------------------------------------
     * 扩展方法
     * ----------------------------------------
     */


    /**
     * 加载表数据
     */
    public loadData(entities: T[]) {

        if (entities === null || entities.length === 0) {
            return;
        }

        this.innerList.clear();
        this.currentId = '';
        entities.forEach((entity) => {
            this.innerList = this.innerList.push(entity);
        });

        this.setCurrentId(this.innerList.first()[this.primaryKey]);
        this.changes.next({
            type: LOAD_ENTITIES
        });
    }


    /**
     * 删除行
     */
    public removeById(id: string): void {
        const indexToDel: number = this.findIndexById(id);
        this.innerList = this.innerList.delete(indexToDel);

        this.changes.next({
            type: REMOVE_ENTITY
        });
    }

    /**
     * 设置当前行
     */
    public setCurrentId(id: string): void {
        if (id === this.currentId) {
            return;
        }
        this.currentId = id;
        this.changes.next({
            type: CHANGE_CURRENT_ID
        });
    }

    /**
     * 根据entity的id获取entity
     */
    public findById(id: string): T {
        let targetRow: DataRow;
        targetRow = this.innerList.find((row) => {
            if (row) {
                return row.getValue(this.primaryKey) === id;
            } else {
                return false;
            }
        });
        return targetRow;
    }

    /**
     * 根据entity的id获取entity的index
     * @param id
     * @return 找到返回对应的index，找不到返回-1
     */
    public findIndexById(id: string): number {
        return this.innerList.findIndex((entity) => {
            if (entity) {
                return entity.getValue(this.primaryKey) === id;
            } else {
                return false;
            }
        });
    }

    /**
     * 转换为数组
     */
    public toArray(): T[] {
        const arr: any[] = [];
        this.innerList.forEach(row => {
            if (row) {
                arr.push(row.peek());
            }
        });
        return arr;
    }
}





/**
 * --------------------------------------------------------------------------------
 * EntityList验证
 * --------------------------------------------------------------------------------
 */

class Emp {
    id: string;
    name: string;
    code: string;
}












export {
    LOAD_ENTITIES,
    CHANGE_CURRENT_ID,
    ADD_ENTITY,
    REMOVE_ENTITY,
    EntityList
};
