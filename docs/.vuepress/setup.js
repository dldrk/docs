const RUNDECK_VERSION='3.3.10'
const RUNDECK_VERSION_FULL='3.3.10-SNAPSHOT'
const API_VERSION='36'
const API_DEP_REL='3.4.0'
const API_DEP_VER='11'
const API_MIN_VER='1'

const REPO_BRANCH='3.3.x'

const setup = {
    base: process.env.DOC_BASE,
    branch: process.env.DOC_BRANCH || REPO_BRANCH,
    apiVersion: API_VERSION,
    apiDepVersion: API_DEP_VER,
    apiDepRelease: API_DEP_REL,
    apiMinVersion: API_MIN_VER,
    rundeckVersion: process.env.RUNDECK_VERSION || RUNDECK_VERSION,
    rundeckVersionFull: process.env.RUNDECK_VERSION_FULL || RUNDECK_VERSION_FULL
}

module.exports = setup
