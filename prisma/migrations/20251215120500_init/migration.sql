/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "quality" AS ENUM ('4K', 'HD', 'SD', 'UHD');

-- CreateEnum
CREATE TYPE "status" AS ENUM ('Ready', 'Out of Stock', 'Pending', 'Sold', 'Invalid');

-- CreateEnum
CREATE TYPE "priority" AS ENUM ('Low', 'Normal', 'High', 'Urgent');

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "vendors" (
    "vendorId" SERIAL NOT NULL,
    "vendorName" VARCHAR(100) NOT NULL,
    "contactEmail" VARCHAR(255),
    "websiteUrl" VARCHAR(500),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "vendors_pkey" PRIMARY KEY ("vendorId")
);

-- CreateTable
CREATE TABLE "studios" (
    "studioId" SERIAL NOT NULL,
    "studioName" VARCHAR(100) NOT NULL,
    "redemptionBaseUrl" VARCHAR(500),
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "studios_pkey" PRIMARY KEY ("studioId")
);

-- CreateTable
CREATE TABLE "redemption_platforms" (
    "platformId" SERIAL NOT NULL,
    "platformName" VARCHAR(50) NOT NULL,
    "platformCode" VARCHAR(20) NOT NULL,
    "redemptionUrl" VARCHAR(500),

    CONSTRAINT "redemption_platforms_pkey" PRIMARY KEY ("platformId")
);

-- CreateTable
CREATE TABLE "movies" (
    "movieId" SERIAL NOT NULL,
    "title" VARCHAR(500) NOT NULL,
    "releaseYear" INTEGER,
    "studioId" INTEGER,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("movieId")
);

-- CreateTable
CREATE TABLE "customers" (
    "customerId" SERIAL NOT NULL,
    "customerName" VARCHAR(255),
    "email" VARCHAR(255),
    "phone" VARCHAR(50),
    "totalPurchases" INTEGER NOT NULL DEFAULT 0,
    "totalSpent" DECIMAL(10,2) NOT NULL DEFAULT 0.00,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("customerId")
);

-- CreateTable
CREATE TABLE "movie_codes" (
    "codeId" SERIAL NOT NULL,
    "movieId" INTEGER NOT NULL,
    "code" VARCHAR(100) NOT NULL,
    "quality" "quality" NOT NULL,
    "status" "status" NOT NULL DEFAULT 'Pending',
    "vendorId" INTEGER NOT NULL,
    "studioId" INTEGER,
    "purchasePrice" DECIMAL(10,2),
    "sellingPrice" DECIMAL(10,2),
    "redemptionUrl" TEXT,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "lastVerifiedAt" TIMESTAMP,
    "vendorOrderId" VARCHAR(100),

    CONSTRAINT "movie_codes_pkey" PRIMARY KEY ("codeId")
);

-- CreateTable
CREATE TABLE "sales" (
    "saleId" SERIAL NOT NULL,
    "codeId" INTEGER NOT NULL,
    "customerId" INTEGER,
    "saleDate" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "salePrice" DECIMAL(10,2) NOT NULL,
    "purchaseCost" DECIMAL(10,2),
    "netProfit" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "sales_pkey" PRIMARY KEY ("saleId")
);

-- CreateTable
CREATE TABLE "code_platform_availability" (
    "availabilityId" SERIAL NOT NULL,
    "codeId" INTEGER NOT NULL,
    "platformId" INTEGER NOT NULL,
    "isValid" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "code_platform_availability_pkey" PRIMARY KEY ("availabilityId")
);

-- CreateTable
CREATE TABLE "validation_history" (
    "validationId" SERIAL NOT NULL,
    "codeId" INTEGER NOT NULL,
    "platformId" INTEGER,
    "validationDate" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isValid" BOOLEAN NOT NULL,
    "validationMethod" VARCHAR(50),

    CONSTRAINT "validation_history_pkey" PRIMARY KEY ("validationId")
);

-- CreateTable
CREATE TABLE "error_log" (
    "errorId" SERIAL NOT NULL,
    "codeId" INTEGER,
    "errorType" VARCHAR(50) NOT NULL,
    "errorMessage" TEXT,
    "platformId" INTEGER,
    "resolved" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "error_log_pkey" PRIMARY KEY ("errorId")
);

-- CreateTable
CREATE TABLE "recheck_schedule" (
    "scheduleId" SERIAL NOT NULL,
    "codeId" INTEGER NOT NULL,
    "scheduledDate" DATE NOT NULL,
    "priority" "priority" NOT NULL DEFAULT 'Normal',
    "completed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "recheck_schedule_pkey" PRIMARY KEY ("scheduleId")
);

-- CreateIndex
CREATE UNIQUE INDEX "vendors_vendorName_key" ON "vendors"("vendorName");

-- CreateIndex
CREATE UNIQUE INDEX "studios_studioName_key" ON "studios"("studioName");

-- CreateIndex
CREATE UNIQUE INDEX "redemption_platforms_platformName_key" ON "redemption_platforms"("platformName");

-- CreateIndex
CREATE UNIQUE INDEX "redemption_platforms_platformCode_key" ON "redemption_platforms"("platformCode");

-- CreateIndex
CREATE INDEX "movies_title_idx" ON "movies"("title");

-- CreateIndex
CREATE INDEX "movies_studioId_idx" ON "movies"("studioId");

-- CreateIndex
CREATE UNIQUE INDEX "movies_title_releaseYear_key" ON "movies"("title", "releaseYear");

-- CreateIndex
CREATE UNIQUE INDEX "customers_email_key" ON "customers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "movie_codes_code_key" ON "movie_codes"("code");

-- CreateIndex
CREATE INDEX "movie_codes_status_idx" ON "movie_codes"("status");

-- CreateIndex
CREATE INDEX "movie_codes_quality_idx" ON "movie_codes"("quality");

-- CreateIndex
CREATE INDEX "movie_codes_vendorId_idx" ON "movie_codes"("vendorId");

-- CreateIndex
CREATE INDEX "movie_codes_movieId_idx" ON "movie_codes"("movieId");

-- CreateIndex
CREATE INDEX "movie_codes_isVerified_idx" ON "movie_codes"("isVerified");

-- CreateIndex
CREATE INDEX "movie_codes_lastVerifiedAt_idx" ON "movie_codes"("lastVerifiedAt");

-- CreateIndex
CREATE UNIQUE INDEX "sales_codeId_key" ON "sales"("codeId");

-- CreateIndex
CREATE INDEX "sales_saleDate_idx" ON "sales"("saleDate");

-- CreateIndex
CREATE INDEX "sales_customerId_idx" ON "sales"("customerId");

-- CreateIndex
CREATE INDEX "sales_codeId_idx" ON "sales"("codeId");

-- CreateIndex
CREATE INDEX "code_platform_availability_codeId_idx" ON "code_platform_availability"("codeId");

-- CreateIndex
CREATE INDEX "code_platform_availability_platformId_idx" ON "code_platform_availability"("platformId");

-- CreateIndex
CREATE UNIQUE INDEX "code_platform_availability_codeId_platformId_key" ON "code_platform_availability"("codeId", "platformId");

-- CreateIndex
CREATE INDEX "validation_history_codeId_idx" ON "validation_history"("codeId");

-- CreateIndex
CREATE INDEX "validation_history_validationDate_idx" ON "validation_history"("validationDate");

-- CreateIndex
CREATE INDEX "validation_history_platformId_idx" ON "validation_history"("platformId");

-- CreateIndex
CREATE INDEX "error_log_codeId_idx" ON "error_log"("codeId");

-- CreateIndex
CREATE INDEX "error_log_resolved_idx" ON "error_log"("resolved");

-- CreateIndex
CREATE INDEX "recheck_schedule_scheduledDate_idx" ON "recheck_schedule"("scheduledDate");

-- CreateIndex
CREATE INDEX "recheck_schedule_completed_idx" ON "recheck_schedule"("completed");

-- AddForeignKey
ALTER TABLE "movies" ADD CONSTRAINT "movies_studioId_fkey" FOREIGN KEY ("studioId") REFERENCES "studios"("studioId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movie_codes" ADD CONSTRAINT "movie_codes_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movies"("movieId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movie_codes" ADD CONSTRAINT "movie_codes_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "vendors"("vendorId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movie_codes" ADD CONSTRAINT "movie_codes_studioId_fkey" FOREIGN KEY ("studioId") REFERENCES "studios"("studioId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_codeId_fkey" FOREIGN KEY ("codeId") REFERENCES "movie_codes"("codeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("customerId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "code_platform_availability" ADD CONSTRAINT "code_platform_availability_codeId_fkey" FOREIGN KEY ("codeId") REFERENCES "movie_codes"("codeId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "code_platform_availability" ADD CONSTRAINT "code_platform_availability_platformId_fkey" FOREIGN KEY ("platformId") REFERENCES "redemption_platforms"("platformId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "validation_history" ADD CONSTRAINT "validation_history_codeId_fkey" FOREIGN KEY ("codeId") REFERENCES "movie_codes"("codeId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "validation_history" ADD CONSTRAINT "validation_history_platformId_fkey" FOREIGN KEY ("platformId") REFERENCES "redemption_platforms"("platformId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "error_log" ADD CONSTRAINT "error_log_codeId_fkey" FOREIGN KEY ("codeId") REFERENCES "movie_codes"("codeId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "error_log" ADD CONSTRAINT "error_log_platformId_fkey" FOREIGN KEY ("platformId") REFERENCES "redemption_platforms"("platformId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recheck_schedule" ADD CONSTRAINT "recheck_schedule_codeId_fkey" FOREIGN KEY ("codeId") REFERENCES "movie_codes"("codeId") ON DELETE CASCADE ON UPDATE CASCADE;
