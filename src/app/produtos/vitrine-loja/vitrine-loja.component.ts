import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutosService } from '../produto.service';

@Component({
  selector: 'app-vitrine-loja',
  templateUrl: './vitrine-loja.component.html'
})

export class VitrineLojaComponent implements OnInit {

  constructor(private produtoService: ProdutosService) { }

  public produtos : Produto[];

  ngOnInit() {
    this.produtoService.obterProdutos().subscribe(
      produtos => {
        this.produtos = produtos;
        console.log(produtos);
      },
      error => console.log(error)
    );
  }
}
