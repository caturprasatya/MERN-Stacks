const { Aplikasi } = require('../models/')

class AplikasiController {

  static async getData(req, res, next){
    try {
      const { pendiri } = req.query

      if (pendiri) {
        res.status(200).json('sipo')

      } else {
        const data = await Aplikasi.findAll()
        
        res.status(200).json(data)
      }

    } catch (error) {
      console.log(error)
    }
  }

  static async getDetailData(req, res, next){
    const { id } =req.params
    try {
      const aplikasi = await Aplikasi.findByPk(id)
      console.log(aplikasi);
      res.status(200).json(aplikasi)
    } catch (error) {
      console.log(error)
    }
  }

  static async createData(req, res, next){
    const { nama_aplikasi, keterangan, jumlah_pengguna, pendiri, tanggal_didirikan } = req.body
    try {
      const aplikasi = await Aplikasi.create({ nama_aplikasi, keterangan, jumlah_pengguna, pendiri, tanggal_didirikan })

      res.status(201).json(aplikasi)
    } catch (error) {
      console.log(error)   
    }
  }

  static async updateData(req, res, next){
    const { id } =req.params
    const { nama_aplikasi, keterangan, jumlah_pengguna, pendiri, tanggal_didirikan } = req.body
    const updateAplikai = { nama_aplikasi, keterangan, jumlah_pengguna, pendiri, tanggal_didirikan }
    try {
      await Aplikasi.update(updateAplikai, { where: { id } })
      
      res.status(200).json(aplikasi)
    } catch (error) {
      console.log(error)
    }
  }

  static async deleteData(req, res, next){
    const { id } =req.params
    try {
      const aplikasi = await Aplikasi.destroy({ where: { id } , returning: true})
      
      res.status(200).json(aplikasi)
    } catch (error) {
      console.log(error)
      
    }
  }

  static async getDetailPendiri(req, res, next){
    const { pendiri } = req.query
    try {
      res.status(200).json({ message: pendiri })
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = AplikasiController
