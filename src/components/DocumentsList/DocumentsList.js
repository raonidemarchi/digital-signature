import React, { useState } from 'react';

import styles from './DocumentsList.module.scss';
import searchIconSolid from '../../icons/search-solid.svg';

function DocumentsList() {
  const [activeMenu, setActiveMenu] = useState('allDocs');
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
    {
      id: 4,
      empresa: 'Grupo iv2',
      assinante: 'Vlamir Ienne',
      link: 'http://localhost:3000/document/asdA485790DD4142SA5QWdWQDdwqwqdWQDQWqwewqe123124ASDwq122135t',
      dataCadastro: '2019-06-17',
      dataAssinatura: null
    },
    {
      id: 5,
      empresa: 'Grupo iv2',
      assinante: 'Vlamir Ienne',
      link: 'http://localhost:3000/document/asdA485790DD4142SA5QWdWQDdwqwqdWQDQWqwewqe123124ASDwq122135t',
      dataCadastro: '2019-06-17',
      dataAssinatura: null
    },
    {
      id: 6,
      empresa: 'Grupo iv2',
      assinante: 'Vlamir Ienne',
      link: 'http://localhost:3000/document/asdA485790DD4142SA5QWdWQDdwqwqdWQDQWqwewqe123124ASDwq122135t',
      dataCadastro: '2019-06-17',
      dataAssinatura: null
    },
    {
      id: 7,
      empresa: 'Grupo iv2',
      assinante: 'Vlamir Ienne',
      link: 'http://localhost:3000/document/asdA485790DD4142SA5QWdWQDdwqwqdWQDQWqwewqe123124ASDwq122135t',
      dataCadastro: '2019-06-17',
      dataAssinatura: null
    },
    {
      id: 8,
      empresa: 'Grupo iv2',
      assinante: 'Vlamir Ienne',
      link: 'http://localhost:3000/document/asdA485790DD4142SA5QWdWQDdwqwqdWQDQWqwewqe123124ASDwq122135t',
      dataCadastro: '2019-06-17',
      dataAssinatura: null
    },
    {
      id: 9,
      empresa: 'Grupo iv2',
      assinante: 'Vlamir Ienne',
      link: 'http://localhost:3000/document/asdA485790DD4142SA5QWdWQDdwqwqdWQDQWqwewqe123124ASDwq122135t',
      dataCadastro: '2019-06-17',
      dataAssinatura: null
    },
    {
      id: 10,
      empresa: 'Grupo iv2',
      assinante: 'Vlamir Ienne',
      link: 'http://localhost:3000/document/asdA485790DD4142SA5QWdWQDdwqwqdWQDQWqwewqe123124ASDwq122135t',
      dataCadastro: '2019-06-17',
      dataAssinatura: null
    },
    {
      id: 11,
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

  const changeMenu = (menu) => {
    setActiveMenu(menu)
  }

  return (
    <div className={styles.container}>
      <div className={styles.sideMenu}>
        <div className={styles.headerSideMenuContainer}>
          <div className={styles.headerSideMenu}>
            <h6>Documentos</h6>
          </div>
        </div>

        <div className={styles.createButtonContainer}>
          <div className={styles.createButton} role="button">
            Novo
          </div>
        </div>

        <div className={styles.list}>
          <div className={[styles.listItem, activeMenu === 'allDocs' && styles.active].join(' ')} onClick={() => changeMenu('allDocs')}>
            Todos os documentos
          </div>
          <div className={[styles.listItem, activeMenu === 'unsigned' && styles.active].join(' ')} onClick={() => changeMenu('unsigned')}>
            Não assinados
          </div>
          <div className={[styles.listItem, activeMenu === 'signed' && styles.active].join(' ')} onClick={() => changeMenu('signed')}>
            Assinados
          </div>
        </div>
      </div>

      <div className={styles.listContainer}>
        <div className={styles.header}>
          <div className={styles.searchInputContainer}>
            <label htmlFor="search" title="Pesquisar" className={styles.buttonLabel}>
              <img src={searchIconSolid} className={styles.searchIcon} alt="Ícone pesquisar" />
            </label>

            <input id="search" type="search" className={styles.searchInput} placeholder="Pesquisar" />
          </div>

          <div className={styles.thead}>
            <div>Empresa</div>
            <div>Assinante</div>
            <div>Dia de cadastro</div>
            <div>Dia da assinatura</div>
          </div>
        </div>

        <table className={styles.table}>
          <tbody>
            {
              APIData.map((value, index) => {
                return <tr key={value.id} onClick={() => openDocument(value.link)}>
                  <td>
                    <div className={styles.initialsImage}>{value.empresa.substr(0, 1)}</div>
                    <div className={styles.signerOrganization}>{value.empresa}</div>
                  </td>
                  <td>{value.assinante}</td>
                  <td>{new Date(value.dataCadastro).getDate()}</td>
                  <td>{value.dataAssinatura ? 'Assinado em ' + new Date(value.dataAssinatura).toLocaleDateString() : 'Não assinado'}</td>
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