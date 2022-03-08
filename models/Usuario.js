module.exports = (sequelize,DataType)=>{
    const Usuario = sequelize.define("Usuario",{
        usuario_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataType.STRING,
        email: DataType.STRING,
        senha: DataType.STRING,
        telefone: DataType.STRING,
        cpf: DataType.STRING,
        rg: DataType.STRING,
        estado: DataType.STRING,
        cidade: DataType.STRING,
        estadoCivil: DataType.STRING,
        imagem: DataType.STRING,
        tipo: DataType.STRING
    },{
        tableName: 'usuario',
        timestamps: false
    })
    return Usuario
}