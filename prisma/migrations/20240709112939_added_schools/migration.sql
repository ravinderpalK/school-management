/*
  Warnings:

  - You are about to drop the column `State` on the `Schools` table. All the data in the column will be lost.
  - Added the required column `state` to the `Schools` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Schools" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "address_1" TEXT NOT NULL,
    "address_2" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "pincode" INTEGER NOT NULL,
    "udise" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_Schools" ("address_1", "address_2", "city", "created_at", "id", "name", "pincode", "udise", "updated_at") SELECT "address_1", "address_2", "city", "created_at", "id", "name", "pincode", "udise", "updated_at" FROM "Schools";
DROP TABLE "Schools";
ALTER TABLE "new_Schools" RENAME TO "Schools";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
