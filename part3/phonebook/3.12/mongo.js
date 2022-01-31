const mongoose = require('mongoose')

if(process.argv.length < 3){
    console.log('Please provide the password as an argument: node mongo.js <password>');
    process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = 
`mongodb+srv://fullstack:${password}@firstdb.xc03h.mongodb.net/phonebookApp?retryWrites=true&w=majority`

mongoose.connect(url)

const contactSchema = new mongoose.Schema({
    name: String,
    number: Number,
})

const Contact = mongoose.model('Contact', contactSchema)
if(name && number){
const contact = new Contact({
    name: name,
    number: number,
})

contact.save().then(result => {
    console.log(`added ${name} number ${number} to phonebook`);
    mongoose.connection.close()
})
}else{
    Contact.find({}).then(result => {
        console.log('phonebook:')
        result.forEach(x => {
            console.log(`${x.name} ${x.number}`);
        })
        mongoose.connection.close()
    })
}
