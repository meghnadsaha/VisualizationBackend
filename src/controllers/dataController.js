const Data = require('../models/dataModel');

const mongoose = require('mongoose');

const getData = async (req, res) => {
    try {
        if (mongoose.connection.readyState !== 1) {
            console.log("Mongoose is not connected");
            return res.status(500).json({ message: "Database is not connected" });
        }

        const data = await Data.find();
        if (!data) {
            console.log("No data found");
            return res.status(404).json({ message: "No data found" });
        }
        console.log("Data found: like ", data[0]);
        res.json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: error.message });
    }
};



module.exports = { getData };

