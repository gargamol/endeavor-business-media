const { get } = require('@base-cms/object-path');

module.exports = content => ({
  cont_id: get(content, 'id'),
  cont_type: get(content, 'type'),
  comp_id: get(content, 'company.id'),
});
