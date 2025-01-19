import {List, ListPlus, Receipt} from '@phosphor-icons/react'

export const navLinks = [


    {
        id: 1,
        label: 'Pedidos',
        path: '/admin/orders',
        icon: <Receipt/>
    },
    {
        id: 2,
        label: 'Listar Produtos',
        path: '/admin/ls-product',
        icon: <List/>
    },
    {
        id: 3,
        label: 'Adicionar Produto',
        path: '/admin/add-product',
        icon: <ListPlus/>
    }
]