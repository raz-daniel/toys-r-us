import { AllowNull, Column, DataType, Default, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import Book from "./book";


@Table({
    underscored: true
})

export default class Genre extends Model {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string
    
    @AllowNull(false)
    @Column
    name: string

    @HasMany(() => Book)
    book: Book[]
}