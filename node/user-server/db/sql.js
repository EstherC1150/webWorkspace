module.exports = {
  userList: `SELECT * FROM t_users`,
  userInsert: `INSERT INTO t_users SET ?`,
  userUpdate: `UPDATE t_users SET ? WHERE user_id = ?`,
  userDelete: `DELETE FROM t_users WHERE user_id = ?`,
  userInfo: `SELECT * FROM t_users WHERE user_id = ?`,
};
