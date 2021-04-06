import React from 'react'
import styled from 'styled-components'

import PrimaryButton from '../../components/PrimaryButton'
import Container from '../../components/Container'

const topContent = (
    <form>
        <PrimaryButton>Enviar!</PrimaryButton>
    </form>
)

const HomePage = () => (
    <Container topContent={topContent} />
)

export default HomePage
