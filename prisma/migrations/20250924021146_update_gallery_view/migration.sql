CREATE OR REPLACE SQL SECURITY DEFINER VIEW gallery AS
  SELECT
    i.fileName,
    u.email,
    i.imageHeight,
    i.imageWidth
  FROM lbse.images i
  INNER JOIN lbse.`User` u
  WHERE u.id = i.uploader
  ORDER BY i.id DESC;