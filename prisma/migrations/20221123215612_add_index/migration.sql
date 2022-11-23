/*
  Warnings:

  - You are about to drop the column `answerId` on the `Response` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Response" DROP COLUMN "answerId";

-- CreateIndex
CREATE INDEX "Question_questionnaireId_idx" ON "Question"("questionnaireId");

-- CreateIndex
CREATE INDEX "Questionnaire_link_idx" ON "Questionnaire"("link");

-- CreateIndex
CREATE INDEX "Response_questionnaireId_idx" ON "Response"("questionnaireId");

-- CreateIndex
CREATE INDEX "User_id_email_idx" ON "User"("id", "email");
