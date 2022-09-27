import { MigrationInterface, QueryRunner } from "typeorm"

export class migrationsts1664218124694 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.query(`
        //     ALTER TABLE User ADD products Products FOREIGN KEY (products) REFERENCES Products(id);
        //     ALTER TABLE Products ADD user User FOREIGN KEY (user) REFERENCES User(id); 
        // `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
