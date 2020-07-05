const blancos = {
  title: 'Vino Blanco',
  id: 'vino-blanco',
  products: [
    {
      name: 'Blanco País',
      price: '3,00'
    },
    {
      name: 'Ribeiro',
      price: '5,00'
    },
    {
      name: 'Albariño Barbuntín',
      price: '9,00'
    },
    {
      name: 'Albariño "Abadía de San Campio"',
      price: '13,50'
    },
    {
      name: 'Rosal "Quinta de Couselo"',
      price: '3,00'
    }
  ]
}

const tintos = {
  title: 'Vino Tinto',
  id: 'vino-tinto',
  notes: [
    {
      name: 'También servimos por copa',
      description: '(consultar precios)'
    }
  ],
  products: [
    {
      name: 'Tinto del País',
      price: '3,00'
    },
    {
      name: 'Mencía "Milenium"',
      price: '5,50'
    },
    {
      name: 'Mencía ""Joaquín Rebolledo"',
      price: '9,00'
    },
    {
      name: 'Rioja "Coto Crianza"',
      price: '9,00'
    },
    {
      name: 'Rioja "Ramón Bilbao - Crianza"',
      price: '11,50'
    },
    {
      name: 'Ribera del Duero "Fuentespina Crianza"',
      price: '8,50'
    },
    {
      name: 'Ribera del Duero "Viña Mayor"',
      price: '9,00'
    }
  ]
}

const refrescos = {
  title: 'Refrescos',
  id: 'refrescos',
  products: [
    {
      name: 'Refrescos',
      price: '1,80'
    },
    {
      name: 'Gaseosa',
      price: '5,00'
    },
    {
      name: 'Agua',
      price: '1,10',
      description: '500 ml'
    },
    {
      name: 'Agua',
      price: '2,50',
      description: '1000 ml'
    },
  ]
}

const cerveza = {
  title: 'Cervezas',
  id: 'cervezas',
  products: [
    {
      name: 'Caña',
      price: '1,80'
    },
    {
      name: 'Estrella, Mahou o similar',
      price: '1,80'
    },
    {
      name: 'Bock',
      price: '2,50'
    },
    {
      name: 'Selectas',
      price: '2,50'
    }
  ]
}

const products = {
  blancos,
  tintos,
  refrescos,
  cerveza
}

export default products

