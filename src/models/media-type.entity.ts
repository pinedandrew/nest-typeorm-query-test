import { Track } from 'src/track/track.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('MediaType')
export class MediaType {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'MediaTypeId' })
  mediaTypeId: number;

  @Column('nvarchar', { name: 'Name', nullable: true, length: 120 })
  name: string | null;

  @OneToMany(() => Track, (track) => track.mediaType)
  tracks: Track[];
}
