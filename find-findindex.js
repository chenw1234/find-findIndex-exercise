/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/
const users = [
  { username: 'mlewis' },
  { username: 'akagen' },
  { username: 'msmith' }
];


function findUserByUsername(usersArray, username) {
  return usersArray.find(function (val) {
    return val.username === username
  })
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
  let foundIndex = usersArray.findIndex(function (val) {
    return val.username === username;
  })
  if (foundIndex === -1) return;
  //Above, the return just represents a function that returns no value, thus the result would be undefined
  return usersArray.splice(foundIndex, 1)[0];
  //.splice() is being used to target the index that is found, and how many items to be deleted AT that index. 
  // We are basically returning the object that gets removed from the inputted array of "users". Since we target "akagen" first in the "username" parameter, the function will return the object that has username of "akagen" and the original array of "users" has been mutated to have "akagen" removed. This is proven when you call the "users" array right after the first removal and you'll notice "{username: 'akagen'}" is gone.
  // You'll notice that when you call the same function again with the same target username, it will return undefined due to the lack of the value "akagen", cuz the original array had been modified with the deletion of "akagen".
}