import React, { useEffect } from 'react'
import { Container, Heading, Button, Flex } from 'theme-ui'
import netlifyIdentity from 'netlify-identity-widget'

netlifyIdentity.init({})

const Home = () => {
    useEffect(() => {
        netlifyIdentity.init({})
    })

    return (
        <Container>
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
        </Container>
    )
}

export default Home
