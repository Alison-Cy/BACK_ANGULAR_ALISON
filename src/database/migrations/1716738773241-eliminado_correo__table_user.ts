import { MigrationInterface, QueryRunner } from "typeorm";

export class EliminadoCorreo_tableUser1716738773241 implements MigrationInterface {
    name = 'EliminadoCorreo_tableUser1716738773241'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categoria" DROP COLUMN "mail"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categoria" ADD "mail" character varying NOT NULL`);
    }

}
