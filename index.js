/* eslint-disable no-console */
import fetch from 'node-fetch';

const apiBase = 'http://localhost:3000';

const Endpoints = {
  users: '/users',
};

const getUsers = async () => {
  const response = await fetch(`${apiBase}${Endpoints.users}`);
  const users = await response.json();

  return users;
};

const addUser = async (user) => {
  const newUserResponse = await fetch(`${apiBase}${Endpoints.users}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(user),
  });

  const result = await newUserResponse.json();
  return result;
};

const fnm = ["Jonh", "Martin", "Bob", "Liam", "Oliver", "James", "Lucas", "William"];
const lnm = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia","Miller","Davis"];


function randomDate(date1, date2){
  function randomValueBetween(min, max) {
      return Math.floor(Math.random() * (max - min +1) + min);
    };
  let dateOffsetMin = (365*24*60*60*1000) * 13;
  let dateOffsetMax = (365*24*60*60*1000) * 18;
  date1 = new Date();
  date2 = new Date();
  date1 = date1.setTime(date1.getTime() - dateOffsetMax);
  date2 = date2.setTime(date2.getTime() - dateOffsetMin);
  return new Date(randomValueBetween(date1,date2)).toLocaleDateString();
};

let count = process.argv[2];


const main = async () => {
  console.log(await getUsers());
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    birthDate: '1995-05-23', // between 13 - 18
  };
  user.firstName = fnm[Math.floor(Math.random()*fnm.length)];
  user.lastName = lnm[Math.floor(Math.random()*lnm.length)];
  user.birthDate = randomDate().split('/').reverse().join('-');
  console.log(await addUser(user));
};
for(let i=0;i< count;i++){
main().then();
}




 

