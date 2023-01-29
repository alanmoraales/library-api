import { MigrationInterface, QueryRunner } from 'typeorm';

export class newBooksProperties1675026154398 implements MigrationInterface {
  name = 'newBooksProperties1675026154398';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "imageUrl"`);
    await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "description"`);
    await queryRunner.query(
      `ALTER TABLE "book" ADD "slug" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "book" ADD "coverSrc" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "book" ADD "synopsis" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "book" ADD "author" character varying NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "book" ADD "year" integer NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "book" ADD "collection" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "collection"`);
    await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "year"`);
    await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "author"`);
    await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "synopsis"`);
    await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "coverSrc"`);
    await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "slug"`);
    await queryRunner.query(
      `ALTER TABLE "book" ADD "description" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "book" ADD "imageUrl" character varying NOT NULL`,
    );
  }
}
