import { Track } from 'src/track/track.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Genre')
export class Genre {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'GenreId' })
  genreId: number;

  @Column('nvarchar', { name: 'Name', nullable: true, length: 120 })
  name: string | null;

  @OneToMany(() => Track, (track) => track.genre)
  tracks: Track[];
}
