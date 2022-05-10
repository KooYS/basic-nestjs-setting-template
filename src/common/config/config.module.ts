import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

const mode: 'production' | 'local' | 'development' =
    process.env.NODE_ENV === 'production'
        ? 'production'
        : process.env.NODE_ENV === 'local'
        ? 'local'
        : 'development';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: `.env.${mode}`,
        }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT),
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            charset: process.env.DB_CHARSET,
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            synchronize: mode != 'production',
        }),
    ],
})
export class CommonConfigModule {}
