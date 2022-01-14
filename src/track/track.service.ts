import { DiffInSeconds } from 'src/utils';
import { Repository } from 'typeorm';

import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Track } from './track.entity';

@Injectable()
export class TrackService {
  private readonly logger = new Logger(TrackService.name);

  constructor(@InjectRepository(Track) private repo: Repository<Track>) {}

  async getTrackByName(name: string): Promise<Track[]> {
    const start = new Date();
    const tracks: Track[] = await this.repo.find({ where: { name } });

    const end = new Date();
    this.logger.log(
      'Finished execution ' + DiffInSeconds(start, end) + ' seconds.',
    );

    return tracks;
  }

  async getPlaylistTrack(
    playlistName: string,
    trackName: string,
  ): Promise<Track[]> {
    const start = new Date();

    const tracks: Track[] = await this.repo.query(`SELECT * FROM Playlist as p
    LEFT JOIN PlaylistTrack as pt ON pt.PlaylistId = p.PlaylistId
    LEFT JOIN Track as t ON t.TrackId = pt.TrackId
    WHERE p.Name = '${playlistName}' AND t.Name = '${trackName}'`);

    const end = new Date();
    this.logger.log(
      'Finished execution ' + DiffInSeconds(start, end) + ' seconds.',
    );

    this.logger.log(tracks);

    return tracks;
  }
}
