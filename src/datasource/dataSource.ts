import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
	type: "postgres",
	host: process.env.TYPEORM_HOST || "localhost",
	port: 5432,
	username: process.env.TYPEORM_USERNAME || "admin",
	password: process.env.TYPEORM_PASSWORD || "admin",
	database: process.env.TYPEORM_DATABASE || "code_drops_crud",
	entities: [ Categories ],
	migrations: ["./src/database/migrations/*.ts"],
	synchronize: true,
	logging: false,
});

export default {
	AppDataSource
};