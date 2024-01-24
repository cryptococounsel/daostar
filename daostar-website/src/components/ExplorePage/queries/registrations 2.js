import { gql } from '@apollo/client'

const REGISTRATIONS = gql`
    query Registrations($id: String) @api(contextKey: "apiName") {
        registrationNetwork(id: $id) {
            id
            registrations {
                id
                daoAddress
                daoURI
                daoName
                daoDescription
                membersURI
                proposalsURI
                governanceURI
                activityLogURI
                registrationAddress
                registrationNetwork {
                    id
                  }
            }
        }
    }
`

const REGISTRATION = gql`
    query Registration($id: String) @api(contextKey: "apiName") {
        registrationInstance(id: $id) {
            id
            daoAddress
            daoURI
            daoName
            daoDescription
            membersURI
            proposalsURI
            governanceURI
            activityLogURI
            registrationAddress
            registrationNetwork {
                id
                }
          }
    }
`

export default { REGISTRATIONS, REGISTRATION}
