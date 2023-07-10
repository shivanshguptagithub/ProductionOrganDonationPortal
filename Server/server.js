import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import validator from 'validator';
import dotenv from "dotenv";
import path from "path";
//require packages for passport
import session from "express-session";
import passport from "passport";
import passportLocalMongoose from "passport-local-mongoose";

const app = express();
app.use(bodyParser.urlencoded({extends:true}));
app.use(bodyParser.json());
let isAuthenticate=false;
dotenv.config();
//using express-session
app.use(session({
  secret:"this is my passport secret",
  resave:false,
  saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/OrganDonationPortalDB");
const userSchema= new mongoose.Schema({
  username:String,
  password:String
});

userSchema.plugin(passportLocalMongoose);

const User= mongoose.model("User",userSchema);


passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


const donorSchema= new mongoose.Schema({
  full_name: {
    type:String,
    required:[1,"Please provide full name"]
  },
  email:{
    type:String,
    required:[1,"Please provide email"]
  },
  phone_number:{
    type:String,
    required:[1,"Please provide phone number"]
  },
  address: {
    type:String,
    required:[1,"Please provide address"]
  },
  age: {
    type:Number,
    required:[1,"Please provide age"],
    min:1,
    max:100
  },
  blood_group:{
    type:String,
    required:[1,"Please provide blood group"]
  },
  organ_type: {
    type:String,
    required:[1,"Please provide organ"]
  },
  status: {
    type:String,
    required:[1,"Please provide status"]
  }
});

const Donor= mongoose.model("Donor",donorSchema);

const Donor1= new Donor({
  full_name: "Shivansh"   ,
  email:       "shivansh@gmail.com" ,
  phone_number: "9823798738",
  address:      "bhopal",
  age:          23, 
  blood_group:  "A+",
  organ_type:   "Heart",
  status:      "Initial"
});

//Donor1.save();

//Recipient start
const recipientSchema= new mongoose.Schema({
  full_name: {
    type:String,
    required:[1,"Please provide full name"]
  },
  email:{
    type:String,
    required:[1,"Please provide email"]
  },
  phone_number:{
    type:String,
    required:[1,"Please provide phone number"]
  },
  address: {
    type:String,
    required:[1,"Please provide address"]
  },
  age: {
    type:Number,
    required:[1,"Please provide age"],
    min:1,
    max:100
  },
  blood_group:{
    type:String,
    required:[1,"Please provide blood group"]
  },
  organ_type: {
    type:String,
    required:[1,"Please provide organ"]
  },
  status: {
    type:String,
    required:[1,"Please provide status"]
  }
});

const Recipient= mongoose.model("Recipient",recipientSchema);

const Recipient1= new Recipient({
  full_name: "Shivansh"   ,
  email:       "shivansh@gmail.com" ,
  phone_number: "9823798738",
  address:      "bhopal",
  age:          23, 
  blood_group:  "A+",
  organ_type:   "Heart",
  status:      "Initial"
});

//Recipient1.save();

//Hospital start
const hospitalSchema= new mongoose.Schema({
  full_name: {
    type:String,
    required:[1,"Please provide full name"]
  },
  email:{
    type:String,
    required:[1,"Please provide email"]
  },
  phone_number:{
    type:String,
    required:[1,"Please provide phone number"]
  },
  address: {
    type:String,
    required:[1,"Please provide address"]
  },
  status: {
    type:String,
    required:[1,"Please provide status"]
  }
});

const Hospital= mongoose.model("Hospital",hospitalSchema);

const Hospital1= new Hospital({
  full_name: "Apollo"   ,
  email:       "Apollo@gmail.com" ,
  phone_number: "9823798738",
  address:      "bhopal",
  status:      "Initial"
});

//Hospital1.save();

//ContactUs start
const contactUsSchema= new mongoose.Schema({
  full_name: {
    type:String,
    required:[1,"Please provide full name"]
  },
  email:{
    type:String,
    required:[1,"Please provide email"]
  },
  phone_number:{
    type:String,
    required:[1,"Please provide phone number"]
  },
  message: {
    type:String,
    required:[1,"Please provide address"]
  }
});

const ContactUs= mongoose.model("ContactUs",contactUsSchema);

const ContactUs1= new ContactUs({
  full_name: "rohit"   ,
  email:       "rohit@gmail.com" ,
  phone_number: "9329798738",
  message:      "how can I get lungs for me.",
});

//OrganRequest
const organRequestSchema= new mongoose.Schema({
  donor_id: {
    type:String,
    required:[1,"Please provide donor id"]
  },
  recipient_id:{
    type:String,
    required:[1,"Please provide recipient id"]
  },
  hospital_id:{
    type:String,
    required:[1,"Please provide hospital id"]
  },
  organ_type: {
    type:String,
    required:[1,"Please provide address"]
  },
  status: {
    type:String,
    required:[1,"Please provide status"]
  }
});

const OrganRequest= mongoose.model("OrganRequest",organRequestSchema);
const OrganRequest1= new OrganRequest({
  donor_id: "ncjnckjn",
  recipient_id:"pienconcui",
  hospital_id:"ipcnucnjcn",
  organ_type: "cpoecoin",
  status: "ckncoou"
});

//OrganRequest1.save();
app.use(cors({
    origin:"http://localhost:3000"
}));
app.get('/', function(req, res) {
  const data = {
    message: 'Hello from the server!'
  };
  res.json(data);
});

//Register
app.post("/register", function(req,res){
  User.register({username:req.body.username},req.body.password,function(err,result){
    if(err){
        console.log(err);
        return res.status(400).json({message:"Please enter data correctly in all the field."});
    }
    else{
        passport.authenticate("local")(req,res, function(){
          return res.status(200).json({message:"User registered"});
        });
    }
  });  
});

//login
app.post("/login", function(req,res){
   
    const user= new User({
    username:req.body.username,
    password:req.body.password
   });
   req.login(user,function(err){
    if(err){
        console.log(err);
        return res.status(400).json({message:"User not found, try again"});
    }
    else{
        passport.authenticate("local")(req,res,function(){
          isAuthenticate=true;
          return res.status(200).json({message:"User found"});
        });
    }
   });
 });

//logout
app.get("/logout", function(req,res){
  req.logout(function(){});
  isAuthenticate=false;
  return res.status(200).json({message:"successfully logout"});
});
//authenticated or not
app.get('/api/authenticated', (req, res) => {
  //console.log(isAuthenticate);
  if (isAuthenticate) {
    return res.status(200).json({message:"logged in"});
  } else {
    return res.status(401).json({message:"not logged"});
  }
});

//Donor
app.get('/donorlist', function(req, res) {
    Donor.find().then(function(data){
      res.send(data);
    });
});

app.post("/donoradd",function(req,res){
  const {full_name, email, phone_number, address, age, blood_group, organ_type, status}=req.body;
  const newDonor= new Donor({
    full_name, email, phone_number, address, age, blood_group, organ_type, status
  });
  console.log(newDonor);
  if( !validator.isEmpty(full_name)&&
      validator.isEmail(email)&&
      !validator.isEmpty(phone_number)&&
      !validator.isEmpty(address)&&
      validator.isNumeric(age)&&
      !validator.isEmpty(blood_group)&&
      !validator.isEmpty(organ_type)&&
      !validator.isEmpty(status)) 
      {
        newDonor.save();
        return res.status(200).json({message:"data saved"});
      }
      else{
        return res.status(400).json({message:"data not saved"});
      }
});

app.get('/donor/:id', function(req, res) {
  Donor.findOne({_id:req.params.id}).then(function(data){
    res.send(data);
  });
});

app.post("/donoredit/:id",function(req,res){
  const {full_name, email, phone_number, address, age, blood_group, organ_type, status}=req.body;
  const updateDonor= {
    full_name, email, phone_number, address, age, blood_group, organ_type, status
  };
  console.log(updateDonor);
  console.log(full_name);
  
  
  if( !validator.isEmpty(full_name)&&
      validator.isEmail(email)&&
      !validator.isEmpty(phone_number)&&
      !validator.isEmpty(address)&&
      //!validator.isEmpty(age)&&
      !validator.isEmpty(blood_group)&&
      !validator.isEmpty(organ_type)&&
      !validator.isEmpty(status)) 
      {
        
        Donor.updateOne({_id:req.params.id},updateDonor).then( function(err){
          console.log(err);
        });
        return res.status(200).json({message:"data updated"});
      }
      else{
        return res.status(400).json({message:"data not updated"});
      }
});

app.get('/donordelete/:id', function(req, res) {
  Donor.deleteOne({_id:req.params.id}).then(function(data){
    res.send(data);
  });
});

//Recipient

app.get('/recipientlist', function(req, res) {
  Recipient.find().then(function(data){
    res.send(data);
  });
});

app.post("/recipientadd",function(req,res){
const {full_name, email, phone_number, address, age, blood_group, organ_type, status}=req.body;
const newRecipient= new Recipient({
  full_name, email, phone_number, address, age, blood_group, organ_type, status
});
console.log(newRecipient);
if( !validator.isEmpty(full_name)&&
    validator.isEmail(email)&&
    !validator.isEmpty(phone_number)&&
    !validator.isEmpty(address)&&
    validator.isNumeric(age)&&
    !validator.isEmpty(blood_group)&&
    !validator.isEmpty(organ_type)&&
    !validator.isEmpty(status)) 
    {
      newRecipient.save();
      return res.status(200).json({message:"Data saved successfully"});
    }
    else{
      return res.status(400).json({message:"Please enter data correctly in all the fields"});
    }
});

app.get('/recipient/:id', function(req, res) {
  Recipient.findOne({_id:req.params.id}).then(function(data){
    res.send(data);
  });
});

app.post("/recipientedit/:id",function(req,res){
  const {full_name, email, phone_number, address, age, blood_group, organ_type, status}=req.body;
  const updateRecipient= {
    full_name, email, phone_number, address, age, blood_group, organ_type, status
  };
  if( !validator.isEmpty(full_name)&&
      validator.isEmail(email)&&
      !validator.isEmpty(phone_number)&&
      !validator.isEmpty(address)&&
      //!validator.isEmpty(age)&&
      !validator.isEmpty(blood_group)&&
      !validator.isEmpty(organ_type)&&
      !validator.isEmpty(status)) 
      {
        
        Recipient.updateOne({_id:req.params.id},updateRecipient).then( function(err){
          console.log(err);
        });
        return res.status(200).json({message:"data updated"});
      }
      else{
        return res.status(400).json({message:"data not updated"});
      }
});
app.get('/Recipientdelete/:id', function(req, res) {
  Recipient.deleteOne({_id:req.params.id}).then(function(data){
    res.send(data);
  });
});
//Hospital

app.get('/Hospitallist', function(req, res) {
  Hospital.find().then(function(data){
    res.send(data);
  });
});

app.post("/Hospitaladd", function(req,res){
const {full_name, email, phone_number, address,  status}=req.body;
const newHospital= new Hospital({
  full_name, email, phone_number, address,status
});
console.log(newHospital);
if( !validator.isEmpty(full_name)&&
    validator.isEmail(email)&&
    !validator.isEmpty(phone_number)&&
    !validator.isEmpty(address)&&
    !validator.isEmpty(status)) 
    {
      newHospital.save();
      return res.status(200).json({message:"Data saved successfully"});
    }
    else{
      return res.status(400).json({message:"Please enter data correctly in all the fields"});
    }
});

app.get('/Hospital/:id', function(req, res) {
  Hospital.findOne({_id:req.params.id}).then(function(data){
    res.send(data);
  });
});

app.post("/Hospitaledit/:id", function(req,res){
  const {full_name, email, phone_number, address, status}=req.body;
  const updateHospital= {
    full_name, email, phone_number, address,  status
  };
  
  if( !validator.isEmpty(full_name)&&
      validator.isEmail(email)&&
      !validator.isEmpty(phone_number)&&
      !validator.isEmpty(address)&&
      !validator.isEmpty(status)) 
      {
        
        Hospital.updateOne({_id:req.params.id},updateHospital).then( function(err){
          console.log(err);
        });
        return res.status(200).json({message:"data updated"});
      }
      else{
        return res.status(400).json({message:"data not updated"});
      }
});

app.get('/Hospitaldelete/:id', function(req, res) {
  Hospital.deleteOne({_id:req.params.id}).then(function(data){
    res.send(data);
  });
});

//Contact us

app.post("/ContactUs", function(req,res){
const {full_name, email, phone_number, message}=req.body;
const newContactUs= new ContactUs({
  full_name, email, phone_number, message
});
console.log(newContactUs);
if( !validator.isEmpty(full_name)&&
    validator.isEmail(email)&&
    !validator.isEmpty(phone_number)&&
    !validator.isEmpty(message))
    {
      console.log(newContactUs)
      newContactUs.save();
      return res.status(200).json({message:"Data saved successfully"});
    }
    else{
      return res.status(400).json({message:"Please enter data correctly in all the fields"});
    }
});

//OrganRequest
app.post("/OrganRequestadd", function(req,res){
  const {donor_id,recipient_id,hospital_id,organ_type,status}=req.body;
  const newOrganRequest= new OrganRequest({
    donor_id,recipient_id,hospital_id,organ_type,status
  });
  console.log(newOrganRequest);
  if( !validator.isEmpty(donor_id)&&
      !validator.isEmpty(recipient_id)&&
      !validator.isEmpty(hospital_id)&&
      !validator.isEmpty(organ_type)&&
      !validator.isEmpty(status)) 
      {
        // newOrganRequest.save();
        newOrganRequest.save()
          .then((savedItem) => {
            const savedItemId = savedItem._id;
            console.log(`Saved item with ID: ${savedItemId}`);
            return res.status(200).json({id:savedItemId});
          })
          .catch((error) => {
            console.error(error);
            return res.status(400).json({message:"Please enter data correctly in all the fields"});
          });
        }
      else{
        
      }
  });

app.get('/OrganRequest/:id', function(req, res) {
  OrganRequest.findOne({_id:req.params.id}).then(function(data){
    res.send(data);
  }).catch((error)=>{
    console.log(error);
    return res.status(400).json({message:"Please enter data correctly in all the fields"});
  });
});


app.use(express.static(path.join(__dirname,"./client/build")))
app.get("*", (req,res)=>{
  res.sendFile(path.join(__dirname,"./client/build/index.html"))
})

app.listen(5000||process.env.PORT, function(){
  console.log('Server started on port 5000');
});