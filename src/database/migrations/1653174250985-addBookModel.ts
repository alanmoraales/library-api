import { MigrationInterface, QueryRunner } from 'typeorm';

export class addBookModel1653174250985 implements MigrationInterface {
  name = 'addBookModel1653174250985';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "book" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "imageUrl" character varying NOT NULL, "description" character varying NOT NULL, "availableQuantity" integer NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_a3afef72ec8f80e6e5c310b28a4" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "book"`);
  }
}
