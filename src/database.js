const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/tiendi',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology:true
})
    .then(db=>console.log('db is connect'))
    .catch(err=>console.error('err'));