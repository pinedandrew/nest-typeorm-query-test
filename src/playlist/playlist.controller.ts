import { Controller, Get, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

import { Playlist } from './playlist.entity';
import { PlaylistService } from './playlist.service';

@ApiTags('playlist')
@Controller('playlist')
export class PlaylistController {
  constructor(private playlistService: PlaylistService) {}

  @ApiQuery({
    name: 'playlistName',
    type: String,
    required: true,
  })
  @Get()
  getPlaylistTracks(
    @Query('playlistName') playlistName: string,
  ): Promise<Playlist> {
    return this.playlistService.findOnePlaylistByName(playlistName);
  }

  @ApiQuery({
    name: 'playlistName',
    type: String,
    required: true,
  })
  @Get('/track-count')
  getTrackCount(@Query('playlistName') playlistName: string): Promise<number> {
    return this.playlistService.getTrackcount(playlistName);
  }
}
