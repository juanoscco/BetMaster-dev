import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class Bets extends BaseEntity {
  /**
   * | id (Primary Key) | INT                                  |
   * | id_usuario       | INT (Foreign Key)                    |
   * | id_evento        | INT (Foreign Key)                    |
   * | monto_apostado   | DECIMAL                              |
   * | opcion_seleccionada | VARCHAR                           |
   * | resultado        | ENUM ('ganada', 'perdida', 'pendiente')|
   *
   */

  @PrimaryGeneratedColumn()
  id: number;
    
  @Column("int")
  id_usuario: number;

  @Column("int")
  id_evento: number;
}
