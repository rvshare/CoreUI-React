// import yaml from 'js-yaml';
import _memoize from 'lodash/memoize';
import _orderBy from 'lodash/orderBy';
import _take from 'lodash/take';
import _uniq from 'lodash/uniq';

import backupIcons from './backup.json';

const explodeAliases = icons => {
  return icons.reduce((acc, icon) => {
    if (icon.aliases) {
      acc.push(icon);

      acc = acc.concat(
        icon.aliases.map(
          alias => Object.assign({}, icon, { id: alias, aliasFor: icon.id })
        )
      );
    } else {
      acc.push(icon);
    }

    return acc;
  }, []);
};

const getAllVersions = (icons) => {
  return _uniq(icons.map(icon => icon.created));
};

const normalizeIcons = icons => _orderBy(explodeAliases(icons), 'id');

export const getIcons = _memoize(async () => {
  // const FONT_AWESOME_YAML = 'http://fontawesome.io/icons.yml';
  // const resp = await fetch(FONT_AWESOME_YAML);
  // const text = await resp.text();

  // return yaml.safeLoad(text).icons;

  return backupIcons.icons;
});

export const getCategoriesObject = (icons) => {
  return icons.reduce((acc, icon) => {
    icon.categories.forEach(category => {
      if (!acc[category])
        acc[category] = [];

      acc[category].push(icon);
    });

    return acc;
  }, {});
};

export const getCategories = (icons) => {
  const obj = getCategoriesObject(icons);

  return Object.keys(obj).reduce((acc, name) => {
    acc.push({
      name,
      icons: normalizeIcons(obj[name])
    });
    return acc;
  }, []);
};

export const getIconsByCategory = (icons, category) => {
  return normalizeIcons(
    getCategoriesObject(icons)[category] || []
  );
};

export const getIconsByVersion = (icons, version) => {
  return normalizeIcons(
    icons.filter(icon => icon.created === version)
  );
};

export const getIconsFromRecentVersions = (icons, n=1) => {
  const versions = getAllVersions(icons);

  return _take(versions.reverse(), n).map(version => {
    return {
      version,
      icons: getIconsByVersion(icons, version)
    };
  });
}