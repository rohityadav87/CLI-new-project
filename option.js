import readline from "readline";
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,})
const Todas = [];

const showMenu = () => {
    console.log("\n1:add a task");
    console.log("2:view task");
    console.log("3:Exit");
    r1.question("choose an option;",handleInput)
}

const handleInput = (option) => {
     if(option === "1"){
        r1.question("Enter the task;",(task) => {
            Todas.push(task);
            console.log("task added;", task);
            showMenu();
        })
    }else if (option === "2") {
     console.log("\n your tado lists");
     Todas.forEach((task, index) =>  {
        console.log(`${index+1}. ${task}`);
         })

     showMenu();
    }else if (option === "3"){
     console.log('Good Bye');
     r1.close();
     }else{console.log("Invalid option. please try again");
     showMenu();
    }
} 
showMenu();