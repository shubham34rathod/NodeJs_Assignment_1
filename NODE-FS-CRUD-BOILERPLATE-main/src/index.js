// const fs = require('fs/promises')
const fs = require('fs')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.writeFile(fileName,fileContent,(error)=>{
		if(error) throw error;
	})
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.readFile(fileName,'utf-8',(error,data)=>{
		if(error) throw error;
		console.log(data);
	})
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.writeFile(fileName,fileContent,(error)=>{
		if(error) throw error;
	})
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink(fileName)
}

let fileName="practice.txt";

myFileWriter(fileName,"hello pranav")
myFileReader(fileName);
myFileUpdater(fileName,"hi shubham")
myFileDeleter(fileName);



// module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }