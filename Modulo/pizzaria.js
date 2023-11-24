var usuarios = [
    {
        id: '',
        nome: 'João',
        email: 'joaoroberto@gmail.com',
        senha: 'joao1234',
        Telefone: '(11) 99147-2749',
        CEP: 'Rua fontes, Vila Olimpia, Cássia dos Coqueiros, São Paulo'
    },
    {
        id: '1',
        nome: 'João',
        email: 'joaoroberto@gmail.com',
        senha: 'joao1234',
        Telefone: '(11) 99147-2749',
        CEP: 'Rua fontes, Vila Olimpia, Cássia dos Coqueiros, São Paulo'
    },
    {
        id: '1',
        nome: 'João',
        email: 'joaoroberto@gmail.com',
        senha: 'joao1234',
        Telefone: '(11) 99147-2749',
        CEP: 'Rua fontes, Vila Olimpia, Cássia dos Coqueiros, São Paulo'
    },
    {
        id: '1',
        nome: 'João',
        email: 'joaoroberto@gmail.com',
        senha: 'joao1234',
        Telefone: '(11) 99147-2749',
        CEP: 'Rua fontes, Vila Olimpia, Cássia dos Coqueiros, São Paulo'
    },
    {
        id: '5',
        nome: 'Gabriel',
        email: 'gabas123@hotmail.com',
        senha: 'gabas123',
        Telefone: '(11) 99147-2749',
        CEP: 'Rua fontes, Vila Olimpia, Cássia dos Coqueiros, São Paulo'
    }
]

var categorias = [
    {
        id: '1',
        nome: 'Pizzas',
        icone: './img/------',
        descricao: 'Pizzas'
    },
]

var produtos = [
    {
        id: 1,
        nomeProduto: 'Pizza de peperoni com queijo',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        preço: 16.00,
        avaliacao: 5,
        categoria: [
            {
                categorias: {id:1, nomeCategoria}
                
            }
        ],
        comentario: [
            {
                id:5,
                mensagem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                data: '15/03/2022',
                usuario: {id:2, nome}
            }
        ]
    },
    {
        id: 1,
        nomeProduto: 'Pizza de peperoni com queijo',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        preço: 16.00,
        avaliacao: 5,
        categoria: [
            {
                categorias: {id:1, nomeCategoria}
                
            }
        ],
        comentario: [
            {
                id:5,
                mensagem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                data: '15/03/2022',
                usuario: {id:2, nome}
            }
        ]
    },
    {
        id: 1,
        nomeProduto: 'Pizza de peperoni com queijo',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        preço: 16.00,
        avaliacao: 5,
        categoria: [
            {
                categorias: {id:1, nomeCategoria}
                
            }
        ],
        comentario: [
            {
                id:5,
                mensagem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                data: '15/03/2022',
                usuario: {id:2, nome}
            }
        ]
    }

]

module.exports={
    [usuarios, categorias, produtos]
 }