const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    categoria: { type: String, required: true },
    prioridad: { type: String, default: 'Media' },
    estado: { type: String, default: 'Abierto' },
    fechaCreacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ticket', ticketSchema);