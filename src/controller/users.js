const UsersModel = require('../models/users');

const getAllUsers = async (req, res) =>{

    try {
        const [data] = await UsersModel.getAllUsers();
    
        res.json({
            message:'GET all users success',
            data:data
        })
        
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage:error,
        })
        
    }
    
}

const createNewUsers = async (req, res) => {
    const {body} = req;

    if(!body.name || !body.email || !body.address){
        return res.status(400).json({
            message:"anda mungkin memasukan data yang salah",
            data: null
        })
    }

    try {
        await UsersModel.createNewUser(body);
        res.status(201).json({
            message: 'CREATE new users success',
            data: body
        })
        
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage:error,
        })
    }
}

const updateUser = async (req, res) => {
    const{idUser}=req.params;
    const {body} = req;
    try {
        await UsersModel.updateUser(body, idUser);
        res.json({
            message: 'Update user success',
            data: {
                id: idUser,
                ...body
            },
        })        
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage:error,
        })
        
    }
}

const deleteUser = async (req, res) => {
    const {idUser}=req.params;
    try {
        await UsersModel.deleteUser(idUser);
        res.json({
            message:"Delete user success",
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage:error,
        })
        
    }
}

module.exports ={
    getAllUsers,
    createNewUsers,
    updateUser,
    deleteUser
}