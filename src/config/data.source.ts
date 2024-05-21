import { DataSource, DataSourceOptions } from 'typeorm'
import { join } from 'path';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import { config } from "dotenv";

config({
  path: `.env.${process.env.NODE_ENV || "development"}.local`,
});

export const { DB_DATABASE, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT } = process.env

const configDbConnection: DataSourceOptions = {

  type:"mysql",
  host:DB_HOST,
  port:Number(DB_PORT),
  username: DB_NAME,
  password:DB_PASSWORD,
  database: DB_DATABASE,
  synchronize: true,
  migrationsRun: false,
  logging:false,
  entities:[join(__dirname, "../**/*.entity{.ts,.js}")],
  migrations: [join(__dirname, "../**/*.migrations{.ts,.js}")],
  subscribers:[join(__dirname, "../**/*.suscribers{.ts,.js}")],
  namingStrategy: new SnakeNamingStrategy()

}

const appDataSource: DataSource = new DataSource(configDbConnection)


export default appDataSource;