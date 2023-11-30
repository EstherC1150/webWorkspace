module.exports = {
    userList: `SELECT * FROM t_users`,
    userInsert: `INSERT INTO t_users SET ?`,
    userUpdate: `UPDATE t_users SET ? WHERE user_no = ?`,
    userDelete: `DELETE FROM t_users WHERE user_no = ?`,
    userInfo: `SELECT * FROM t_users WHERE user_no = ?`
}