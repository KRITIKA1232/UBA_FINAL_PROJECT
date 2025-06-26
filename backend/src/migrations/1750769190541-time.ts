import { MigrationInterface, QueryRunner } from "typeorm";

export class Time1750769190541 implements MigrationInterface {
    name = 'Time1750769190541'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`font\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`fileName\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_62eaa70573ceb48cbbc6a1f8f7\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_62eaa70573ceb48cbbc6a1f8f7\` ON \`font\``);
        await queryRunner.query(`DROP TABLE \`font\``);
    }

}
