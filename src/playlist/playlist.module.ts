import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PlaylistController } from './playlist.controller';
import { Playlist } from './playlist.entity';
import { PlaylistService } from './playlist.service';

@Module({
  imports: [TypeOrmModule.forFeature([Playlist])],
  providers: [PlaylistService],
  controllers: [PlaylistController],
})
export class PlaylistModule {}
