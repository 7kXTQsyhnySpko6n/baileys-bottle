import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";
import { Auth } from "./Auth";

@Entity()
@Unique(["id"])
export class Contact {
  @PrimaryGeneratedColumn()
  autoId:number

  @Column()
  id: string;

  @Column({ nullable: true })
  name?: string;

  @Column({ nullable: true })
  notify?: string;



  @Column({ nullable: true })
  imgUrl?: string | "changed";

}
