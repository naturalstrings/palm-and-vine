import pg from 'pg';
declare const db: {
    query: (text: string, values?: any) => Promise<pg.QueryResult>;
};
export default db;
//# sourceMappingURL=index.d.ts.map