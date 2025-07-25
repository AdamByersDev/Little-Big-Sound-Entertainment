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