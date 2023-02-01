import { ClienteEntity } from 'src/modules/cliente/entities/cliente.entity';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('pedidos', { schema: 'pedido' })
export class PedidoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @CreateDateColumn({
    name: 'created_date',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;
  @UpdateDateColumn({
    name: 'updated_date',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
  @DeleteDateColumn({
    name: 'deleted_date',
    type: 'timestamptz',
    nullable: true,
  })
  deletedAt: Date;

  @Column('varchar', {
    name: 'title',
    unique: true,
    comment: 'nombre del pedidoo',
  })
  name: string;

  @Column('number', {
    name: 'price',
    comment: 'precio por unidad',
  })
  price: number;

  @Column('varchar', {
    name: 'descuento',
   
    comment: 'tipo de descuento del pedidoo',
  })
  descuento: string;

  @Column('varchar', {
    name: 'descripcion',
    
    comment: 'descripción del pedidoo',
  })
  description: string;

  //Relationship
  @ManyToOne(() => ClienteEntity, (cliente) => cliente.pedidos)
  cliente: ClienteEntity;

  /*@Column('boolean',{
name:'state',
})
state:boolean;
@Column('enum', {
name:'language',
enum:languageTypeEnum,
})
language:LanguageTypeEnum;*/

  //completar

  @BeforeInsert()
  @BeforeUpdate()
  async setTitle() {
    if (!this.title) {
      return;
    }
    this.title = this.title.toUpperCase();
  }
  /*setEmail(){
if(!this.email){
return;
}
this.email = this.email.toLowerCase().trim();

async hashPassword(){
if(!this.password){
    return;
}
this.password = await Bcrypt.hash(this.password, 12);
}*/
}
