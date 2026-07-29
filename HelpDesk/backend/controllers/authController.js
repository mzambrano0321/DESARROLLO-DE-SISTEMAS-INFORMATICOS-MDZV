const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Registrar usuario
exports.registrar = async (req, res) => {
    try {
        const { nombre, email, password } = req.body;

        // Verificar si el usuario ya existe
        let usuario = await User.findOne({ email });
        if (usuario) {
            return res.status(400).json({ msg: 'El usuario ya existe' });
        }

        // Crear nuevo usuario
        usuario = new User({ nombre, email, password });

        // Encriptar contraseña
        const salt = await bcrypt.genSalt(10);
        usuario.password = await bcrypt.hash(password, salt);

        await usuario.save();

        res.status(201).json({ msg: 'Usuario registrado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en el servidor');
    }
};

// Iniciar sesión
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const usuario = await User.findOne({ email });
        if (!usuario) {
            return res.status(400).json({ msg: 'Credenciales inválidas' });
        }

        const esCorrecto = await bcrypt.compare(password, usuario.password);
        if (!esCorrecto) {
            return res.status(400).json({ msg: 'Credenciales inválidas' });
        }

        res.json({ msg: 'Inicio de sesión exitoso', usuario: { id: usuario._id, nombre: usuario.nombre, email: usuario.email } });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en el servidor');
    }
};