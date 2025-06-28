import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveLanguages1750769190542 implements MigrationInterface {
    name = 'RemoveLanguages1750769190542'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`font\` DROP COLUMN \`languages\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`font\` ADD \`languages\` varchar`);
    }
} 