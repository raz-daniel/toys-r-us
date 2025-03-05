import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import Audience from "./audience";

@Table({
    underscored: true
})

export default class Game extends Model {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    @AllowNull(false)
    @Column
    name: string

    @ForeignKey(() => Audience)
    @Column(DataType.UUID)
    audienceId: string

    @AllowNull(false)
    @Column
    description: string

    @AllowNull(false)
    @Column(DataType.DECIMAL(10,2))
    price: number
    
    @BelongsTo(() => Audience)
    audience: Audience

}