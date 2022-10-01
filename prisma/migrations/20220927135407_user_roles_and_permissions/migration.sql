-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('ADMIN', 'MANAGER', 'SUPERVISOR', 'LEADER', 'USER');

-- CreateEnum
CREATE TYPE "Permissions" AS ENUM ('READ', 'CREATE', 'DELETE', 'UPDATE');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "permissions" "Permissions"[] DEFAULT ARRAY['READ']::"Permissions"[],
ADD COLUMN     "role" "Roles" NOT NULL DEFAULT 'USER';
