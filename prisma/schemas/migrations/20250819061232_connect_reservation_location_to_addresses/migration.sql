/*
  Warnings:

  - You are about to drop the column `address` on the `location` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "location" DROP COLUMN "address",
ADD COLUMN     "address_id" UUID;

-- CreateTable
CREATE TABLE "_addressesTolocation" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_addressesTolocation_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_addressesTolocation_B_index" ON "_addressesTolocation"("B");

-- AddForeignKey
ALTER TABLE "_addressesTolocation" ADD CONSTRAINT "_addressesTolocation_A_fkey" FOREIGN KEY ("A") REFERENCES "addresses"("address_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_addressesTolocation" ADD CONSTRAINT "_addressesTolocation_B_fkey" FOREIGN KEY ("B") REFERENCES "location"("location_id") ON DELETE CASCADE ON UPDATE CASCADE;
