'use server';

import { getConnection } from "@/lib/db";

export async function getPackages() {
  const conn = await getConnection();
  const [plans] = await conn.execute('SELECT * FROM availablepackages');
  await conn.end();

  console.log(`Pulled ${plans.length} un-hidden packages from the database.`);

  return {
    plans: plans,
  }
}