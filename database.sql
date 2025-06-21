DROP USER IF EXISTS 'publiclbse'@'localhost';
CREATE USER 'publiclbse'@'localhost' IDENTIFIED BY 'publicPassword8675309';

DROP DATABASE IF EXISTS lbse;
CREATE DATABASE lbse;
USE lbse;

-- Creating admins table
CREATE TABLE admins (
  id VARCHAR(128) NOT NULL,
  firstname VARCHAR(64),
  lastname VARCHAR(64),
  email VARCHAR(320) NOT NULL,
  access BOOLEAN DEFAULT 0,
  addedby VARCHAR(128),
  addtime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  addip VARCHAR(39),
  updatedby VARCHAR(128),
  updatetime TIMESTAMP,
  updateip VARCHAR(39),

  PRIMARY KEY (id),
  FOREIGN KEY (addedby) REFERENCES admins(id),
  FOREIGN KEY (updatedby) REFERENCES admins(id)
);

-- Creating packages table
CREATE TABLE packages (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(64) NOT NULL,
  summary text,
  chosenorder TINYINT,
  prefered TINYINT DEFAULT 0,
  hidden BOOLEAN DEFAULT 0,
  addedby VARCHAR(128),
  addtime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  addip VARCHAR(39),
  updatedby VARCHAR(128),
  updatetime TIMESTAMP,
  updateip VARCHAR(39),

  PRIMARY KEY (id),
  FOREIGN KEY (addedby) REFERENCES admins(id),
  FOREIGN KEY (updatedby) REFERENCES admins(id)
);

-- Creating features table
CREATE TABLE features (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(64) NOT NULL,
  info text,
  addedby VARCHAR(128),
  addtime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  addip VARCHAR(39),
  updatedby VARCHAR(128),
  updatetime TIMESTAMP,
  updateip VARCHAR(39),

  PRIMARY KEY (id),
  FOREIGN KEY (addedby) REFERENCES admins(id),
  FOREIGN KEY (updatedby) REFERENCES admins(id)
);

CREATE TABLE packagefeatures (
  id INT NOT NULL AUTO_INCREMENT,
  packageid INT NOT NULL,
  featureid INT NOT NULL,
  addedby VARCHAR(128),
  addtime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  addip VARCHAR(39),
  updatedby VARCHAR(128),
  updatetime TIMESTAMP,
  updateip VARCHAR(39),

  PRIMARY KEY (id),
  FOREIGN KEY (packageid) REFERENCES packages(id),
  FOREIGN KEY (featureid) REFERENCES features(id),
  FOREIGN KEY (addedby) REFERENCES admins(id),
  FOREIGN KEY (updatedby) REFERENCES admins(id)
);

CREATE VIEW availablepackages AS
  SELECT id, name, summary, prefered
  FROM packages
  WHERE hidden = 0
  ORDER BY chosenorder;

INSERT INTO admins (id, firstname, lastname, email, access) VALUES
('I7UAtM8XXMdJd79lNu4Jaeuownu1', 'Adam', 'Byers', 'adam@abyers.ca', 1);

INSERT INTO packages (name, summary, chosenorder, prefered, addedby, addip) VALUES
('Basic Party Package', "Keep it simple and fun with up to 4 hours of music mixed live by a professional DJ. This package includes a solid sound system (two speakers and a DJ controller), a basic lighting setup with two LED lights, and access to our pre-approved music library tailored to your vibe. We’ll take care of setup and teardown, so you can just enjoy the music and the moment.", 3, 0, 'I7UAtM8XXMdJd79lNu4Jaeuownu1', '127.0.0.1'),
('Premium Event Package', "From cocktails to the last dance, the Premium Event Package has your whole night covered with up to 6 hours of curated music. You'll get a custom playlist based on your favorite genres, a pro-level sound system, and ambient lighting with your choice of LED or moving head lights. A microphone is included for announcements or speeches, and we’ll meet with you ahead of time to make sure the music fits your event perfectly. Setup and teardown? Handled.", 1, 1, 'I7UAtM8XXMdJd79lNu4Jaeuownu1', '127.0.0.1'),
('All-Inclusive Wedding Package', "From the moment guests arrive to the final dance of the night, this package brings the full experience with up to 8 hours of music—covering the ceremony, cocktail hour, and reception. You’ll get a pro sound system, wireless mic for vows and speeches, and a custom playlist built around the couple’s tastes. We include dance floor lighting with both LED and moving lights, and up to two DJs to keep the energy flowing seamlessly across every style and moment. We also coordinate with your planner, handle setup and teardown, and include a pre-event timeline consult to make sure the music hits just right at every key point. Travel within 30 miles is on us.", 2, 2, 'I7UAtM8XXMdJd79lNu4Jaeuownu1', '127.0.0.1'),
('Themed Party Package', "Designed for high-energy events, this package includes up to 6 hours of music tailored to your crowd’s vibe. We provide a professional sound system (two speakers and a DJ controller), a microphone for announcements or hype moments, and lighting options with LED or moving head lights to elevate the atmosphere. A pre-event consult helps us craft the perfect playlist based on your preferred genres. As always, we take care of all setup and teardown—so you can focus on the fun.", 4, 0, 'I7UAtM8XXMdJd79lNu4Jaeuownu1', '127.0.0.1');

GRANT SELECT ON lbse.availablepackages TO 'publiclbse'@'localhost';
FLUSH PRIVILEGES;
