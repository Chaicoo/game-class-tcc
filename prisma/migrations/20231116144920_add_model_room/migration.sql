-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'student';

-- CreateTable
CREATE TABLE "HonorBadge" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "icon" TEXT NOT NULL,

    CONSTRAINT "HonorBadge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Room" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "professorId" TEXT NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Activity" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_HonorBadgeToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "HonorBadge_name_color_icon_key" ON "HonorBadge"("name", "color", "icon");

-- CreateIndex
CREATE UNIQUE INDEX "Room_code_key" ON "Room"("code");

-- CreateIndex
CREATE UNIQUE INDEX "_HonorBadgeToUser_AB_unique" ON "_HonorBadgeToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_HonorBadgeToUser_B_index" ON "_HonorBadgeToUser"("B");

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HonorBadgeToUser" ADD CONSTRAINT "_HonorBadgeToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "HonorBadge"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HonorBadgeToUser" ADD CONSTRAINT "_HonorBadgeToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
