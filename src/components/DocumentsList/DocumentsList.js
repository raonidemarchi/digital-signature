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
      empresa: 'Its Informov',
      assinante: 'Cecílio Peres',
      link: 'http://localhost:3000/document/asdA485790DD4142SA5QWdWQDdwqwqdWQDQWqwewqe123124ASDwq122135t',
      dataCadastro: '2019-06-10',
      dataAssinatura: '2019-06-16'
    },
    {
      id: 3,
      empresa: 'Totvs',
      assinante: 'Laércio Cosentino',
      link: 'http://localhost:3000/document/asdA485790DD4142SA5QWdWQDdwqwqdWQDQWqwewqe123124ASDwq122135t',
      dataCadastro: '2019-06-17',
      dataAssinatura: null
    },
  ]

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Assinante</th>
            <th>Empresa</th>
            <th>Dia de cadastro</th>
            <th>Dia da assinatura</th>
            <th>Link do documento</th>
          </tr>
        </thead>

        <tbody>
          {
            APIData.map((value, index) => {
              return <tr key={value.id}>
                <td>
                  {value.assinante}
                </td>
                <td>{value.empresa}</td>
                <td>{new Date(value.dataCadastro).toLocaleDateString()}</td>
                <td>{value.dataAssinatura ? new Date(value.dataAssinatura).toLocaleDateString() : 'Não assinado'}</td>
                <td className={styles.overflow}>
                  <a href={value.link} target="_blank" title={value.link} rel="noopener noreferrer">{value.link}</a>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default DocumentsList;