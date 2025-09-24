'use server';

import { getConnection } from "@/lib/backend/database";

export async function getPackages() {
  const conn = await getConnection();
  const [packages] = await conn.execute('SELECT id, name, summary, prefered FROM availablepackages');
  await conn.end();

  console.log(`Pulled ${packages.length} un-hidden packages from the database.`);

  return {
    packages: packages,
  }
}

export async function getFullPackageData() {
  const conn = await getConnection();
  const [packages] = await conn.execute('SELECT id, name, prefered, musictime, features FROM lbse.availablepackages');
  const [features] = await conn.execute('SELECT * FROM lbse.availablefeatures');
  await conn.end();
  const parsedPackages = packages.map(row => ({
    ...row,
    features: JSON.parse(row.features)
  }));

  console.log(`Pulled ${packages.length} un-hidden packages from the database.`);
  console.log(`Pulled ${features.length} used features from the database.`);

  return {
    packages: parsedPackages,
    features: features,
  }
}

export async function getAdminList() {
  const conn = await getConnection();
  const [admins] = await conn.execute('SELECT userId FROM lbse.admin WHERE isActive = true');
  await conn.end();
  console.log(`Pulled ${admins.length} admins from the database.`);

  return {
    admins: admins
  }
}

export async function getImageList() {
  const conn = await getConnection();
  const [images] = await conn.execute('SELECT fileName FROM lbse.gallery');
  await conn.end();
  console.log(`Pulled ${images.length} images from the database.`);
  
  return {
    images: images
  }
}
