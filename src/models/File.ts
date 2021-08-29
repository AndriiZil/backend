import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Directory } from './Directory';
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

    @ManyToOne(() => Directory, directory => directory.files, {
        onDelete: 'CASCADE'
    })
    directory: Subfolder | string;

}
