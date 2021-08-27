import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Subfolder } from './Subfolder';

@Entity()
export class Directory {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Subfolder, subfolder => subfolder.directory, {
        onDelete: 'CASCADE'
    })
    subfolders: Subfolder[];

}
