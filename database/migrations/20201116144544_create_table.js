
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
        tbl.bool('signedUp').defaultTo('false');
      })

    .createTable('class', tbl => {
        tbl.increments();
        tbl
          .string('name')
          .notNullable()
          .unique();
    
        tbl.string('instructor_name').notNullable();
        tbl.string('type').notNullable();
        tbl
          .string('intensity')
          .notNullable();
        
        tbl
          .string('date')
          .notNullable();
    
        tbl
          .string('start_time')
          .notNullable();
    
        tbl
          .string('location')
          .notNullable();
       
        tbl.string('max_size').notNullable();
        tbl.string('duration').notNullable();
        tbl.string('number_attendees').defaultTo(0);
        tbl.string('punch_pass').notNullable();
      })
      .createTable('instructor', tbl => {
        tbl.increments();
    
        tbl
          .integer('user_id')
          .notNullable()
          .unique()
          .references('id')
          .inTable('user')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
    
        tbl
          .integer('class_id')
          .notNullable()
          .unique()
          .references('id')
          .inTable('classes')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      })
    
    .createTable('user_classes', tbl => {
        tbl.increments();
    
        tbl
          .integer('user_id')
          .notNullable()
          .references('id')
          .inTable('user')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
    
        tbl
          .integer('class_id')
          .notNullable()
          .references('id')
          .inTable('class')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      });
    
    };
    
    exports.down = function(knex) {
      return knex.schema
      .dropTableIfExists('user')
      .dropTableIfExists('class')
      .dropTableIfExists('instructor')
      .dropTableIfExists('user_classes')
     
      
    };