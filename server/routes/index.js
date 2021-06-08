const route = require('express').Router()
const AplikasiController = require('../controllers/AplikasiController')

route.get('/api/aplikasi', AplikasiController.getData)

route.get('/api/aplikasi/:id', AplikasiController.getDetailData)

route.post('/api/aplikasi', AplikasiController.createData)

route.put('/api/aplikasi/:id', AplikasiController.updateData)

route.delete('/api/aplikasi/:id', AplikasiController.deleteData)

module.exports = route
