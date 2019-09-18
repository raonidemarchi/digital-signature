import React, { useState, useEffect } from 'react';

import styles from './DocumentsList.module.scss';
import searchIconSolid from '../../icons/search-solid.svg';

function DocumentsList(props) {
  const [activeMenu, setActiveMenu] = useState(props.match.params.menu);
  const [results, setResults] = useState([]);
  
  useEffect(() => {
    const APIData = [
      {
        empresa: 'Totvs',
        assinante: 'Laércio Cosentino',
        link: 'asdA485790DD4142SA5QWdWQDdwqwqdWQDQWqwewqe123124ASDwq122135t',
        dataCadastro: '2019-06-12',
        dataAssinatura: null
      },
      {
        empresa: 'It\'s Informov',
        assinante: 'Cecílio Peres',
        link: 'asdA485790DD4142SA5QWdWQDdwqwqdWQDQWqwewqe123124ASDwq122135t',
        dataCadastro: '2019-06-10',
        dataAssinatura: '2019-06-16'
      },
      {
        empresa: 'Grupo iv2',
        assinante: 'Vlamir Ienne',
        link: 'asdA485790DD4142SA5QWdWQDdwqwqdWQDQWqwewqe123124ASDwq122135t',
        dataCadastro: '2019-06-17',
        dataAssinatura: null
      },
      {
        empresa: 'Grupo iv2',
        assinante: 'Vlamir Ienne',
        link: 'asdA485790DD4142SA5QWdWQDdwqwqdWQDQWqwewqe123124ASDwq122135t',
        dataCadastro: '2019-06-17',
        dataAssinatura: null
      },
      {
        empresa: 'Grupo iv2',
        assinante: 'Vlamir Ienne',
        link: 'asdA485790DD4142SA5QWdWQDdwqwqdWQDQWqwewqe123124ASDwq122135t',
        dataCadastro: '2019-06-17',
        dataAssinatura: null
      },
      {
        empresa: 'Grupo iv2',
        assinante: 'Vlamir Ienne',
        link: 'asdA485790DD4142SA5QWdWQDdwqwqdWQDQWqwewqe123124ASDwq122135t',
        dataCadastro: '2019-06-17',
        dataAssinatura: null
      },
      {
        empresa: 'Grupo iv2',
        assinante: 'Vlamir Ienne',
        link: 'asdA485790DD4142SA5QWdWQDdwqwqdWQDQWqwewqe123124ASDwq122135t',
        dataCadastro: '2019-06-17',
        dataAssinatura: null
      },
      {
        empresa: 'Grupo iv2',
        assinante: 'Vlamir Ienne',
        link: 'asdA485790DD4142SA5QWdWQDdwqwqdWQDQWqwewqe123124ASDwq122135t',
        dataCadastro: '2019-06-17',
        dataAssinatura: null
      },
      {
        empresa: 'Grupo iv2',
        assinante: 'Vlamir Ienne',
        link: 'asdA485790DD4142SA5QWdWQDdwqwqdWQDQWqwewqe123124ASDwq122135t',
        dataCadastro: '2019-06-17',
        dataAssinatura: null
      },
      {
        empresa: 'Grupo iv2',
        assinante: 'Vlamir Ienne',
        link: 'asdA485790DD4142SA5QWdWQDdwqwqdWQDQWqwewqe123124ASDwq122135t',
        dataCadastro: '2019-06-17',
        dataAssinatura: null
      },
      {
        empresa: 'Grupo iv2',
        assinante: 'Vlamir Ienne',
        link: 'asdA485790DD4142SA5QWdWQDdwqwqdWQDQWqwewqe123124ASDwq122135t',
        dataCadastro: '2019-06-17',
        dataAssinatura: null
      },
      {
        empresa: 'Grupo iv2',
        assinante: 'Vlamir Ienne',
        link: 'asdA485790DD4142SA5QWdWQDdwqwqdWQDQWqwewqe123124ASDwq122135t',
        dataCadastro: '2019-06-17',
        dataAssinatura: null
      },
      {
        empresa: 'Grupo iv2',
        assinante: 'Vlamir Ienne',
        link: 'asdA485790DD4142SA5QWdWQDdwqwqdWQDQWqwewqe123124ASDwq122135t',
        dataCadastro: '2019-06-17',
        dataAssinatura: null
      },
      {
        empresa: 'Grupo iv2',
        assinante: 'Vlamir Ienne',
        link: 'asdA485790DD4142SA5QWdWQDdwqwqdWQDQWqwewqe123124ASDwq122135t',
        dataCadastro: '2019-06-17',
        dataAssinatura: null
      },
      {
        empresa: 'Grupo iv2',
        assinante: 'Vlamir Ienne',
        link: 'asdA485790DD4142SA5QWdWQDdwqwqdWQDQWqwewqe123124ASDwq122135t',
        dataCadastro: '2019-06-17',
        dataAssinatura: null
      },
    ];

    setResults(APIData);
  }, []);

  useEffect(() => {
    const filterResults = menu => {
      switch(activeMenu) {
        case `all`: 
          console.log('all');
          break;

        case `unsigned`: 
          console.log('unsigned');
          break;

        case `signed`: 
          console.log('signed');
          break;

        default:
          break;
      }
    }

    filterResults(activeMenu);
  }, [activeMenu]);

  const openDocument = documentLink => {
    props.history.push(`/document/detail/${documentLink}`);
  }

  // const searchDocuments = query => { }

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
          <div className={[styles.listItem, activeMenu === `all` && styles.active].join(` `)} onClick={() => setActiveMenu(`all`)}>
            Todos os documentos
          </div>
          <div className={[styles.listItem, activeMenu === `unsigned` && styles.active].join(` `)} onClick={() => setActiveMenu(`unsigned`)}>
            Não assinados
          </div>
          <div className={[styles.listItem, activeMenu === `signed` && styles.active].join(` `)} onClick={() => setActiveMenu(`signed`)}>
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

            <input id="search" type="search" className={styles.searchInput} placeholder="Pesquisar" autoComplete="off" />
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
              results.map((value, index) =>
                <tr key={index} onClick={() => openDocument(value.link)}>
                  <td>
                    <div className={styles.initialsImage}>{value.empresa.substr(0, 1)}</div>
                    <div className={styles.signerOrganization}>{value.empresa}</div>
                  </td>
                  <td>{value.assinante}</td>
                  <td>{new Date(value.dataCadastro).toLocaleDateString()}</td>
                  <td>{value.dataAssinatura ? `Assinado em ${new Date(value.dataAssinatura).toLocaleDateString()}` : `Não assinado`}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DocumentsList;