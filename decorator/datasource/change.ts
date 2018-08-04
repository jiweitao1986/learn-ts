interface Change {
    type: string;
    modelName?: string;
    tableName?: string;
    fieldName?: string;
    fieldValue?: string;
}

export { Change };
