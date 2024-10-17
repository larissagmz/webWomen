const jobsData = [
    {
      id: 0,
      title: "Pessoa desenvolvedora front-end - React",
      enterprise: "Kenzie",
      location: "Curitiba",
      descrition:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      modalities: "Hibrido",
    },
    {
      id: 1,
      title: "Pessoa desenvolvedora back-end - Node JS",
      enterprise: "Brazilians in Tech",
      location: "Rio de Janeiro",
      descrition:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      modalities: "Presencial"
    },
    {
      id: 2,
      title: "Pessoa desenvolvedora Fullstack - Node JS",
      enterprise: "Brazilians in Tech",
      location: "Rio de Janeiro",
      descrition:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      modalities: "Home Office"
    },
  ];
 
  const body = document.body
  function renderHeader(){
    const header = document.createElement('header')
    const divContainer = document.createElement("div")
    const divInformation = document.createElement("div")
    const h1  = document.createElement("h1")
    const h2 = document.createElement("h2")
    const p = document.createElement("p")
    const strong = document.createElement("strong")
    const button = document.createElement("button")


    divContainer.className = "container"
    divInformation.className = "div-information-header"
    button.className = "button-header"

    h1.innerText = "Webwomen"
    h2.innerText = "Lugar de mulher é onde ela quiser"
    p.innerText = "Está procurando oportunidades de estágio, emprego ou bolsas de estudo? Ou até mesmo oportunidades para atender eventos de tecnologia no Brasil e ao redor do mundo?"
    strong.innerText = "Confere aqui embaixo o que temos para você!"
    button.innerText = "ir para a seçao de vagas"

    body.insertBefore(header, body.children[0])
    header.append(divContainer)
    divContainer.append(h1, divInformation, button)
    divInformation.append(h2,p,strong)


  }
  renderHeader()

