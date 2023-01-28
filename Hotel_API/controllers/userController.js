import User from './../models/UserModel.js'

export const getUser = async(req, res, next) => {
    try{
        const user = await User.findById(req.params.id)
            res.status(200).json({
            status: 'Success.',
            data: user   
        });
    } catch (err){
        next(err);
    }
}

export const getAllUsers = async(req, res, next) => {
    try{
        const user = await User.find()
        res.status(200).json(user);
        //     res.status(200).json({
        //     status: 'Success.',
        //     Result: user.length,
        //     data: user   
        // });
    } catch (err){
       next(err)
    }
}

export const deleteUser = async(req, res, next) => {
    try{
        await User.findByIdAndDelete(req.params.id)
            res.status(200).json({
            status: 'User has been Successfully Deleted.',
            data: null   
        });
    } catch (err){
       next(err)
    }
}

export const updateUser = async(req, res, next) => {
    try{
        const updatedUser = await User.findByIdAndUpdate(
        req.params.id, { $set: req.body}, {new: true})
        res.status(200).json(updatedUser)
    } catch (err){
       next(err)
    }
}

