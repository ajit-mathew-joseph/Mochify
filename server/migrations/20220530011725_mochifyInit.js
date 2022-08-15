/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("products", (table) => {
      table.string("id", 255).notNullable();
      table.string("subTag", 255).notNullable();
      table.string("tag", 255).notNullable();
      table.string("image", 255).notNullable();
      table.string("productName", 255).notNullable();
      table.decimal("productPrice").notNullable();
    })
    .createTable("users", (table) => {
      table.string("uid", 255).notNullable();
      table.string("firstName", 255).notNullable();
      table.string("lastName", 255).notNullable();
      table.date("birthday");
      table.string("email", 255).notNullable();
      table.string("password", 255).notNullable();
      table.string("phoneNumber", 255).notNullable();
      table.string("addressLine1", 255).notNullable();
      table.string("addressLine2", 255).notNullable();
      table.string("city", 255).notNullable();
      table.string("postalCode", 255).notNullable();
      table.string("country", 255).notNullable();
      table.string("region", 255).notNullable();
      table.string("cardName", 255).notNullable();
      table.string("cardNumber", 255).notNullable();
      table.string("expirationDate", 255).notNullable();
      table.integer("cvv");
    })
    .createTable("wishList", (table) => {
      table.string("uid", 255).notNullable();
      table.string("id", 255).notNullable();
      table.string("tag", 255).notNullable();
      table.string("image", 255).notNullable();
      table.string("productName", 255).notNullable();
      table.decimal("productPrice").notNullable();
      table.integer("quantity");
    })
    .createTable("transactions", (table) => {
      table.string("uid", 255).notNullable();
      table.string("transaction_id", 255).notNullable();
      table.string("id", 255).notNullable();
      table.string("tag", 255).notNullable();
      table.string("image", 255).notNullable();
      table.string("productName", 255).notNullable();
      table.decimal("productPrice").notNullable();
      table.integer("quantity");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("products")
    .dropTableIfExists("users")
    .dropTableIfExists("wishList")
    .dropTableIfExists("transactions");
};
