const express=require('express');
const path=require('path')
const app=express();
try {
app.use(express.static(path.join(__dirname,'dist')));
app.use((req,res,next)=>{
    res.sendFile(__dirname+'/dist/index.html')
     next()
})
app.get('/*',(req,res)=>{
    res.sendFile(__dirname+'/dist/index.html')
})
app.listen(8080, function () {
    console.log('App is listening on port ' );
});
} catch (error) {
    console.log(error);
   // res.sendFile(__dirname,'dist','index.html')
    
}
