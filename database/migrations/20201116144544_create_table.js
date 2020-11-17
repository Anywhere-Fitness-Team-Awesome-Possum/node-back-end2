
exports.up = function(knex) {
    return knex.schema
    .createTable('user', tbl => {
        tbl.increments();
        tbl.string('name').notNullable();
        tbl
          .string('email')
          .notNullable()
          .unique();
        tbl
          .string('username')
          .notNullable()
          .unique()
          .index();
        tbl.string('password').notNullable();
        tbl.string('role').notNullable();
      })

    .createTable('class', tbl => {
        tbl.increments();
        tbl
          .string('name')
          .notNullable()
          .unique()
          .index();
    
        tbl.string('instructor_name').notNullable();
        tbl.string('type').notNullable();
        tbl
          .string('intensity')
          .notNullable()
          .index();
        tbl
          .string('date')
          .notNullable()
          .index();
        tbl
          .string('start_time')
          .notNullable()
          .index();
        tbl
          .string('location')
          .notNullable()
          .index();
        tbl.string('max_size').notNullable();
        tbl.string('duration').notNullable();
        tbl.string('number_attendees').defaultTo(0);
      })
      .createTable('instructor', tbl => {
        tbl.increments();
    
        tbl
          .integer('user_id')
          .notNullable()
          .unique()
          .references('id')
          .inTable('user')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
    
        tbl
          .integer('class_id')
          .notNullable()
          .unique()
          .references('id')
          .inTable('classes')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
      })
    
    .createTable('user_classes', tbl => {
        tbl.increments();
    
        tbl
          .integer('user_id')
          .notNullable()
          .references('id')
          .inTable('user')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
    
        tbl
          .integer('class_id')
          .notNullable()
          .references('id')
          .inTable('class')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
      });
    
    };
    
    exports.down = function(knex) {
      return knex.schema
    
      .dropTableIfExists('user_classes')
      .dropTableIfExists('instructor')
      .dropTableIfExists('class')
      .dropTableIfExists('user');
     
    };