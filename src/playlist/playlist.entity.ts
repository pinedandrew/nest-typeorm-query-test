import { Track } from 'src/track/track.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Playlist')
export class Playlist {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'PlaylistId' })
  playlistId: number;

  @Column('nvarchar', { name: 'Name', nullable: true, length: 120 })
  name: string | null;

  @ManyToMany(() => Track, (track) => track.playlists)
  tracks: Track[];
}
