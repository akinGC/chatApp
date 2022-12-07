const express = require('express')
const path = require('path')
const fs = require('fs')
const route=express.Router()

route.use('/',(req, res, next)=>{
    const data = fs.readFileSync('messages.txt',
            {encoding:'utf8', flag:'r'});
    // res.sendFile('hai'+path.join(__dirname,'../','views','chat.html'))
    res.setHeader('Content-Type', 'text/html')
    // (res.body.password!=undefined)?  res.write(data+` ${req.body.username} : ${req.body.password} `):null
 
        
    console.log(req.body)
    res.write(data+` ${req.body.username} : ${req.body.password}`)
  
    res.write(` 
   
    
    <body>
        <form   id="myForm" >
            <input type="text" id="ent" name="msg"/>&nbsp;&nbsp;
            <input type="hidden"id="use" name="hide"/>
            <button type="submit"id='btn' >Send</button>
        </form>
    
        <script>
     document.querySelector('button')
                .addEventListener('click', (e) => {
                    e.preventDefault();
                    const username = localStorage.getItem('username')
     
                    const password = document
                        .querySelector('#ent').value;
                         
                    fetch('/', {
                        method: 'POST',
                        headers: {
                           
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            username,
                            password,
                        }),
                    })
                        .then((res) => {
                            return res.json();
                        })
                        .then((data) => console.log(data));
                });
    
           
            </script>`)
            res.write('<br/>')
          
            // (req.body.username!=undefined)?res.write(` ${req.body.username} : ${req.body.password}`):null
            
        
    res.end()
  
    if(req.body.password!=undefined){
        fs.appendFileSync("messages.txt", ` ${req.body.username} : ${req.body.password}, `);

    }  

})


module.exports = route