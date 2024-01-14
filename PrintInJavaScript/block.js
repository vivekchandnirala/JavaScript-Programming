//Student naam ka object bana diya hai
const student = {
    //object ke andar walo ko keys bolte hai
    age : 14,
    name : "Vivek Chand Nirala",
    isPass : true,
};

// Ase Access kar payege 
// + jagha kuch bhi laga do wo shirf modify ke liye hai
student["age"] = student["age"] + 1
student["name"]= "Nirala";


console.log(student["age"]);
console.log(student.isPass);
console.log(student.name);

console.log(student);
console.log(typeof student);
console.log(typeof student["age"])
