import {TodoModel, Todomodel} from "../models/todo.model.js";
import {ApiError} from "../utils/apiError.js";

export const getTodos = async(req,res,next) =>{
    try{
        const todos = TodoModel.getAll();
        res.status(200).json(todos);
    } catch (error){
        next(error);
    }

};

export const getTodoById = async (req, res, next) => {
    try{
        const id = Number(req.params.id);
        const todo = Todomodel.getTodoById(id);
    }
}