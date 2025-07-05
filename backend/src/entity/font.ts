// Import necessary decorators from TypeORM
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

// Entity decorator marks this class as a database table named 'font'
@Entity("font")
export class Font {
  // Primary key column, auto-incremented
  @PrimaryGeneratedColumn()
  id: number;

  // Name column, must be unique and not null
  @Column("varchar", { nullable: false, unique: true })
  name: string;

  // File name column, must not be null
  @Column("varchar", { nullable: false })
  fileName: string;
}


