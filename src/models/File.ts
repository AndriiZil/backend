import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Subfolder } from './Subfolder';

@Entity()
export class File {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Subfolder, subfolder => subfolder.files, {
        onDelete: 'CASCADE'
    })
    subfolder: Subfolder | string;

}
