const Actions = Object.assign({}, require('./base/_action-constants'), {
  'ACCEPT_INVITE': 'ACCEPT_INVITE',
  'ACTION_CHANGE_REQUEST': 'ACTION_CHANGE_REQUEST',
  'CHANGE_USER_FLAG': 'CHANGE_USER_FLAG',
  'CONFIRM_TWO_FACTOR': 'CONFIRM_TWO_FACTOR',
  'CREATE_ENV': 'CREATE_ENV',
  'CREATE_FLAG': 'CREATE_FLAG',
  'CREATE_GROUP': 'CREATE_GROUP',
  'CREATE_ORGANISATION': 'CREATE_ORGANISATION',
  'CREATE_PROJECT': 'CREATE_PROJECT',
  'DELETE_CHANGE_REQUEST': 'DELETE_CHANGE_REQUEST',
  'DELETE_ENVIRONMENT': 'DELETE_ENVIRONMENT',
  'DELETE_GROUP': 'DELETE_GROUP',
  'DELETE_IDENTITY_TRAIT': 'DELETE_IDENTITY_TRAIT',
  'DELETE_INVITE': 'DELETE_INVITE',
  'DELETE_ORGANISATION': 'DELETE_ORGANISATION',
  'DELETE_PROJECT': 'DELETE_PROJECT',
  'DELETE_USER': 'DELETE_USER',
  'DISABLE_TWO_FACTOR': 'DISABLE_TWO_FACTOR',
  'EDIT_ENVIRONMENT': 'EDIT_ENVIRONMENT',
  'EDIT_ENVIRONMENT_FLAG': 'EDIT_ENVIRONMENT_FLAG',
  'EDIT_ENVIRONMENT_FLAG_CHANGE_REQUEST':
    'EDIT_ENVIRONMENT_FLAG_CHANGE_REQUEST',
  'EDIT_FEATURE': 'EDIT_FEATURE',
  'EDIT_FEATURE_MV': 'EDIT_FEATURE_MV',
  'EDIT_ORGANISATION': 'EDIT_ORGANISATION',
  'EDIT_PROJECT': 'EDIT_PROJECT',
  'EDIT_TRAIT': 'EDIT_TRAIT',
  'EDIT_USER_FLAG': 'EDIT_USER_FLAG',
  'ENABLE_TWO_FACTOR': 'ENABLE_TWO_FACTOR',
  'GET_CHANGE_REQUEST': 'GET_CHANGE_REQUEST',
  'GET_CHANGE_REQUESTS': 'GET_CHANGE_REQUESTS',
  'GET_ENVIRONMENT': 'GET_ENVIRONMENT',
  'GET_FEATURE_USAGE': 'GET_FEATURE_USAGE',
  'GET_FLAGS': 'GET_FLAGS',
  'GET_GROUPS': 'GET_GROUPS',
  'GET_GROUPS_PAGE': 'GET_GROUPS_PAGE',
  'GET_IDENTITY': 'GET_IDENTITY',
  'GET_IDENTITY_SEGMENTS': 'GET_IDENTITY_SEGMENTS',
  'GET_ORGANISATION': 'GET_ORGANISATION',
  'GET_PROJECT': 'GET_PROJECT',
  'INVALIDATE_INVITE_LINK': 'INVALIDATE_INVITE_LINK',
  'INVITE_USERS': 'INVITE_USERS',
  'MIGRATE_PROJECT': 'MIGRATE_PROJECT',
  'OAUTH': 'OAUTH',
  'REFRESH_FEATURES': 'REFRESH_FEATURES',
  'REMOVE_FLAG': 'REMOVE_FLAG',
  'REMOVE_USER_FLAG': 'REMOVE_USER_FLAG',
  'RESEND_INVITE': 'RESEND_INVITE',
  'SEARCH_FLAGS': 'SEARCH_FLAGS',
  'SELECT_ENVIRONMENT': 'SELECT_ENVIRONMENT',
  'SELECT_ORGANISATION': 'SELECT_ORGANISATION',
  'TOGGLE_FLAG': 'TOGGLE_FLAG',
  'TOGGLE_USER_FLAG': 'TOGGLE_USER_FLAG',
  'TWO_FACTOR_LOGIN': 'TWO_FACTOR_LOGIN',
  'UPDATE_CHANGE_REQUEST': 'UPDATE_CHANGE_REQUEST',
  'UPDATE_GROUP': 'UPDATE_GROUP',
  'UPDATE_SUBSCRIPTION': 'UPDATE_SUBSCRIPTION',
  'UPDATE_USER_ROLE': 'UPDATE_USER_ROLE',
})

window.Actions = Actions
module.exports = Actions
