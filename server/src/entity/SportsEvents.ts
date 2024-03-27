import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
} from "typeorm";
import { Teams } from "./Teams";

@Entity()
export class SportEvents extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Teams, (teams) => teams)
  @JoinTable()
  team_one: Teams;

  @ManyToOne(() => Teams, (teams) => teams)
  @JoinTable()
  team_two: Teams;

  @Column({ length: 50 })
  sport: string;

  @Column("datetime")
  date_time: Date;
}
