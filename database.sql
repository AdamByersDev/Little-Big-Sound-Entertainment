DROP DATABASE IF EXISTS lbse;
CREATE DATABASE lbse;
USE lbse;

-- Creating packages table
CREATE TABLE packages (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(64) NOT NULL,
  summary text,
  chosenorder TINYINT,
  prefered TINYINT DEFAULT 0,
  musictime TINYINT,
  hidden BOOLEAN DEFAULT 0,
  addtime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  addip VARCHAR(39),
  updatetime TIMESTAMP,
  updateip VARCHAR(39),

  PRIMARY KEY (id)
);

-- Creating features table
CREATE TABLE features (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(64) NOT NULL,
  info text,
  addtime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  addip VARCHAR(39),
  updatetime TIMESTAMP,
  updateip VARCHAR(39),

  PRIMARY KEY (id)
);

CREATE TABLE packagefeatures (
  id INT NOT NULL AUTO_INCREMENT,
  packageid INT NOT NULL,
  featureid INT NOT NULL,
  addtime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  addip VARCHAR(39),
  updatetime TIMESTAMP,
  updateip VARCHAR(39),

  PRIMARY KEY (id),
  FOREIGN KEY (packageid) REFERENCES packages(id),
  FOREIGN KEY (featureid) REFERENCES features(id)
);

CREATE SQL SECURITY DEFINER VIEW availablepackages AS
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

CREATE SQL SECURITY DEFINER VIEW availablefeatures AS
  SELECT
    f.id,
    f.name,
    f.info
  FROM features f
  INNER JOIN packagefeatures pf ON f.id = pf.featureid
  GROUP BY f.id
  ORDER BY COUNT(pf.featureid) DESC, f.name ASC;

INSERT INTO packages (name, summary, chosenorder, prefered, addip, musictime, id) VALUES
('Basic Party Package', "Keep it simple and fun with up to 4 hours of music mixed live by a professional DJ. This package includes a solid sound system (two speakers and a DJ controller), a basic lighting setup with two LED lights, and access to our pre-approved music library tailored to your vibe. We’ll take care of setup and teardown, so you can just enjoy the music and the moment.", 3, 0, '127.0.0.1', 4, 1),
('Premium Event Package', "From cocktails to the last dance, the Premium Event Package has your whole night covered with up to 6 hours of curated music. You'll get a custom playlist based on your favorite genres, a pro-level sound system, and ambient lighting with your choice of LED or moving head lights. A microphone is included for announcements or speeches, and we’ll meet with you ahead of time to make sure the music fits your event perfectly. Setup and teardown? Handled.", 1, 1, '127.0.0.1', 6, 2),
('All-Inclusive Wedding Package', "From the moment guests arrive to the final dance of the night, this package brings the full experience with up to 8 hours of music—covering the ceremony, cocktail hour, and reception. You’ll get a pro sound system, wireless mic for vows and speeches, and a custom playlist built around the couple’s tastes. We include dance floor lighting with both LED and moving lights, and up to two DJs to keep the energy flowing seamlessly across every style and moment. We also coordinate with your planner, handle setup and teardown, and include a pre-event timeline consult to make sure the music hits just right at every key point. Travel within 30 miles is on us.", 2, 2, '127.0.0.1', 8, 3),
('Themed Party Package', "Designed for high-energy events, this package includes up to 6 hours of music tailored to your crowd’s vibe. We provide a professional sound system (two speakers and a DJ controller), a microphone for announcements or hype moments, and lighting options with LED or moving head lights to elevate the atmosphere. A pre-event consult helps us craft the perfect playlist based on your preferred genres. As always, we take care of all setup and teardown—so you can focus on the fun.", 4, 0, '127.0.0.1', 8, 4);

INSERT INTO features (id, name, info, addip) VALUES
(
  1,
  'Sound System',
  'A two speaker sound system and a pro-level DJ controller',
  '127.0.0.1'
),(
  2,
  'Custom Playlist',
  'A custom made playlist decided on by the host limited by our approved genres',
  '127.0.0.1'
),(
  3,
  'Setup/Teardown',
  'We will setup and teardown our equipment',
  '127.0.0.1'
),(
  4,
  'Pre-event Consultation',
  'A pre-event conA more advanced lighting setup with moving head lightssultation to ensure the music matches your event',
  '127.0.0.1'
),(
  5,
  'Timeline Consultation',
  'A timeline consultation to align music with key moments',
  '127.0.0.1'
),(
  6,
  'Basic Lighting',
  'A basic lighting setup with two LED lights',
  '127.0.0.1'
),(
  7,
  'Microphone Access',
  'A microphone that will be available for speaches, vows, announcements, etc.',
  '127.0.0.1'
),(
  8,
  'Advanced Lighting',
  'A more advanced lighting setup with moving head lights',
  '127.0.0.1'
),(
  9,
  'Second DJ Available',
  'A second DJ is available for smooth transitions between genres and styles',
  '127.0.0.1'
);

INSERT INTO packagefeatures (packageid, featureid, addip) VALUES
(
  1,
  1,
  '127.0.0.1'
),(
  1,
  2,
  '127.0.0.1'
),(
  1,
  3,
  '127.0.0.1'
),(
  1,
  6,
  '127.0.0.1'
),(
  2,
  1,
  '127.0.0.1'
),(
  2,
  2,
  '127.0.0.1'
),(
  2,
  3,
  '127.0.0.1'
),(
  2,
  4,
  '127.0.0.1'
),(
  2,
  6,
  '127.0.0.1'
),(
  2,
  7,
  '127.0.0.1'
),(
  2,
  8,
  '127.0.0.1'
),(
  3,
  1,
  '127.0.0.1'
),(
  3,
  2,
  '127.0.0.1'
),(
  3,
  3,
  '127.0.0.1'
),(
  3,
  4,
  '127.0.0.1'
),(
  3,
  5,
  '127.0.0.1'
),(
  3,
  6,
  '127.0.0.1'
),(
  3,
  7,
  '127.0.0.1'
),(
  3,
  8,
  '127.0.0.1'
),(
  3,
  9,
  '127.0.0.1'
),(
  4,
  1,
  '127.0.0.1'
),(
  4,
  2,
  '127.0.0.1'
),(
  4,
  3,
  '127.0.0.1'
),(
  4,
  4,
  '127.0.0.1'
),(
  4,
  6,
  '127.0.0.1'
),(
  4,
  7,
  '127.0.0.1'
),(
  4,
  8,
  '127.0.0.1'
);

DROP USER IF EXISTS 'publiclbse'@'localhost';
CREATE USER 'publiclbse'@'localhost' IDENTIFIED BY 'publicPassword8675309';
GRANT SELECT ON lbse.availablepackages TO 'publiclbse'@'localhost';
GRANT SELECT ON lbse.availablefeatures TO 'publiclbse'@'localhost';
GRANT SELECT ON lbse.admin TO 'publiclbse'@'localhost';

DROP USER IF EXISTS 'adminlbse'@'localhost';
CREATE USER 'adminlbse'@'localhost' IDENTIFIED BY '7hWddpXbvg0aLZsh1wGA';
GRANT ALL PRIVILEGES ON lbse.* TO 'adminlbse'@'localhost';

DROP USER IF EXISTS 'prisma'@'localhost';
CREATE USER 'prisma'@'localhost' IDENTIFIED BY '0F02PLniRncQnf0DMDit';
GRANT ALL PRIVILEGES ON *.* TO 'prisma'@'localhost' WITH GRANT OPTION;

FLUSH PRIVILEGES;
