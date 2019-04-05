
exports.seed = function(knex, Promise) {
  return knex('project').insert([
    { name: 'Project Awesome', description: 'Project of awesomeness!', isCompleted: 0 }, // 1
    { name: 'Project Fantastic', description: 'Project of absolute fantasticness!', isCompleted: 0 }, // 2
    { name: 'Project Food', description: 'Project of deliciousness!', isCompleted: 0 }, // 3
    { name: 'Project Doom', description: 'Project of doom!', isCompleted: 1 }, // 4
  ]);
};