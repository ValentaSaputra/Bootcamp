const fs = require('fs');

class Todo{
    constructor(id,task,status){
        this.id = id;
        this.task = task;
        this.status = status;
    }
    static getTodos(){
        let data = fs.readFileSync('./data.json','utf8');
        let parsedData = JSON.parse(data);
        let todos = parsedData.map(el => {
            const {id, task,status} = el;
            return new Todo(id,task,status);
        })
        return todos
    }
    static show(){
        let todos = this.getTodos();
        return todos;
    }
    static add(todo){
        let todos = this.getTodos();
        let id = 
        // let temp = new Todo(id, task, status);
        todos.push()
        console.log(todo[0])
    }
}

module.exports = Todo;