import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath:
                process.env.NODE_ENV === 'production'
                    ? '.env.production'
                    : process.env.NODE_ENV === 'local'
                    ? '.env.local'
                    : '.env.development',
        }),
    ],
})
export class CommonConfigModule {}
