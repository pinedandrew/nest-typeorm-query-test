import { Controller, Get, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

import { Track } from './track.entity';
import { TrackService } from './track.service';

@ApiTags('track')
@Controller('track')
export class TrackController {
  constructor(private trackService: TrackService) {}

  @ApiQuery({
    name: 'search',
    type: String,
    required: false,
  })
  @Get()
  getAll(@Query('search') search: string): Promise<Track[]> {
    return this.trackService.getTrackByName(search);
  }

  @ApiQuery({
    name: 'playlistName',
    type: String,
    required: true,
  })
  @ApiQuery({
    name: 'trackName',
    type: String,
    required: true,
  })
  @Get('playlist-tracks')
  getPlaylistTracks(
    @Query('trackName') trackName: string,
    @Query('playlistName') playlistName: string,
  ): Promise<Track[]> {
    return this.trackService.getPlaylistTrack(playlistName, trackName);
  }
}
