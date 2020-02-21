const GAMConfiguration = require('@base-cms/marko-web-gam/config');
const { asArray } = require('@base-cms/utils');
const { get, getAsObject } = require('@base-cms/object-path');

module.exports = ({
  accountId = '21687441225',
  basePath,
  pathMaps = [],
} = {}) => {
  const config = new GAMConfiguration(accountId, { basePath });

  config
    .setTemplate('LB1', {
      size: [[970, 250], [970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
      sizeMapping: [
        { viewport: [980, 0], size: [[970, 250], [970, 90], [970, 66], [728, 90]] },
        { viewport: [750, 0], size: [728, 90] },
        { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
      ],
    })
    .setTemplate('LB2', {
      size: [[970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
      sizeMapping: [
        { viewport: [980, 0], size: [[970, 90], [970, 66], [728, 90]] },
        { viewport: [750, 0], size: [728, 90] },
        { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
      ],
    })
    .setTemplate('MS', { size: [300, 50] })
    .setTemplate('RAIL1', { size: [300, 250] })
    .setTemplate('RAIL2', { size: [300, 600] })
    .setTemplate('LM', { size: [[300, 250], [300, 600]] });

  const templates = {
    lb1: 'LB1',
    lb2: 'LB2',
    rail1: 'RAIL1',
    rail2: 'RAIL2',
    'load-more': 'LM',
    ms: 'MS',
    reskin: undefined,
    wa: undefined,
  };

  const adunitNames = Object.keys(templates);

  asArray(pathMaps).forEach((obj) => {
    const alias = get(obj, 'alias');
    const map = getAsObject(obj, 'map');
    const definitions = adunitNames.reduce((arr, name) => {
      const templateName = templates[name];
      const path = map[name];
      if (path) arr.push({ name, templateName, path });
      return arr;
    }, []);
    if (alias && definitions.length) {
      config.setAliasAdUnits(alias, definitions);
    }
  });
  return config;
};
