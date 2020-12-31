export class Produto {
    produto: {
      id: string,
      nome: string,
      codigoProduto: string,
      valor: string,
      promocao: boolean,
      valorPromocao: string,
      categoria: string,
      imagem: string,
      quantidade: string,
      fornecedor: {
        id: string,
        nome: string,
        cnpj: string
      }
    };
    links: [
      {
        href: string,
        rel: string,
        method: string
      },
      {
        href: string,
        rel: string,
        method: string
      },
      {
        href: string,
        rel: string,
        method: string
      },
      {
        href: string,
        rel: string,
        method: string
      }
    ]
  }