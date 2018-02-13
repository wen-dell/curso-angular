import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  };

  constructor(private http: Http) { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form);

    console.log(this.usuario);
  }

  verificaValidTouched(campo) {
    return !campo.valid && campo.touched;
  }

  aplicaCSSErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  consultaCEP(cep) {
    cep = cep.replace(/\D/g, '');
    if (cep != "") {
      let validaCep = /^[0-9]{8}$/;

      if (validaCep.test(cep)) {
        this.http.get(`//viacep.com.br/ws/${cep}/json`)
          .map(cep => cep.json())
          .subscribe(cep => {
            console.log(cep);
          });
      }

    }
  }

}
