
const defaultTests = require('../../defaults/tests.json')
const defaultOrgs = require('../../defaults/orgs.json')

class TestModel {
    constructor(){
        return this
    }

    /**
     * Gets the available list of test given the organization name, 
     * or all tests if organization is null
     * @param {string} organization name
     * @returns an array of objects of test data
     */
    getTests( organization ){
        return defaultTests
    }


    /**
     * Gets a list of the available organizations
     * @returns array of objects
     */
     getOrganizations(){
        return defaultOrgs
    }
}

export default TestModel