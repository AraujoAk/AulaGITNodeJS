module.exports = {
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'usbw',
        database: 'escola'
    },
    migrations: {
        directory: 'migrations',
        tableName: 'knex_migrations'
    },
    seeds: {
        directory: 'seeds'
    }
}