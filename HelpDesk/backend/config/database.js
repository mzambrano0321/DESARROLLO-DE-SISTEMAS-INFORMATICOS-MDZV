const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Conexión a tu base de datos local
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/helpdesk');
        console.log('MongoDB Conectado: 127.0.0.1');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error.message);
        process.exit(1);
    }
};

// ¡Esta es la línea clave que faltaba!
module.exports = connectDB;