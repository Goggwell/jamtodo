import React from 'react'
import { Container, Heading, Button, Flex } from 'theme-ui'

const Home = () => {
    return (
        <Container>
            <Flex sx={{ flexDirection: "column", padding: 3 }}>
                <Heading as="h1">Start Your Day The Right Way</Heading>
                <Button 
                    sx={{ marginTop: 2 }}
                    onClick={() => {
                        alert("clicked")
                    }}
                >
                    Log In
                </Button>
            </Flex>
        </Container>
    )
}

export default Home
