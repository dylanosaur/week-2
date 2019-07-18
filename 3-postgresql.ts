/**
 * 
 * DML: Data Manipulation Language
 * Insert, Update, Delete, (SELECT)
 * 
 * referential integrity: the idea that all references should reference valid table data
 * || in postgresql is a concatenation operation, not an OR
 * 
 * DQL: SELECT: used to retrieve table data for usage
 * 
 * create role inventory_user login password 'passwordhere'
 * grant all privileges on table inventory to inventory_user
 * 
 * 
 * grant all privileges on sequence inventory_id_seq to inventory_user
 * 
 * insert into inventory (item_name) values ('banana', 1) returning id, item_name, quantity;
 *  
 * aliasing: prsent item_name as itemName when data is returned
 * select id, item_name "itemName", quanitty from inventory where id= $1
 */

 /*
  * select * from inventory order by item_name limit 2 offset 1; // 2nd/3rd bc offset 1
  * 
  * select exists( subquery ); // returns true/false if something is returned - 
  * as soon as something is found it returns / can be very fast
  * 
  * you can do indexing on tables to improve speed on lookup
  * create index of <table> (<column>)
  * create index of <table> (<column1, column2>)
  * 
  */