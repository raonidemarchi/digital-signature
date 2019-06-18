import React, { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import SignatureCanvas from 'react-signature-canvas';

import styles from './DocumentDetails.module.scss';
import './pdf-viewer.scss';

import signatureIcon from '../../icons/signature-solid.svg';
import paperPlane from '../../icons/paper-plane-solid.svg';
import undoIcon from '../../icons/undo-solid.svg';
import pdf from '../../pdf/example.pdf';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function DocumentDetails() {
  const [pagesCount, setPagesCount] = useState(0);
  const [signed, setSigned] = useState(false);
  const documentTitle = 'MIF998 Engenharia de Processos - TOTVS - Sugestão de Melhoria';
  let signaturePad = {};
  let signaturePage = {};

  document.title = documentTitle;

  window.onresize = function() {
    if (signed) {
      setSigned(false);
    }
  }

  const onDocumentLoadSuccess = ({ numPages }) => {
    setPagesCount(numPages);
  }

  const goToSignatureArea = () => {
    window.scrollTo(0, document.body.scrollHeight);
    
    signaturePage.classList.remove(styles.highlight);

    // highlights signature area
    setTimeout(() => {
      signaturePage.className += ' ' + styles.highlight;
    }, 200)
  }

  const changeButtonToSend = () => {
    setSigned(!signaturePad.isEmpty());
  }

  const clearSignaturePad = () => {
    signaturePad.clear();
    setSigned(false);
  }

  const sendSignedDocument = () => {
    fetch('https://pdfgen.catini.org', {
        method: 'post',
        body: JSON.stringify({
          html: `<img src="${signaturePad.getTrimmedCanvas().toDataURL('image/png')}" width="400" />`,
          filename: 'Raoni'
        })
      })
      .then(res => res.json())
      .then(
        (result) => { window.open(result.url) },
        (error) => {  }
      )
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {documentTitle} - {pagesCount} páginas
      </div>
    
      <div className={styles.documentContainerWrapper}>
        <div className={styles.documentContainer}>
          <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
            {Array(pagesCount).fill().map(
              (value, index) => <Page key={index} pageNumber={index + 1} renderTextLayer={false} />
            )}
          </Document>

          <div className={styles.signaturePage} ref={ref => { signaturePage = ref }}>
            <SignatureCanvas
              penColor="black"
              canvasProps={{ className: styles.signatureArea }}
              ref={ref => { signaturePad = ref }}
              onEnd={changeButtonToSend}
            />

            <div className={styles.signerDetails}>
              <hr className={styles.signatureRow} />
              <p>
                <b>Laércio Cosentino</b>
                <br />
                TOTVS
              </p>
            </div>
          </div>
        </div>
      </div>

      { 
        signed ?
          <div>
            <div className={styles.fabClear} title="Apagar assinatura" onClick={clearSignaturePad}>
              <img className={styles.buttonIcon} src={undoIcon} alt="undo icon" />
            </div>

            <div className={styles.fabSend} title="Enviar proposta assinada" onClick={sendSignedDocument}>
              <img className={styles.buttonIcon} src={paperPlane} alt="Paper plane icon" /> Enviar
            </div>
          </div>
        :
          <div className={styles.fabGoSignature} onClick={goToSignatureArea}>
            <img className={styles.buttonIcon} src={signatureIcon} alt="Signature icon" /> Ir para assinatura
          </div>
      }
    </div>
  );
}

export default DocumentDetails;