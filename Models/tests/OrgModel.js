
const defaultOrgs = require('../../defaults/orgs.json')

class OrgModel {
    constructor(){
        return this
    }

    /**
     * Gets a list of the available organizations
     * @returns array of objects
     */
    getOrganizations(){
        return defaultOrgs
    }
}

export default OrgModel