import { PedidoEntity } from 'src/modules/pedido/entities';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OneToMany } from 'typeorm/decorator/relations/OneToMany';

export class ClienteEntity {
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
    comment: 'nombre del cliente',
  })
  name: string;

  @Column('number', {
    name: 'edad',
    comment: 'edad',
  })
  edad: number;

  @Column('number', {
    name: 'cedula',
    comment: 'cedula del cliente',
  })
  cedula: number;

  @Column('varchar', {
    name: 'nacionalidad',
    
    comment: 'nacionalidad',
  })
  nacionalidad: string;

  //Relationship
  // @ManyToOne(() => CategoryEntity, (cateogry) => category.products)
  // category: CategoryEntity;

  @Column('varchar', {
    name: 'title',
    unique: true,
    comment: 'titulo del pedido',
  })
  name: string;

  //Relationship
  // Relaciones de uno a muchos
  @OneToMany(() => PedidoEntity, (pedido) => pedido.cliente)
  pedidos: PedidoEntity[];

  // Relaciones de muchos a uno
  // @ManyToOne(() => CategoryEntity, (cateogry) => category.products)
  // category: CategoryEntity;

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
  async setName() {
    if (!this.name) {
      return;
    }
    this.name = this.name.toUpperCase();
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
