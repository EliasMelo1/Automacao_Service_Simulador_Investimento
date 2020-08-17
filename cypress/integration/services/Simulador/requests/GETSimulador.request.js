/// <reference types="cypress" />

function simulador(){
  return cy.request({
    method: 'GET',
    url: 'simulador',
    failOnStatusCode: false,
  })
}

export {simulador };