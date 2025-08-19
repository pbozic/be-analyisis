/*
  Warnings:

  - You are about to drop the `_addressesTolocation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_addressesTolocation" DROP CONSTRAINT "_addressesTolocation_A_fkey";

-- DropForeignKey
ALTER TABLE "_addressesTolocation" DROP CONSTRAINT "_addressesTolocation_B_fkey";

-- DropTable
DROP TABLE "_addressesTolocation";

-- AddForeignKey
ALTER TABLE "location" ADD CONSTRAINT "location_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "addresses"("address_id") ON DELETE SET NULL ON UPDATE CASCADE;
