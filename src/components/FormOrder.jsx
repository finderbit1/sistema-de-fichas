import React, { useState } from 'react';
import { Form, Accordion, Tab, Tabs, Container, Button, Card } from 'react-bootstrap';
import FormPainel from './FormPainel';
import FormTotem from './FormTotem';

function TypeProduction() {
    const [opcaoSelecionada, setOpcaoSelecionada] = useState('');

    const handleSelectChange = (e) => {
        setOpcaoSelecionada(e.target.value);
    };

    return (
        <>
            <Form.Select aria-label="Default select example" onChange={handleSelectChange} value={opcaoSelecionada}>
                <option value="">Selecione uma opção</option>
                <option value="painel">Painel</option>
                <option value="totem">Totem</option>
                <option value="lona">Lona</option>
            </Form.Select>
            <div>
                {opcaoSelecionada === 'painel' && (
                    <FormPainel />
                )}
                {opcaoSelecionada === 'totem' && (
                    <FormTotem />
                )}
            </div>
        </>
    );
}

function FormOrder({ items, addItem, removeItem }) {
    const [count, setCount] = useState(1);
    const [tabs, setTabs] = useState([{ eventKey: `tab-${count}`, title: `Tab ${count}`, content: <TypeProduction /> }]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddItem = () => {
        if (item.nome && item.quantidade && item.preco) {
            addItem(item);
            setItem({ nome: '', quantidade: '', preco: '' });
        }
    };


    const adTab = () => {
        const newCount = count + 1;
        setCount(newCount);
        setTabs([
            ...tabs,
            { eventKey: `tab-${newCount}`, title: `Tab ${newCount}`, content: <TypeProduction /> },
        ]);
    };

    const removeTab = (eventKey) => {
        const updatedTabs = tabs.filter(tab => tab.eventKey !== eventKey);
        setTabs(updatedTabs);

        // Se não houver mais abas, resetamos o contador para 1
        if (updatedTabs.length === 0) {
            setCount(1);
        }
    };

    return (
        <>
            <Card>
                <Tabs
                    defaultActiveKey="tab-1"
                    id="container-tabs"
                    className="mb-3"
                >
                    {tabs.map((tab, index) => (
                        <Tab
                            eventKey={tab.eventKey}
                            title={
                                <>
                                    {tab.title}
                                    <span
                                        onClick={() => removeTab(tab.eventKey)}
                                        style={{ cursor: 'pointer', marginLeft: '10px', color: 'red' }}
                                    >
                                        &#10005; {/* X character */}
                                    </span>
                                </>
                            }
                            key={index}
                        >
                            {tab.content}
                        </Tab>
                    ))}
                </Tabs>
            </Card>
            <div className="p-12">
                <Container>
                    <Button onClick={adTab}>
                        Adicionar Aba
                    </Button>
                </Container>
            </div>
        </>
    );
}

export default FormOrder;
