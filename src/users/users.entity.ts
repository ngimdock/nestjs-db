import { Entity } from 'typeorm';

@Entity()
export class User {
  id: number;

  firstname: string;

  lastname: string;

  isActive: boolean;
}
