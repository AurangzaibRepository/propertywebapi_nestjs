import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BlogsModule } from './blogs/blogs.module';
import { LoggerModule } from './logger/logger.module';
import { TeamsModule } from './teams/teams.module';
import { StatesModule } from './states/states.module';
import { LocationsModule } from './locations/locations.module';
import { DepartmentsModule } from './departments/departments.module';
import { BlogCategoriesModule } from './blog-categories/blog-categories.module';
import { PartnersModule } from './partners/partners.module';
import { HelpersModule } from './helpers/helpers.module';
import { FaqsModule } from './faqs/faqs.module';
import { AmenitiesModule } from './amenities/amenities.module';
import { PropertiesModule } from './properties/properties.module';
import { PropertyTypesModule } from './property-types/property-types.module';
import { PropertyTypeService } from './property-type/property-type.service';
import { PropertyImagesModule } from './property-images/property-images.module';
import { MetadataModule } from './metadata/metadata.module';
import { LanguagesModule } from './languages/languages.module';
import { LanguageService } from './language/language.service';
import { TeamLanguageModule } from './team-language/team-language.module';
import { DevelopersModule } from './developers/developers.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT!),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadModels: true,
      synchronize: true,
    }),
    UsersModule,
    BlogsModule,
    LoggerModule,
    TeamsModule,
    StatesModule,
    LocationsModule,
    DepartmentsModule,
    BlogCategoriesModule,
    PartnersModule,
    HelpersModule,
    FaqsModule,
    AmenitiesModule,
    PropertiesModule,
    PropertyTypesModule,
    PropertyImagesModule,
    MetadataModule,
    LanguagesModule,
    TeamLanguageModule,
    DevelopersModule,
  ],
  controllers: [AppController],
  providers: [AppService, PropertyTypeService, LanguageService],
})
export class AppModule {}
