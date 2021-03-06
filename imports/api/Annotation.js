import { Mongo } from 'meteor/mongo'
import Serrurier from 'meteor/svein:serrurier'
import { raw } from '/imports/time'

const annotations = new Mongo.Collection('plugins.annotations')

const Annotation = Serrurier.createClass({
  name: 'Annotation',
  collection: annotations,
  secured: {
    insert: true,
    update: true,
    remove: true
  },
  fields: {
    projectId: String,
    expId: String,
    observations: String,
    rawMinutes: Number,
    categories: [Object]
  },
  methods: {
    readableMinutes () {
      return raw.readable(this.rawMinutes)
    }
  },
  behaviors: {
    softremove: {
      removedFieldName: '_removed'
    }
  },
  indexes: {
    uniqRawMinutes: {
      fields: {
        rawMinutes: 1,
        expId: 1
      },
      options: {
        unique: true
      }
    }
  }
})

export default Annotation
