const express = require ('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const userModel = require('./models/User');
const TaskRoutes = require('./routes/TaskRoutes');
const PORT = 3000;

const SECRET_KEY= 'desde septiembre se siente que viene diciembre';

const server = express();

server.use(express.json())

server.use('/api/v1/auth', (req, res) => {
    const {email, password} = req.body

    const validatedUser = userModel.validateUser(email,password)

    if(validatedUser) {
        const token = jwt.sign({validatedUser},SECRET_KEY,{expiresIn: '5m'})
        res.status(201).send({token})
    } else {
        res.status(401).send({message: 'correo o contraseña incorrectos'})
    }

})

const validateToken = (req, res, next) => {
    const authHeader = req.get('authorization')

    if (authHeader) {
        //Bearer <token>
        const accessToken = authHeader.split(' ')[1]

        jwt.verify(accessToken, SECRET_KEY, (error, decode) => {
            if (error) {
                res.status(401).send({ message: 'token no valido' })
            } else {
                next()
            }
        })
    } else {
        res.status(404).send({ message: 'Petición incorrecta' })
    }
}

server.use('/api/v1/tasks', validateToken, TaskRoutes);

const mongooseConnect = async () => {
    try{
        await 
        mongoose.connect('mongodb+srv://miancari:Millos07@cluster0.1mljg8b.mongodb.net/TaskApp?retryWrites=true&w=majority')
        console.log('conexion exitosa') 
    }catch(error){
        console.log(error)
    }
}

mongooseConnect()

server.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`);
})