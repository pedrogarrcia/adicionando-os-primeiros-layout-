
    const produtos = [
        {
            name:  "Produto 1",
            descricao: "lorem inpsum",
            precoAntigo: '23,99',
            precoAtual:  '19,99',
            precoDividido: 'ou 2x de 9,99'
        },

        {
            name:  "Produto 2",
            descricao: "lorem inpsum",
            precoAntigo: '23,99',
            precoAtual:  '19,99',
            precoDividido: 'ou 2x de 9,99'
        },

        {
            name:  "Produto 3",
            descricao: "lorem inpsum",
            precoAntigo: '23,99',
            precoAtual:  '19,99',
            precoDividido: 'ou 2x de 9,99'
        },

        {
            name:  "Produto 4",
            descricao: "lorem inpsum",
            precoAntigo: '23,99',
            precoAtual:  '19,99',
            precoDividido: 'ou 2x de 9,99'
        },

        {
            name:  "Produto 5",
            descricao: "lorem inpsum",
            precoAntigo: '23,99',
            precoAtual:  '19,99',
            precoDividido: 'ou 2x de 9,99'
        },

        {
            name:  "Produto 6",
            descricao: "lorem inpsum",
            precoAntigo: '23,99',
            precoAtual:  '19,99',
            precoDividido: 'ou 2x de 9,99'
        },

        {
            name:  "Produto 7",
            descricao: "lorem inpsum",
            precoAntigo: '23,99',
            precoAtual:  '19,99',
            precoDividido: 'ou 2x de 9,99'
        },

        {
            name:  "Produto 8",
            descricao: "lorem inpsum",
            precoAntigo: '23,99',
            precoAtual:  '19,99',
            precoDividido: 'ou 2x de 9,99'
        }
    ]

    const ulList = document.querySelector('.ulList')
  
    produtos.forEach(produto => {
        const li = document.createElement('li')
        li.innerHTML = `
            <a href="#">&nbsp;</a>
            <h2 class="productName">${produto.name}</h2>
            <p class="productDescription">${produto.descricao}</p>
            <p class="prices">
            <span class="previousPrice">${produto.precoAntigo}</span><br>
            <strong class="currentPrice">${produto.precoAtual}</strong><br>
            <span class="splitPrice">${produto.precoDividido}</span>
            </p>
            <button class="button">Comprar</button>
        `
        ulList.appendChild(li)
    })