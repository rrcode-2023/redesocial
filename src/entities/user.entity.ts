import { Entity, ObjectId, ObjectIdColumn, Column } from "typeorm";

@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  birthDate: Date;

  @Column({ nullable: true })
  updatedAt: Date;

  @Column()
  gender: string;

  @Column()
  profilePicture: string;

  @Column()
  profileCover: string;
}
