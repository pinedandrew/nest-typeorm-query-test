import { DiffInSeconds } from 'src/utils';
import { Repository } from 'typeorm';

import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Playlist } from './playlist.entity';

@Injectable()
export class PlaylistService {
  private readonly logger = new Logger(PlaylistService.name);

  constructor(@InjectRepository(Playlist) private repo: Repository<Playlist>) {}

  async findOnePlaylistByName(name: string): Promise<Playlist> {
    const start = new Date();
    const playlist: Playlist = await this.repo.findOne({ where: { name } });

    const end = new Date();
    this.logger.log(
      'Finished execution ' + DiffInSeconds(start, end) + ' seconds.',
    );

    if (!playlist) {
      throw new NotFoundException(`Playlist with name ${name} not found.`);
    }

    return playlist;
  }

  async getTrackcount(playlistName: string): Promise<number> {
    const start = new Date();

    /**
     * First Way - Faster
     */
    const playlist: Playlist = await this.repo.findOne({
      relations: ['tracks'],
      where: { name: playlistName },
    });

    const trackCount = playlist.tracks.length;

    /**
     * Second Way - Slower
     */
    // let trackCount = 0;
    // const countKey = 'COUNT(*)';
    // const playlist: Playlist = await this.findOnePlaylistByName(playlistName);
    // const query = await this.repo.query(
    //   `SELECT ${countKey} FROM PlaylistTrack WHERE PlaylistId = ${playlist.playlistId}`,
    // );

    // if (query.length > 0 && query[0][countKey]) {
    //   trackCount = query[0][countKey];
    // }

    const end = new Date();
    this.logger.log(
      'Finished execution ' + DiffInSeconds(start, end) + ' seconds.',
    );

    return trackCount;
  }
}
