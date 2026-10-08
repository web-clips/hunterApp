-- CreateTable
CREATE TABLE "Application" (
    "id" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "companyInitials" TEXT,
    "status" TEXT NOT NULL DEFAULT 'applied',
    "salaryFrom" INTEGER,
    "salaryTo" INTEGER,
    "currency" TEXT NOT NULL DEFAULT 'KZT',
    "location" TEXT,
    "workFormat" TEXT,
    "appliedDate" TIMESTAMP(3),
    "source" TEXT,
    "postingUrl" TEXT,
    "notes" TEXT,
    "nextAction" TEXT,
    "nextActionDate" TIMESTAMP(3),
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
