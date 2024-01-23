/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const bcrypt = require('bcrypt');
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('professores').del()
  await knex('professores').insert([
    {nome: 'chico bateu no bode', email: 'teste@gmail.com', telefone:'(84)999999999' , nascimento:'2000/02/24'},
    {nome: 'bode bateu no chico', email: 'bode@gmail.com', telefone:'(84)888888888' , nascimento:'1998/05/17'},
    {nome: 'chico bode', email: 'bodechico@gmail.com', telefone:'(84)777777777' , nascimento:'1995/09/02'},
  ]);
};
