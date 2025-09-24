CREATE OR REPLACE SQL SECURITY DEFINER VIEW availablepackages AS
  SELECT
    p.id,
    p.name,
    p.summary,
    p.prefered,
    p.musictime,
    JSON_ARRAYAGG(pf.featureid) as features
  FROM packages p
  LEFT JOIN packagefeatures pf ON p.id = pf.packageid
  WHERE hidden = 0
  GROUP BY p.id
  ORDER BY p.chosenorder;

CREATE OR REPLACE SQL SECURITY DEFINER VIEW availablefeatures AS
  SELECT
    f.id,
    f.name,
    f.info
  FROM features f
  INNER JOIN packagefeatures pf ON f.id = pf.featureid
  GROUP BY f.id
  ORDER BY COUNT(pf.featureid) DESC, f.name ASC;

DROP USER IF EXISTS 'publiclbse'@'localhost';
CREATE USER 'publiclbse'@'localhost' IDENTIFIED BY 'publicPassword8675309';
GRANT SELECT ON lbse.availablepackages TO 'publiclbse'@'localhost';
GRANT SELECT ON lbse.availablefeatures TO 'publiclbse'@'localhost';
GRANT SELECT ON lbse.admin TO 'publiclbse'@'localhost';
GRANT SELECT ON lbse.gallery TO 'publiclbse'@'localhost';

DROP USER IF EXISTS 'adminlbse'@'localhost';
CREATE USER 'adminlbse'@'localhost' IDENTIFIED BY '7hWddpXbvg0aLZsh1wGA';
GRANT ALL PRIVILEGES ON lbse.* TO 'adminlbse'@'localhost';

DROP USER IF EXISTS 'prisma'@'localhost';
CREATE USER 'prisma'@'localhost' IDENTIFIED BY '0F02PLniRncQnf0DMDit';
GRANT ALL PRIVILEGES ON *.* TO 'prisma'@'localhost' WITH GRANT OPTION;

FLUSH PRIVILEGES;