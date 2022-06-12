import fs from "fs"

// fs.readFile("./file.txt", () => {
//     console.log("reading file asynchronously");
// })
// console.log("done");


// const file = fs.readFileSync("./file.txt")
// console.log(file);
// console.log(file.toJSON());
// console.log(file.toString());
// console.log("done");

const anotherFile = fs.writeFile("./file.txt","I'm a learner", ()=> {
    console.log("writing in file")
})
console.log(anotherFile)


const aFile = fs.writeFileSync("./file.txt","I'm a learner")
console.log(aFile)
