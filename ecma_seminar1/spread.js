const studentGroupPracticeTime = [
    {
        firstname: "Ivanov",
        practiceTime: 56
    },
    {
        firstname: "Kanov",
        practiceTime: 121
    },
    {
        firstname: "Ranov",
        practiceTime: 39
    },
    {
        firstname: "Wowov",
        practiceTime: 13
    }
];
function findMax(){
    const values = arguments;
    let maxValue = -Infinity;
    for(let index = 0; index<values.length;index++){
         if(values[index]>maxValue){
            maxValue = values[index]; 
         }
    }
    console.log(maxValue)
}

var student ={
    firstname:"Ivan",
    age:21
}
student.height = 2; // added a field hieght
addFieldToStudent = (object,key,value)=>{
    return{
    ...object ,
    [key]:value 
       
    }
}

const user = { id: 100, name: 'Howard Moon'}
const userWithPass = { ...user, password: 'Password!' }
console.log(user)
addFieldToStudent(student,'op',"3")
console.log(student)






const arr = [1,5,7,9];
//////////////////////// task 1
console.log(Math.min(...arr))
console.log(...arr)
////////////////////////task 2
function createCounter(){
    let count = 0;
    return {
       increment: () => ++count,
       decrement: () => --count,
    }
 }
 const counter1 = createCounter();
 console.log(counter1.increment());
 console.log(counter1.increment());
 console.log(counter1.increment());


 //////second option
 const createCounter2 = () => {
    let count = 0;
    return {
       increment: () => ++count,
       decrement: () => --count,
    }
 }
 const counter2 = createCounter2();
 console.log(counter2.decrement());
 console.log(counter2.decrement());
 console.log(counter2.decrement());

 ///////////task 3 
 let serchElement = [];
function findElementByClass(rootEl, classEl) {
   if (rootEl.hasChildNodes()) {
      for (let element of rootEl.children) {
         if (element.className === classEl) {
            serchElement.push(element);
            if (serchElement[0].className !== classEl) {
               serchElement = [];
               serchElement.push(element);
            }
         }
         findElementByClass(element, classEl);
      }
   }
   return serchElement[0];
}

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'chaeld6');
console.log(targetElement);










