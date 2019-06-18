import React, { useState } from 'react';

import styles from './DocumentsList.module.scss';

function DocumentsList() {
  const APIData = [
    {
      id: 1,
      empresa: 'Totvs',
      assinante: 'Laércio Cosentino',
      link: 'http://localhost:3000/document/asdA485790DD4142SA5QWdWQDdwqwqdWQDQWqwewqe123124ASDwq122135t',
      dataCadastro: '2019-06-17',
      dataAssinatura: null
    },
    {
      id: 2,
      empresa: 'It\'s Informov',
      assinante: 'Cecílio Peres',
      link: 'http://localhost:3000/document/asdA485790DD4142SA5QWdWQDdwqwqdWQDQWqwewqe123124ASDwq122135t',
      dataCadastro: '2019-06-10',
      dataAssinatura: '2019-06-16'
    },
    {
      id: 3,
      empresa: 'Grupo iv2',
      assinante: 'Vlamir Ienne',
      link: 'http://localhost:3000/document/asdA485790DD4142SA5QWdWQDdwqwqdWQDQWqwewqe123124ASDwq122135t',
      dataCadastro: '2019-06-17',
      dataAssinatura: null
    },
  ]

  const openDocument = (documentLink) => {
    window.open(documentLink);
  }

  return (
    <div className={styles.container}>
      <div className={styles.sideMenu}>
        asd
      </div>

      <div className={styles.listContainer}>
        <div className={styles.searchInputContainer}>
          <input type="search" className={styles.searchInput} placeholder="Pesquisar" />
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Empresa</th>
              <th>Assinante</th>
              <th>Dia de cadastro</th>
              <th>Dia da assinatura</th>
            </tr>
          </thead>

          <tbody>
            {
              APIData.map((value, index) => {
                return <tr key={value.id} onClick={() => openDocument(value.link)}>
                  <td>
                    <div className={styles.signerImage}>{value.empresa.substr(0, 1)}</div>
                    <div className={styles.signerOrganization}>{value.empresa}</div>
                  </td>
                  <td>{value.assinante}</td>
                  <td>{new Date(value.dataCadastro).toLocaleDateString()}</td>
                  <td>{value.dataAssinatura ? new Date(value.dataAssinatura).toLocaleDateString() : 'Não assinado'}</td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DocumentsList;