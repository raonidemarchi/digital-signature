import React, { useState, useEffect } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import SignatureCanvas from 'react-signature-canvas';

import styles from './DocumentDetails.module.scss';
import './pdf-viewer.scss';

import signatureIcon from '../../icons/signature-solid.svg';
import pdf from '../../pdf/example.pdf';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function DocumentDetails() {
  const [pagesCount, setPagesCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  let signaturePad = {};

  useEffect(() => {
    signaturePad.clear()
  })

  const onDocumentLoadSuccess = ({ numPages }) => {
    setPagesCount(numPages);
  }

  const openSignatureModal = () => {
    setModalOpen(true);
    signaturePad.clear()
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        MIF998 Engenharia de Processos - TOTVS - Sugestão de Melhoria - {pagesCount} páginas
      </div>
    
      <div className={styles.documentContainerWrapper}>
        <div className={styles.documentContainer}>
          <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
            {Array(pagesCount).fill().map(
              (value, index) => <Page key={index} pageNumber={index + 1} renderTextLayer={false} />
            )}
          </Document>

          <div className={styles.signaturePage}>
            <SignatureCanvas
              penColor="black"
              canvasProps={{ className: styles.signatureArea }}
              ref={ref => { signaturePad = ref }}
            />

            <div className={styles.signerDetails}>
              <p>Nome do cliente</p>
              <p>Empresa do cliente</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.fab} onClick={openSignatureModal}>
        <img className={styles.signatureIcon} src={signatureIcon} alt="Signature icon" /> Assinar proposta
      </div>

      
    </div>
  );
}

export default DocumentDetails;