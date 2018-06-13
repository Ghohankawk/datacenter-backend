var userSqlMap = {
    add: 'insert into user(name, password,age) values(?, ?, ?)',
    deleteById: 'delete from user where id = ?',
    update: 'update user set name=?, password=?, age=? where id=?',
    list: 'select * from user',
    getById: 'select * from user where id = ?'
};

module.exports = userSqlMap;