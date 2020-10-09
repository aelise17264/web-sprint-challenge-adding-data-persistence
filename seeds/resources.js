
exports.seed = function(knex) {
const resourceInfo = [
  {
    name: 'Resource1',
  resource_desc: 'Description of Resource1'
}, {
  name: 'Resource2',
resource_desc: 'Description of Resource2'
}, {
  name: 'Resource3',
resource_desc: 'Description of Resource3'
},
  
]

      return knex('resources').insert(resourceInfo);
  
};
