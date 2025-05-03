import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Filter } from '@components/Filter';
import { ButtonIcon } from '@components/ButtonIcon';

import { Container, Form } from './styles';
import { Input } from '@components/Input';

export function Players() {
    return (
        <Container>
            <Header showBackButton />
            <Highlight
                title='Nome da turma'
                subtitle='Adicione a galera e separe os times'
            />
            <Form>
                <Input
                    placeholder="Nome da pessoa"
                    autoCorrect={true}
                />
                <ButtonIcon
                    icon="add"
                />
            </Form>
            <Filter 
                title="Time A"
            /> 
        </Container>
    )
}