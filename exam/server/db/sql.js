module.exports = {
  boardList: `SELECT *
              FROM T_BOARD_BOARD 
              ORDER BY no
              LIMIT 0, 10;`,
  boardInfo: `SELECT no, created_date, updated_date, writer, title, content
              FROM T_BOARD_BOARD 
              WHERE no = ?`,
  boardInsert: `INSERT INTO T_BOARD_BOARD SET ?`,
  boardUpdate: `UPDATE T_BOARD_BOARD SET ? WHERE no = ?`,
  boardDelete: `DELETE FROM T_BOARD_BOARD WHERE no = ?`,
};
