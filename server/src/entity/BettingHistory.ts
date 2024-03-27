import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

export class BettingHistory extends BaseEntity {
  /**
   *
   *Historial de apuestas 
   *| -------------------------------------------------------
   *| id (Primary Key) | INT                               |
   *| id_usuario       | INT (Foreign Key)                 |
   *| id_apuesta       | INT (Foreign Key)                 |
   *| fecha_hora       | DATETIME                          |
   *| resultado        | ENUM ('ganada', 'perdida', 'pendiente')|
   *| ...              | ...                               |
    -------------------------------------------------------
   */
}
