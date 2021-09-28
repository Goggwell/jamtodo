import React, { useContext } from 'react'
import { Router, Link } from "@reach/router"
import { Flex, Heading, Button, NavLink } from 'theme-ui'
import netlifyIdentity from "netlify-identity-widget"
import { IdentityContext } from '../../identity-context'

let Dash = () => {
    const { user } = useContext(IdentityContext)

    return <div>Dash hasUser: {user && user.user_metadata.full_name}</div>
}

let DashLoggedOut = props => {
    const { identity: netlifyIdentity } = useContext(IdentityContext)

    return (
        <Flex>
            <Flex as='nav'>
                <NavLink as={Link} to='/' p={2}>
                    Home
                </NavLink>
                <NavLink as={Link} to='/app' p={2}>
                    Dashboard
                </NavLink>
                {user && (
                    <NavLink href='#!' p={2}>
                        {user.user_metadata.full_name}
                    </NavLink>
                )}
            </Flex>
        
            <Flex sx={{ flexDirection: "column", padding: 3}}>
                <Heading as="h1">Start Your Day The Right Way</Heading>
                <Button 
                    sx={{ marginTop: 2 }}
                    onClick={() => {
                        netlifyIdentity.open()
                    }}
                >
                    Log In
                </Button>
            </Flex>
        </Flex>
    )
}

const app = () => {
    return (
        <Router>
            <Dash path="/app" />
        </Router>
    )
}

export default app
