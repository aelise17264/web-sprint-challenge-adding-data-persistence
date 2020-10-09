
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
      tbl.increments()
      tbl.string('name').notNullable()
      tbl.string('project_desc')
      tbl.boolean('completed').notNullable().defaultTo(false)
  })

  .createTable('resources', tbl => {
      tbl.increments()
      tbl.string('name').notNullable().unique()
      tbl.string('resource_desc')
  })

  .createTable('task', tbl => {{
      tbl.increments()
      tbl.string('task_desc').notNullable()
      tbl.string('notes')
      tbl.boolean('completed').notNullable().defaultTo(false)
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id').inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')
  }})

  .createTable('project_resources', tbl => {
      tbl.increments()
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id').inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')

    tbl.integer('resource_id')
    .unsigned()
        .notNullable()
        .references('id').inTable('resources') 
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')

  })

};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects_resources')
    .dropTableIfExists('task')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
