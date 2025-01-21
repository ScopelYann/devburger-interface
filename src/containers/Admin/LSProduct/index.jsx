import { useEffect, useState } from "react";
import { api } from '../../../services/api';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CheckCircle, Pencil, XCircle } from '@phosphor-icons/react'
import { EditButton, Container, ProductseImage } from './styles'
import { formatPrice } from "../../../utils/formatPrice";
import { useNavigate } from "react-router-dom";

export function LSProduct() {
    const [products, setProducts] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        async function loadProducts() {
            try {
                const { data } = await api.get('/products');
                setProducts(data);
            } catch (error) {
                console.error("Erro ao carregar produtos:", error);
            }
        }

        loadProducts();
    }, []);


    function isOffers(offers) {
        if (offers) {
            return <CheckCircle size={28} color='#61a120' />
        } else {
            return <XCircle size={28} color="#ff3205" />

        }
    }


    function editProduct(product) {
        navigate('/admin/edit-product', {
            state: { product }
        })


    }
    return (
        <Container>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="Tabela de Produtos">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="left">Nome</TableCell>
                            <TableCell align="left">Preço</TableCell>
                            <TableCell align="left">Oferta</TableCell>
                            <TableCell align="left">Categoria</TableCell>
                            <TableCell align="left">Imagem</TableCell>
                            <TableCell align="left">Editar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{row.id}</TableCell>
                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="left">{formatPrice(row.price)}</TableCell>
                                {/* Caso a categoria seja um objeto, exiba o nome */}
                                {/* Certifique-se de exibir a URL de forma amigável */}
                                <TableCell align="left">{isOffers(row.offer)}</TableCell>
                                <TableCell align="left">{row.category?.name || "Sem Categoria"}</TableCell>
                                <TableCell align="left">
                                    <ProductseImage src={row.url} alt={`Imagem ${row.name}`} />
                                </TableCell>

                                <TableCell align="left">
                                    <EditButton onClick={() => editProduct(row)}>
                                        <Pencil />
                                    </EditButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}
