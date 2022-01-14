import { Genre } from 'src/models/genre.entity';
import { MediaType } from 'src/models/media-type.entity';
import { Playlist } from 'src/playlist/playlist.entity';
import {
    Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn
} from 'typeorm';

@Index('IFK_TrackMediaTypeId', ['mediaTypeId'], {})
@Index('IFK_TrackGenreId', ['genreId'], {})
@Index('IFK_TrackAlbumId', ['albumId'], {})
@Entity('Track')
export class Track {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'TrackId' })
  trackId: number;

  @Column('nvarchar', { name: 'Name', length: 200 })
  name: string;

  @Column('integer', { name: 'MediaTypeId' })
  mediaTypeId: number;

  @Column('integer', { name: 'AlbumId', nullable: true })
  albumId: number | null;

  @Column('integer', { name: 'GenreId', nullable: true })
  genreId: number | null;

  @Column('nvarchar', { name: 'Composer', nullable: true, length: 220 })
  composer: string | null;

  @Column('integer', { name: 'Milliseconds' })
  milliseconds: number;

  @Column('integer', { name: 'Bytes', nullable: true })
  bytes: number | null;

  @Column('numeric', { name: 'UnitPrice', precision: 10, scale: 2 })
  unitPrice: number;

  @ManyToMany(() => Playlist, (playlist) => playlist.tracks)
  @JoinTable({
    name: 'PlaylistTrack',
    joinColumns: [{ name: 'TrackId', referencedColumnName: 'trackId' }],
    inverseJoinColumns: [
      { name: 'PlaylistId', referencedColumnName: 'playlistId' },
    ],
  })
  playlists: Playlist[];

  @ManyToOne(() => MediaType, (mediaType) => mediaType.tracks)
  @JoinColumn([{ name: 'MediaTypeId', referencedColumnName: 'mediaTypeId' }])
  mediaType: MediaType;

  @ManyToOne(() => Genre, (genre) => genre.tracks)
  @JoinColumn([{ name: 'GenreId', referencedColumnName: 'genreId' }])
  genre: Genre;
}
