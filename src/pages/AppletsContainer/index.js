import React from "react";
import Container from "@/pages/AppletsContainer/Container"
import { Center} from "@chakra-ui/react";
import ItemPlaceholder from '@/pages/ItemPlaceholder/ItemPlaceholder'



export default function AppletsContainer(props) {

return (
<Center h='100%' bg='#f4f3f2'>

    <Container width='500px'>
    <ItemPlaceholder />

    </Container>
</Center>

)


}
