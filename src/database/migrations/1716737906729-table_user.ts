import { MigrationInterface, QueryRunner } from "typeorm";

export class TableUser1716737906729 implements MigrationInterface {
    name = 'TableUser1716737906729'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categoria" ("id" SERIAL NOT NULL, CONSTRAINT "PK_f027836b77b84fb4c3a374dc70d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "categoria"`);
    }

}
