const Joi = require('joi');
const Comment = require('../models/comment');

const commentSchema = Joi.object().keys({
    user: Joi.string().trim().required(),
    timeAgo: Joi.date().required(),
    avatar: Joi.number(),
    content: Joi.string().max(300).required()
})

exports.getAll = async(req,res)=>{
    Comment.find({},(err, comments)=>{
        res.send(comments);
    })
}


exports.addComment = async(req,res)=>{
    const result = Joi.validate(req.body, commentSchema)
    if (result.error) return res.status(400).json({ error: result.error.details[0].message });
    const {user, timeAgo, avatar, content} = req.body;
    const comment = new Comment({user, timeAgo, avatar, content});

    comment.save((error,comment)=>{
        if(error) return res.status(500).send(error);
        res.status(201).send(comment);
    });
}

