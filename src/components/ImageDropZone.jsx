import React, { useState, useRef } from "react";
import { Container, Button } from "react-bootstrap";


function ImageDropZone() {
    const [image, setImage] = useState(null);
    const dropRef = useRef(null);

    // Manipula imagens arrastadas e soltas
    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = (e) => setImage(e.target.result);
            reader.readAsDataURL(file);
        }
    };

    // Manipula imagens copiadas e coladas
    const handlePaste = (event) => {
        const items = event.clipboardData.items;
        for (let item of items) {
            if (item.type.startsWith("image/")) {
                const file = item.getAsFile();
                const reader = new FileReader();
                reader.onload = (e) => setImage(e.target.result);
                reader.readAsDataURL(file);
            }
        }
    };

    return (
        <Container className="mt-4 text-center">

            {/* Quadrado para arrastar ou colar imagens */}
            <div
                ref={dropRef}
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                onPaste={handlePaste}
                className="border border-secondary rounded d-flex align-items-center justify-content-center"
                style={{
                    width: "400px",
                    height: "420px",
                    backgroundColor: "#f8f9fa",
                    cursor: "pointer",
                    overflow: "hidden",
                    margin: "0 auto"
                }}
            >
                {image ? (
                    <img
                        src={image}
                        alt="Preview"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                ) : (
                    <p className="text-muted">Solte ou cole uma imagem</p>
                )}
            </div>

            {/* Botão para limpar a imagem */}
            {image && (
                <Button variant="danger" className="mt-3" onClick={() => setImage(null)}>
                    Remover Imagem
                </Button>
            )}
        </Container>
    );
}

export default ImageDropZone;
