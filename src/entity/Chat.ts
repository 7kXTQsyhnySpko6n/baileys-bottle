import { proto } from "@whiskeysockets/baileys";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  ManyToOne, PrimaryColumn,
} from "typeorm";
import { Auth } from "./Auth";

@Entity()
@Unique(["id"])

export class Chat {
  @PrimaryGeneratedColumn()
  autoId:number

  @Column()
  id: string;

  @Column({ nullable: true })
  unreadCount?: number | null;

  @Column({ nullable: true })
  readOnly?: boolean | null;

  @Column({ nullable: true, type: "simple-json" })
  conversationTimestamp?: number | Long | null;

  @Column({ nullable: true })
  name?: string | null;

  @Column({ nullable: true })
  pHash?: string | null;

  @Column({ nullable: true })
  notSpam?: boolean | null;

  @Column({ nullable: true, type: "simple-json" })
  participant?: proto.IGroupParticipant[] | null;

  @Column({ nullable: true })
  suspended?: boolean | null;

  @Column({ nullable: true })
  displayName?: string | null;

  @Column({ nullable: true })
  mute?: number | null;

  @Column({ nullable: true })
  archive?: boolean;
}
