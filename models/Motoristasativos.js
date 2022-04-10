module.exports = (sequelize,DataType)=>{
    const MotoristasAtivos = sequelize.define("MotoristasAtivos",{
        principal_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_motorista: {
            type: DataType.INTEGER,
            foreignKey: true
        },
        regiao: DataType.STRING,
        reboque: DataType.STRING,
        pneu: DataType.STRING,
        bateria: DataType.STRING,
        patins: DataType.STRING
    },{
        tableName: 'motoristasativos',
        timestamps: false
    })

    MotoristasAtivos.associate = (models) => {
        MotoristasAtivos.belongsTo(models.Usuario,
          { foreignKey: 'id_motorista', as: 'atividade' });
    };

    return MotoristasAtivos
}