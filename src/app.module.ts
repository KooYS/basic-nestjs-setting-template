import { Module } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { CommonConfigModule } from '@/common/config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        CommonConfigModule,
        TypeOrmModule.forFeature([
            // Models
        ]),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
