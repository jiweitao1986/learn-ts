/**
 * DataSet模拟实现
 * @author Witt<jiwt@inspur.com>
 */

import { Subject } from 'rxjs/Subject';
import { Map } from 'immutable';
import { DataTable } from './data-table';
import { Change } from './change';

/**
 * DataSet
 */
class DataSet {

    /**
     * 数据表集合
     */
    public tables: Map<string, DataTable>;

    /**
     * 变更集合
     */
    public changes: Subject<Change> = new Subject();

    /**
     * 构造函数
     * @param data
     */
    constructor() {
        this.tables = Map<string, DataTable>();
    }

    /**
     * 加载数据
     * @param dsData
     */
    public loadData(dsData: {[key: string]: any[]}): void {

        const self = this;

        // 没有数据不加载
        if (dsData == null) {
            return;
        }

        Object.keys(dsData).forEach( (tableName) => {

            const tableData = dsData[tableName];

            // 获取数据表
            let table = null;
            if (this.tables.has(tableName) === true) {
                table = this.tables.get(tableName);
            } else {
                table = new DataTable(tableName);
            }
            table.loadData(tableData);
            this.tables = this.tables.set(tableName, table);

            // 订阅table变更
            table.changes.subscribe(change => {
                self.changes.next(change);
            });

            // 定义get方法
            Object.defineProperty(this, tableName, {
                get: function() {
                    return self.tables.get(tableName);
                },
            });

        });

        // 触发变更
        this.changes.next({type: 'LOAD_DS_DATA'});
    }

    /**
     * 获取原始数据
     */
    public peek(): any {
        const dsData = {};
        this.tables.forEach((table, tableName) =>  {
            if (tableName && table) {
                dsData[tableName] = table.peek();
            }
        });
        return dsData;
    }
}

export { DataSet };

