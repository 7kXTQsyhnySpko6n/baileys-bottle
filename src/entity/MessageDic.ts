import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";
import { Auth } from "./Auth";
import { Message } from "./Message";

@Entity()
@Unique(["id"])
export class MessageDic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  jid: string;

  @OneToMany(() => Message, (x) => x.dictionary, {
    onDelete: "CASCADE",
    cascade: ["remove"],
  })
  messages: Message[];
}
