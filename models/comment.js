const { Schema, model} = require('mongoose');


const commentSchema = new Schema ({
    writtedBy:{
        type: String
    },
    commentBody:{
        type: String
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

const Comment = model('Comment', commentSchema);

module.exports = Comment