/*
  Warnings:

  - You are about to drop the column `templateId` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `templateId` on the `Questionnaire` table. All the data in the column will be lost.
  - You are about to drop the `Template` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `questionnaireId` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_templateId_fkey";

-- DropForeignKey
ALTER TABLE "Questionnaire" DROP CONSTRAINT "Questionnaire_templateId_fkey";

-- AlterTable
ALTER TABLE "Question" DROP COLUMN "templateId",
ADD COLUMN     "questionnaireId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Questionnaire" DROP COLUMN "templateId",
ADD COLUMN     "version" INTEGER NOT NULL DEFAULT 1;

-- DropTable
DROP TABLE "Template";

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_questionnaireId_fkey" FOREIGN KEY ("questionnaireId") REFERENCES "Questionnaire"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
