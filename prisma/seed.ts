import { PrismaClient } from '../generated/client/index.js'
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const pool = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter: pool })

async function main() {
  console.log('Seeding StreamVault database...')

  const vendors = await Promise.all([
    prisma.vendor.upsert({
      where: { vendorName: 'Gruv' },
      update: {},
      create: { vendorName: 'Gruv' },
    }),
    prisma.vendor.upsert({
      where: { vendorName: 'FanFlix' },
      update: {},
      create: { vendorName: 'FanFlix' },
    }),
    prisma.vendor.upsert({
      where: { vendorName: 'Vudu' },
      update: {},
      create: { vendorName: 'Vudu' },
    }),
    prisma.vendor.upsert({
      where: { vendorName: 'Movies Anywhere' },
      update: {},
      create: { vendorName: 'Movies Anywhere' },
    }),
    prisma.vendor.upsert({
      where: { vendorName: 'iTunes' },
      update: {},
      create: { vendorName: 'iTunes' },
    }),
  ])

  console.log(`Created ${vendors.length} vendors`)

  const studios = await Promise.all([
    prisma.studio.upsert({
      where: { studioName: 'Universal Pictures' },
      update: {},
      create: { studioName: 'Universal Pictures' },
    }),
    prisma.studio.upsert({
      where: { studioName: 'Paramount Pictures' },
      update: {},
      create: { studioName: 'Paramount Pictures' },
    }),
    prisma.studio.upsert({
      where: { studioName: 'Warner Bros.' },
      update: {},
      create: { studioName: 'Warner Bros.' },
    }),
    prisma.studio.upsert({
      where: { studioName: 'Sony Pictures' },
      update: {},
      create: { studioName: 'Sony Pictures' },
    }),
    prisma.studio.upsert({
      where: { studioName: 'Disney' },
      update: {},
      create: { studioName: 'Disney' },
    }),
    prisma.studio.upsert({
      where: { studioName: '20th Century Studios' },
      update: {},
      create: { studioName: '20th Century Studios' },
    }),
    prisma.studio.upsert({
      where: { studioName: 'Lionsgate' },
      update: {},
      create: { studioName: 'Lionsgate' },
    }),
    prisma.studio.upsert({
      where: { studioName: 'MGM' },
      update: {},
      create: { studioName: 'MGM' },
    }),
    prisma.studio.upsert({
      where: { studioName: 'A24' },
      update: {},
      create: { studioName: 'A24' },
    }),
  ])

  console.log(`Created ${studios.length} studios`)

  const platforms = await Promise.all([
    prisma.redemptionPlatform.upsert({
      where: { platformName: 'Movies Anywhere' },
      update: {},
      create: { platformName: 'Movies Anywhere', platformCode: 'MA' },
    }),
    prisma.redemptionPlatform.upsert({
      where: { platformName: 'iTunes' },
      update: {},
      create: { platformName: 'iTunes', platformCode: 'IT' },
    }),
    prisma.redemptionPlatform.upsert({
      where: { platformName: 'Vudu' },
      update: {},
      create: { platformName: 'Vudu', platformCode: 'VU' },
    }),
    prisma.redemptionPlatform.upsert({
      where: { platformName: 'Google Play' },
      update: {},
      create: { platformName: 'Google Play', platformCode: 'GP' },
    }),
    prisma.redemptionPlatform.upsert({
      where: { platformName: 'Amazon Prime Video' },
      update: {},
      create: { platformName: 'Amazon Prime Video', platformCode: 'AMZ' },
    }),
  ])

  console.log(`Created ${platforms.length} redemption platforms`)

  console.log('Seeding completed!')
}

main()
  .catch((e) => {
    console.error('Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
