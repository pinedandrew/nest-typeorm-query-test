import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Genre } from './models/genre.entity';
import { MediaType } from './models/media-type.entity';
import { Playlist } from './playlist/playlist.entity';
import { PlaylistModule } from './playlist/playlist.module';
import { Track } from './track/track.entity';
import { TrackModule } from './track/track.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'abx.db',
      synchronize: false,
      entities: [Track, Playlist, Genre, MediaType],
    }),
    TrackModule,
    PlaylistModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
