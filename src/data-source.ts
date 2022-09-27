// import "reflect-metadata"
import { DataSource } from "typeorm"
import { Products } from "./entity/Products"
import { User } from "./entity/User"

// import {Migrations01} from "./migration/migrations"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [User, Products],
    subscribers: [],
    migrations: []
    // migrationsTableName: "custom_migration_table",
})
