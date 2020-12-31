export class Cliente {
    cliente: {
        id: string,
        nome: string,
        email: string,
        documento: string,
        dataCadastro: string
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