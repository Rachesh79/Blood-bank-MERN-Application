const express = require('express')
const authMiddleware = require('../middlewares/authMiddleware')
const { createInventoryController, getInventoryController, getDonarsController, getHospitalsController } = require('../controllers/inventoryController')

const router = express.Router()

// routes
// Add inventory || port

router.post('/create-inventory',authMiddleware, createInventoryController)

// get all inventory records
router.get('/get-inventory',authMiddleware,getInventoryController)

// get donars records
router.get('/get-donars',authMiddleware, getDonarsController)

// Get hospital records
router.get('/get-hospitals',authMiddleware, getHospitalsController)

module.exports = router