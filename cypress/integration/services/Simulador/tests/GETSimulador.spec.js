import * as GETSimulador from '../requests/GETSimulador.request';
import simuladorSchema from '../../../../contracts/simulador.contract' 

describe('GET Simulador', () => {
  it('Validar status 200 e body não vazio', () => {
    GETSimulador.simulador().should((response)=>{
      expect(response.status).to.eq(200);
      expect(response.body).to.be.not.null
    })
  });

  it('Validar valores ordenado de forma crescente', ()=>{
    GETSimulador.simulador().should((response)=>{
      const validaValores = response.body.valor[0] < response.body.valor[1] < response.body.valor[2] < response.body.valor[3];
      expect(validaValores).to.equal(true);
    })
  });

  it('Validar diferença de 12 meses entre os meses', () => {
    GETSimulador.simulador().should((response)=>{
      for(var i = 0; i<3; i++){
        var validaMeses = parseInt(response.body.meses[i+1]) - parseInt(response.body.meses[i]);
        expect(validaMeses).to.equal(12);
      }  
    });
  });

  it('Validar contrato', () => {
    GETSimulador.simulador().should((response)=>{
      return simuladorSchema.validateAsync(response.body) 
    });
  });

});