const getAllUsers =(req, res) =>{
    const data ={
        id:'1',
        name:"alfian",
        email:"alfian@gmail.com",
        address:"sawangan"
    }

    res.json({
        message:'GET all users success',
        data:data
    })
}

const createNewUsers = (req, res) =>{
    console.log(req.body);
    res.json({
        message: 'CREATE new users success',
        data: req.body
    })
}

const updateUser = (req, res) => {
    const{idUser}=req.params;
    console.log('idUser:',idUser);
    res.json({
        message: 'Update user success',
        data: req.body,
    })
}

const deleteUser =(req, res) => {
    const {idUser}=req.params;
    res.json({
        message:"Delete user success",
        data:{
            id:idUser,
            name:"alfian",
            email:"alfian@gmail.com",
            address:"sawangan-depok"
        }
    })
}

module.exports ={
    getAllUsers,
    createNewUsers,
    updateUser,
    deleteUser
}