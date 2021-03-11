
exports.up = function(knex, Promise) {
    return knex.schema.createTable('mechanic_info', (mechanic) => {
        mechanic.increments('id');
        mechanic.string('name');
        mechanic.integer('age');
        mechanic.integer('yrswrkd');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('mechanic_info')
  };
  