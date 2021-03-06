import { HTTP } from 'meteor/http'

export function asyncPost (url, options = {}) {
  return new Promise(function (resolve, reject) {
    HTTP.post(url, options, (err, result) => {
      if (err) reject(err)
      else resolve(result)
    })
  })
}

export function asyncGet (url, options = {}) {
  return new Promise(function (resolve, reject) {
    HTTP.get(url, options, (err, result) => {
      if (err) reject(err)
      else resolve(result)
    })
  })
}
