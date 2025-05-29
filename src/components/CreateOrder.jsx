import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Button, Card, Tabs, Tab } from 'react-bootstrap';
import FormOrder from '../components/FormOrder';

const CreateOrder = () => {
    const [formData, setFormData] = useState({
        numeroPedido: '',
        nomeCliente: '',
        telefoneCliente: '',
        dataEntrada: '',
        dataEntrega: '',
        cidadeCliente: '',
        observacao: '',
        items: []  // Array para armazenar os itens do pedido
    });

    useEffect(() => {
        const generateOrderId = () => `ORD-${Math.floor(Math.random() * 100000)}`;
        setFormData((prev) => ({ ...prev, numeroPedido: generateOrderId() }));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Função para adicionar itens ao array `items`
    const addItem = (item) => {
        setFormData((prev) => ({
            ...prev,
            items: [...prev.items, item]
        }));
    };

    // Função para remover um item do array `items`
    const removeItem = (index) => {
        setFormData((prev) => ({
            ...prev,
            items: prev.items.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/pedidos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Pedido enviado com sucesso!');
                alert('Pedido salvo com sucesso!');
                setFormData({
                    numeroPedido: `ORD-${Math.floor(Math.random() * 100000)}`,
                    nomeCliente: '',
                    telefoneCliente: '',
                    dataEntrada: '',
                    dataEntrega: '',
                    cidadeCliente: '',
                    observacao: '',
                    items: []
                });
            } else {
                console.error('Erro ao enviar o pedido');
                alert('Erro ao salvar pedido!');
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
            alert('Erro ao conectar com o servidor!');
        }
    };

    return (
        <>
            <Card className="p-3">
                {/* Tab do Cabeçalho do Pedido */}
                <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Col md={2}>
                            <Form.Group controlId="numeroPedido">
                                <Form.Control
                                    type="text"
                                    name="numeroPedido"
                                    value={formData.numeroPedido}
                                    onChange={handleChange}
                                    readOnly
                                    placeholder="Id do Pedido"
                                />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group controlId="nomeCliente">
                                <Form.Control
                                    type="text"
                                    name="nomeCliente"
                                    value={formData.nomeCliente}
                                    placeholder="Nome do Cliente"
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>

                        <Col md={3}>
                            <Form.Group controlId="telefoneCliente">
                                <Form.Control
                                    type="tel"
                                    name="telefoneCliente"
                                    value={formData.telefoneCliente}
                                    onChange={handleChange}
                                    placeholder="(00) 00000-0000"
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col md={3}>
                            <Form.Group controlId="dataEntrada">
                                <Form.Label>Data de Entrada</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="dataEntrada"
                                    value={formData.dataEntrada}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>

                        <Col md={3}>
                            <Form.Group controlId="dataEntrega">
                                <Form.Label>Data de Entrega</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="dataEntrega"
                                    value={formData.dataEntrega}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group controlId="cidadeCliente">
                                <Form.Label>Cidade do Cliente</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="cidadeCliente"
                                    value={formData.cidadeCliente}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group controlId="observacao">
                                <Form.Control
                                    as="textarea"
                                    rows={1}
                                    name="observacao"
                                    value={formData.observacao}
                                    onChange={handleChange}
                                    placeholder="Informações adicionais sobre o pedido..."
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-4">
                        <Col md={2}>
                            <Button variant="primary" type="submit">
                                Salvar Pedido
                            </Button>
                        </Col>
                        <Col md={2}>
                            <Button variant="secondary" type="reset">
                                Cancelar
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card>
            <Card>
                <FormOrder items={formData.items} addItem={addItem} removeItem={removeItem} />
            </Card>
        </>
    
)};

export default CreateOrder;
