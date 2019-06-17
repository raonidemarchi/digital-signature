import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import styles from './TextEditor.module.scss';
import './editor.scss';

const TextEditor = () => {
  return (
    <div className={styles.editorContainer}>
      <Editor
        apiKey="6iaqlvrpv9febxmckg5urrjxzpeagg73ia11z1tq6d5536jb"
        init={{
          plugins: 'print preview fullpage powerpaste searchreplace autolink directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount tinymcespellchecker a11ychecker imagetools textpattern help formatpainter permanentpen pageembed linkchecker',
          toolbar: 'formatselect | bold italic strikethrough forecolor backcolor permanentpen formatpainter | link image media pageembed | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent | removeformat | addcomment',
          height: '100vh',
          width: '100%',
        }}
      />
    </div>
  );
}

export default TextEditor;