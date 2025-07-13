'use server';

import { getConnection } from "@/lib/backend/database";

export async function getPackages() {
  const conn = await getConnection();
  const [plans] = await conn.execute('SELECT id, name, summary, prefered FROM availablepackages');
  await conn.end();

  console.log(`Pulled ${plans.length} un-hidden packages from the database.`);

  return {
    plans: plans,
  }
}

export async function getFullPackageData() {
  const conn = await getConnection();
  const [plans] = await conn.execute('SELECT id, name, prefered, musictime, features FROM lbse.availablepackages');
  const [features] = await conn.execute('SELECT * FROM lbse.availablefeatures');
  await conn.end();
  const parsedPlans = plans.map(row => ({
    ...row,
    features: JSON.parse(row.features)
  }));

  console.log(`Pulled ${plans.length} un-hidden packages from the database.`);
  console.log(`Pulled ${features.length} used features from the database.`);

  return {
    plans: parsedPlans,
    features: features,
  }
}