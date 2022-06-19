import React from "react";
import styled from "styled-components";


// syntax for styled components
const Container = styled.div`
    display: flex;
`
const Panel = styled.div`
    flex: 1;
`

// here we are renaming the props
const SplitScreen = ({children}) => {
    const [Left, Right] = children;

    return(
        <Container>
            <Panel>
                {Left}
            </Panel>
            <Panel>
                {Right}
            </Panel>
        </Container>
    )
}

export default SplitScreen;