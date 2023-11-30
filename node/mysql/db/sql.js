//sql문을 들고있는 객체라 생각하면 됨
//mysql >> 객체에 한해서 자동 변환해준다. SET절을 채워줌 필드를 기준으로
module.exports = {
    customerList: `SELECT * FROM customers`,
    customerInsert: `INSERT INTO customers SET ?`, //insert into values를 기반으로 : but set으로 해서 변형하는 형태 : insert에서도 사용 가능
    customerUpdate: `UPDATE customers SET ? WHERE id = ?`,
    customerDelete: `DELETE FROM customers WHERE id = ?`,
    customerInfo: `SELECT * FROM customers WHERE id = ?`
}