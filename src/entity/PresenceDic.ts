import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";
import { Auth } from "./Auth";
import { Presence } from "./Presence";

@Entity()
@Unique(["id"])
export class PresenceDic {
  @PrimaryGeneratedColumn()
  DBId: number;


  @Column()
  id: string;

  @OneToMany(() => Presence, (x) => x.dictionary, {
    cascade: true,
    onDelete: "CASCADE",
  })
  presences: Presence[];
}
