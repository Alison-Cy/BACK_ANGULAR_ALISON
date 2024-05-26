import { MigrationInterface, QueryRunner } from "typeorm";

export class ModificandoTableUser1716738657908 implements MigrationInterface {
    name = 'ModificandoTableUser1716738657908'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categoria" ADD "nombre" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categoria" ADD "mail" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categoria" ADD "detalle" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categoria" DROP COLUMN "detalle"`);
        await queryRunner.query(`ALTER TABLE "categoria" DROP COLUMN "mail"`);
        await queryRunner.query(`ALTER TABLE "categoria" DROP COLUMN "nombre"`);
    }

}
