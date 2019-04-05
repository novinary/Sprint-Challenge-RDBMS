exports.seed = function(knex, Promise) {
  return knex('action').insert([
    { description: 'Need to make some actions', notes: 'Not worked on this yet', isCompleted: 0, project_id: 1 }, // 1
    { description: 'Made some progress', notes: '9 out of 10 tasks compelted', isCompleted: 0, project_id: 2 }, // 2
    { description: 'Need to make some actions', notes: 'Not worked on this yet', isCompleted: 0, project_id: 3 }, // 3
    { description: 'Finished this project', notes: 'All done', isCompleted: 1, project_id: 4}, // 4
  ]);
};