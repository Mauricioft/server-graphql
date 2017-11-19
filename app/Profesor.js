const { Model } = require('objection')
const path = require('path')


class Comentarios extends Model {
  static get tableName() {
    return 'profesor'
  }

  static get relationMappings() {
    return {
      cursos: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, '/Curso'),
        join: {
          from: 'profesores.id',
          to: 'cursos.profesor_id'
        }
      }
    }
  }
}