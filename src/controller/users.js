const getAllUsers =(req, res) =>{
    res.json({
        message:'GET all users success',
    })
}

const createNewUsers = (req, res) =>{
    res.json({
        message: 'CREATE new users success',
    })
}

module.exports ={
    getAllUsers,
    createNewUsers
}