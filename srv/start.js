'use strict'

var Seneca = require('seneca')
var Mesh = require('seneca-mesh')

var envs = process.env
var opts = {
  seneca: {
    tag: envs.BASE_TAG || 'nodezoo-base'
  },
  mesh: {
    base: true,
    host: envs.BASE_HOST
  }
}

Seneca(opts.seneca)
  .use(Mesh, opts.mesh)
