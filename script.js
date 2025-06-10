
    const ulList = document.querySelector('.ulList')
    const buttonNext = document.querySelector('#buttonNextPage')

    let nextPageUrl = 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1'

    function carregarProdutos(url) {

        fetch(url)
        .then(res => res.json())
        .then(data => {
            data.products.forEach(produto => {
                const li = document.createElement('li')
                li.innerHTML = `
                    <img src="https:${produto.image}" alt="${produto.name}">
                    <h2 class="productName">${produto.name}</h2>
                    <p class="productDescription">${produto.description}</p>
                    <p class="prices">
                    <span class="previousPrice">De: R$${produto.oldPrice}</span><br>
                    <strong class="currentPrice">Por: R$${produto.price}</strong><br>
                    <span class="splitPrice"> ou ${produto.installments.count} x de R$ ${produto.installments.value.toFixed(2).replace('.', ',')}</span>
                    </p>
                    <button class="button">Comprar</button>
                `
                ulList.appendChild(li)
            })  
            
            nextPageUrl = 'https://' + data.nextPage
        })
         .catch(error => {
            console.log('Erro ao buscar os produtos:', error)
            const erroMsg = document.createElement('p')
            erroMsg.classList.add('mensagem-erro')
            erroMsg.textContent = 'Erro ao carregar os produtos. Tente novamente mais tarde...'
            ulList.appendChild(erroMsg)
        }) 

    }

    carregarProdutos(nextPageUrl)


    buttonNext.addEventListener('click', () => {
        if(nextPageUrl) {
            carregarProdutos(nextPageUrl)
        } else {
            const fim = document.createElement('p')
            fim.textContent = 'Não há mais produtos para mostrar.'
            document.querySelector('.products-list').appendChild(fim)
            buttonNext.disabled = true
        }  
    })   
    const inputName1 = document.querySelector('#inputName1')
    const inputEmail1 = document.querySelector('#inputEmail1')
    const inputCPF1 = document.querySelector('#inputCPF1')
    const Mas = document.querySelector('#Mas')
    const Fem = document.querySelector('#Fem')
    const button1 = document.querySelector('#button1')

    button1.addEventListener('click', (event) => {
        event.preventDefault()
        const inputNameValue = inputName1.value
        const inputEmailValue = inputEmail1.value
        const inputCPFValue = inputCPF1.value
        
        if(inputNameValue.trim() !== '') {
            console.log('Valor preenchido', `${inputNameValue}`)
        } else {
            inputName1.classList.add('error')
            inputName1.placeholder = 'Digite um nome válido'
        }
        if(inputEmailValue.trim() !== '') {
            console.log('Email preenchido', `${inputEmailValue}`)
        } else {
            inputEmail1.classList.add('error')
            inputEmail1.placeholder = "Email inválido";
        }
        if(inputCPFValue.trim() !== '' && inputCPFValue.length == 11) {
            console.log('CPF válido')
        } else {
            inputCPF1.classList.add('error')
            inputCPF1.placeholder = "CPF inválido"

        }

    })

    const buttonForm2 = document.querySelector('#buttonForm2')
    const inputName2 = document.querySelector('#nome')
    const inputEmail2 = document.querySelector('#email')

    buttonForm2.addEventListener('click', (event) => {
        event.preventDefault()
        if(inputName2.value.trim() === '') {
            inputName2.classList.add('error')
            inputName2.placeholder = 'Digite um nome válido'
        } 
        if(inputEmail2.value.trim() === '') {
            inputEmail2.classList.add('error')
            inputEmail2.placeholder= "Email inválido"
        }
    })

