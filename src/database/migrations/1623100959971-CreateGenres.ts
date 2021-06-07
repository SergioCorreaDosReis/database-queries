import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateGenres1623100959971 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('  CREATE TABLE "genres" ("id" 		UUID NOT NULL DEFAULT Uuid_generate_v4(),"title"     CHARACTER VARYING NOT NULL,"gamesid"   UUID NOT NULL, 	CONSTRAINT	"PK_genres" PRIMARY KEY ("id"))');
      
      await queryRunner.query('ALTER TABLE "genres"   ADD CONSTRAINT "FK_games" FOREIGN KEY ("gamesid") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE no action ')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

      await queryRunner.query(
        'ALTER TABLE "genres" DROP CONSTRAINT "FK_games"',
      );
      await queryRunner.query('DROP TABLE "genres"')
    }

}
