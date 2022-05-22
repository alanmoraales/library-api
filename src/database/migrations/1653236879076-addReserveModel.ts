import {MigrationInterface, QueryRunner} from "typeorm";

export class addReserveModel1653236879076 implements MigrationInterface {
    name = 'addReserveModel1653236879076'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "reserve" ("id" SERIAL NOT NULL, "status" character varying NOT NULL DEFAULT 'Pending for recollection', "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_619d1e12dbedbe126620cac8240" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "cart_item" ADD "reserveId" integer`);
        await queryRunner.query(`ALTER TABLE "reserve" ADD CONSTRAINT "FK_dc318c87bc1d6552424a88a6444" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart_item" ADD CONSTRAINT "FK_f02f24e198e9978666ffeebd378" FOREIGN KEY ("reserveId") REFERENCES "reserve"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cart_item" DROP CONSTRAINT "FK_f02f24e198e9978666ffeebd378"`);
        await queryRunner.query(`ALTER TABLE "reserve" DROP CONSTRAINT "FK_dc318c87bc1d6552424a88a6444"`);
        await queryRunner.query(`ALTER TABLE "cart_item" DROP COLUMN "reserveId"`);
        await queryRunner.query(`DROP TABLE "reserve"`);
    }

}
