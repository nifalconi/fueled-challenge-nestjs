/*
  Warnings:

  - You are about to drop the `Question` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_templateId_fkey";

-- AlterTable
ALTER TABLE "Template" ADD COLUMN     "questions" JSONB[];

-- DropTable
DROP TABLE "Question";
