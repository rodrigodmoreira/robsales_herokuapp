module.exports = (pool) => ({
  findAll: async () => {
    try {
      const result = await pool.query('select * from doce').then(res => res.rows)
      return result
    } catch (err) { throw err }
  }
})