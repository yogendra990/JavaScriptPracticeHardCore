/**
 * Created by Yogendra Atluri on 6/07/2017.
 */

// var person = [{name:'Yogendra', city:'New York'}, {name: 'Kumar', city:'Fremont'}, {name:'pavan', city:'Los Angles'}];
// var person1 = [];

// function a (){
//     person.forEach(function(item){
//         if(item.city == 'New York'){
//             person1.push({'name' : item.name, 'city' : item.city });
//         }
//     })

//     console.log(person1[0].name = 'Atluri');

//     console.log(person[0].name);

// }

// a();


function Student(id,name){
    this.id = id;
    this.name = name;
}

var b = new Student(1,'Yogendra');
Student.prototype.GetterId = function(){
    return this.id;
};
Student.prototype.GetterName = function(){
    return this.name;
}

console.log(b.GetterId(), b.GetterName());
