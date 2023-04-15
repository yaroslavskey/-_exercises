const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function findOriginDestination(superType, startDate, endDate) {
  const existingObjects = await prisma.$queryRaw`
    SELECT "origin", "destination", "superType", COUNT(*)::int AS "_count"
    FROM "bortsBase"
    WHERE  "superType" = ${superType} AND "departure" >= ${startDate} AND "departure" <= ${endDate}
    GROUP BY "origin", "destination", "superType"
    ORDER BY "_count" DESC;
  `;

  return existingObjects;
};

async function findOrigin(type, startDate, endDate) {
  const existingObjects = await prisma.$queryRaw`
    SELECT "origin", "type", COUNT(*)::int AS "_count"
    FROM "Borts"
    WHERE  "type" = ${type} AND "departure" >= ${startDate} AND "departure" <= ${endDate}
    GROUP BY "origin", "type"
    ORDER BY "_count" DESC;
  `;

  return existingObjects;
};

async function findDestination(type, startDate, endDate) {
  const existingObjects = await prisma.$queryRaw`
    SELECT "destination", "type", COUNT(*)::int AS "_count"
    FROM "Borts"
    WHERE  "type" = ${type} AND "departure" >= ${startDate} AND "departure" <= ${endDate}
    GROUP BY "destination", "type"
    ORDER BY "_count" DESC;
  `;

  return existingObjects;
};

module.exports = {
  findOriginDestination,
  findOrigin,
  findDestination,
};

