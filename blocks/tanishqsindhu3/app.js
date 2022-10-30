let list=[];//array for storing list.
while(true){
    let answer=prompt("What you want to Do?").toLowerCase().trim();
    if(answer==='new'){
        let task =prompt("What task do you want to add?")
        list.push(task);
        console.log(`${task}is added to the List!!`)
    }
    if(answer==='list'){
        for(let index in list){
            let realNo=index+1;
            console.log(`${realNo} : ${list[index]}`);
        }
    }
    if(answer==='delete'){
        let index =parseInt(prompt("What is the index you want to delete?"))
        while(index>list.length||index<0){let index =parseInt(prompt("What is the index you want to delete?"))}
        list.splice(index,1)
        console.log(list);
    }
    if(answer==='quit'||answer==='q'){
        console.log("You are Free!!!!")
        break;
    }
}
