const express=require('express');
const path=require('path')
const app=express();
try {
app.use(express.static(path.join(__dirname,'dash')));
app.use((req,res,next)=>{
    res.sendFile(__dirname+'/dash/index.html')
     next()
})
app.get('/*',(req,res)=>{
    res.sendFile(__dirname+'/dash/index.html')
})
app.listen(4300, function () {
    console.log('App is listening on port 4300' );
});
} catch (error) {
    console.log(error);
   // res.sendFile(__dirname,'dist','index.html')
    
}
