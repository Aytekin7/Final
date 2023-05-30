const express=require('express')
const bodyParser=require('body-parser')
const cors =require('cors')
const dotenv=require('dotenv')
const crypto=require('crypto')
const mongoose=require('mongoose')


const app=express()
app.use(bodyParser.json())
app.use(cors())
dotenv.config()


const GymSchema=new mongoose.Schema({
    name:String,
    title:String,
})
const GymModel=new mongoose.model('Gym',GymSchema)



const GymById=[

    {
        id:1,
        name:'Addiction When Gambling Becomes A Problem',
        title:'inappropriate behavior ipsum dolor sit amet, consectetur.',
        button:'United States',
        
        imageUrl:'https://preview.colorlib.com/theme/immigration/img/s1.jpg.webp'
    },
    {
        id:2,
        name:'Addiction When Gambling Becomes A Problem',
        title:'inappropriate behavior ipsum dolor sit amet, consectetur.',
        button:'Canada',
        imageUrl:'https://preview.colorlib.com/theme/immigration/img/s2.jpg.webp'
    },
    {
        id:3,
        name:'Addiction When Gambling Becomes A Problem',
        title:'inappropriate behavior ipsum dolor sit amet, consectetur.',
        button:'Germany',
        imageUrl:'https://preview.colorlib.com/theme/immigration/img/s3.jpg.webp'
    },

    {
        id:4,
        name:'Addiction When Gambling Becomes A Problem',
        title:'inappropriate behavior ipsum dolor sit amet, consectetur.',
        button:'Australia',
        imageUrl:'https://preview.colorlib.com/theme/immigration/img/s4.jpg.webp'
    }
]


app.get('/api',(req,res)=>{
    res.status(200).send(GymById)
})

//get all

app.get('/api/card',(req,res)=>{
    const {name}=req.query
    if (!name) {
        res.status(200).send(GymById)
        
    }
    else{
        res.status(200).send(GymById.filter((x)=>x.name.toLowerCase().trim().includes(name.toLowerCase().trim())))
    }
})
//get by id

app.get('/api/card/:id',(req,res)=>{
    const {id}=req.params
    res.status(200).send(GymById.find((x)=>x.id==id))
})


//Delete

app.delete('/api/card/:id',(req,res)=>{
    const {id}=req.params
    const deleteGym=GymById.find((x)=>x.id==id)
    const idx=GymById.indexOf(deleteGym)
    GymById.splice(idx,1)
    res.status(203).send({
        message:`${deleteGym.name}deleted succesfully`
    })
})

//Post
app.post('/api/card',(req,res)=>{
    const {name,title}=req.body
    const newGym={
        id:crypto.randomUUID(),
        name:name,
        title:title
    }
    GymById.push(newGym)

    res.status(201).send({
        message:`${newGym.name} newGym successfully`
    })
})

//put
app.put('/api/card/:id',(req,res)=>{
    const {name,title}=req.body
    const id=req.params.id
    const updatingGym=GymById.find((x)=>x.id==id)
    if (name) {
        updatingGym.name=name
        
    }
    if (title) {
        updatingGym.title=title
        
    }
    res.status(200).send({
        message:`${updatingGym.name} updatingGym successfully`
    })

})





PORT=process.env.PORT

app.listen(PORT,()=>{
    console.log(`App running PORT:${PORT}`);
})
mongoose.connect('mongodb+srv://aytekin_admin:Admin1234@front.10shrnn.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log('Mongo Db connect');
})